/**
 * GlowingEffect — borde con glow interactivo que sigue el mouse
 *
 * Uso: dentro de un wrapper `relative` que tenga `rounded-*` heredable.
 * El glow aparece al acercar el cursor al borde de la card.
 *
 * Props:
 *   blur            — blur del glow en px (default 0)
 *   spread          — apertura del arco del glow (default 20)
 *   proximity       — píxeles extra de zona activa fuera del elemento (default 0)
 *   inactiveZone    — % del centro donde NO activa (default 0.7)
 *   movementDuration— segundos de interpolación del ángulo (default 2)
 *   borderWidth     — grosor del borde en px (default 1)
 *   disabled        — desactiva el efecto (default true — activar explícitamente)
 *   variant         — "default" (multicolor) | "blue" (paleta Mardini) | "white"
 *
 * NOTA: "default" usa paleta rosa/dorado/verde del componente original.
 * Usa variant="blue" para la paleta Mardini IA.
 *
 * DEPENDENCIA: motion/react — instalar con `npm i motion`
 */

"use client"

import { memo, useCallback, useEffect, useRef } from "react"
import { animate } from "motion/react"

const gradients = {
  default: `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
    radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
    radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
    radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
    repeating-conic-gradient(from 236.84deg at 50% 50%,
      #dd7bbb 0%, #d79f1e 5%, #5a922c 10%, #4c7894 15%, #dd7bbb 20%)`,
  blue: `radial-gradient(circle, #3b82f6 10%, #3b82f600 20%),
    radial-gradient(circle at 40% 40%, #6366f1 5%, #6366f100 15%),
    radial-gradient(circle at 60% 60%, #2563eb 10%, #2563eb00 20%),
    radial-gradient(circle at 40% 60%, #8b5cf6 10%, #8b5cf600 20%),
    repeating-conic-gradient(from 236.84deg at 50% 50%,
      #3b82f6 0%, #6366f1 5%, #2563eb 10%, #8b5cf6 15%, #3b82f6 20%)`,
  white: `repeating-conic-gradient(from 236.84deg at 50% 50%, #000, #000 5%)`,
}

export const GlowingEffect = memo(({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "blue",
  glow = false,
  className = "",
  movementDuration = 2,
  borderWidth = 1,
  disabled = true,
}) => {
  const containerRef = useRef(null)
  const lastPosition = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(0)

  const handleMove = useCallback((e) => {
    if (!containerRef.current) return
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)

    animationFrameRef.current = requestAnimationFrame(() => {
      const el = containerRef.current
      if (!el) return

      const { left, top, width, height } = el.getBoundingClientRect()
      const mouseX = e?.x ?? lastPosition.current.x
      const mouseY = e?.y ?? lastPosition.current.y
      if (e) lastPosition.current = { x: mouseX, y: mouseY }

      const center = [left + width * 0.5, top + height * 0.5]
      const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
      const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

      if (distanceFromCenter < inactiveRadius) { el.style.setProperty("--active", "0"); return }

      const isActive = mouseX > left - proximity && mouseX < left + width + proximity
        && mouseY > top - proximity && mouseY < top + height + proximity

      el.style.setProperty("--active", isActive ? "1" : "0")
      if (!isActive) return

      const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0
      let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90
      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
      const newAngle = currentAngle + angleDiff

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => el.style.setProperty("--start", String(v)),
      })
    })
  }, [inactiveZone, proximity, movementDuration])

  useEffect(() => {
    if (disabled) return
    const onScroll = () => handleMove()
    const onMove = (e) => handleMove(e)
    window.addEventListener("scroll", onScroll, { passive: true })
    document.body.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener("scroll", onScroll)
      document.body.removeEventListener("pointermove", onMove)
    }
  }, [handleMove, disabled])

  return (
    <>
      <div className={[
        "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
        glow && "opacity-100",
        variant === "white" && "border-white",
        disabled && "!block",
      ].filter(Boolean).join(" ")} />
      <div
        ref={containerRef}
        style={{
          "--blur": `${blur}px`,
          "--spread": spread,
          "--start": "0",
          "--active": "0",
          "--glowingeffect-border-width": `${borderWidth}px`,
          "--repeating-conic-gradient-times": "5",
          "--gradient": gradients[variant] ?? gradients.blue,
        }}
        className={[
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
          glow && "opacity-100",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden",
        ].filter(Boolean).join(" ")}
      >
        <div className={[
          "glow rounded-[inherit]",
          'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
          "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
          "after:[background:var(--gradient)] after:[background-attachment:fixed]",
          "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
          "after:[mask-clip:padding-box,border-box]",
          "after:[mask-composite:intersect]",
          "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
        ].join(" ")} />
      </div>
    </>
  )
})

GlowingEffect.displayName = "GlowingEffect"
