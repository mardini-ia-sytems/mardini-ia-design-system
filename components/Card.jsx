/**
 * Card — Mardini IA Design System
 *
 * Patrón estándar: glassmorphism oscuro + border sutil + hover glow.
 * Composable: envuelve cualquier contenido.
 */

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={[
        "relative",
        "bg-gradient-to-br from-gray-900/80 to-gray-800/50",
        "backdrop-blur-sm",
        "border border-gray-800/50",
        "rounded-2xl",
        "p-6 sm:p-8",
        "hover:border-gray-700/50",
        "transition-all duration-300",
        "hover:shadow-lg hover:shadow-blue-500/10",
        "overflow-hidden",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * CardAccent — variante con borde azul destacado
 */
export function CardAccent({ children, className = "", ...props }) {
  return (
    <div
      className={[
        "relative",
        "bg-gradient-to-br from-blue-950/40 to-gray-900/80",
        "backdrop-blur-sm",
        "border border-blue-500/30",
        "rounded-2xl",
        "p-6 sm:p-8",
        "hover:border-blue-500/50",
        "transition-all duration-300",
        "overflow-hidden",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  )
}
