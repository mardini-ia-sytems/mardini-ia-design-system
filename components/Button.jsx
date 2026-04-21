/**
 * Button — Mardini IA Design System
 *
 * Variantes:
 *   primary  — CTA gradient azul (default)
 *   ghost    — borde sutil, fondo transparente
 *   link     — solo texto, sin background
 *
 * Tamaños:
 *   sm, md (default), lg
 */

import * as React from "react"

const variants = {
  primary: [
    "bg-gradient-to-r from-blue-600 to-blue-500",
    "hover:from-blue-500 hover:to-blue-400",
    "text-white font-bold",
    "shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50",
    "hover:scale-[1.02]",
  ].join(" "),
  ghost: [
    "bg-transparent",
    "border border-white/10 hover:border-white/20",
    "text-gray-300 hover:text-white",
  ].join(" "),
  link: "text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline",
}

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-10 py-4 text-xl rounded-xl",
}

const Button = React.forwardRef(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2",
          "whitespace-nowrap font-medium",
          "transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant] ?? variants.primary,
          sizes[size] ?? sizes.md,
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
