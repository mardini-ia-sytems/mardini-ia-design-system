/**
 * Badge — Mardini IA Design System
 *
 * Uso: etiquetas de categoría, estado, highlights en headlines.
 * Variantes: blue (default), green, yellow, orange, purple
 */

const variants = {
  blue:   "bg-blue-500/10 border-blue-500/20 text-blue-400",
  green:  "bg-green-500/10 border-green-500/20 text-green-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
}

export function Badge({ children, variant = "blue", className = "", icon: Icon, ...props }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2",
        "px-4 py-2",
        "border rounded-full",
        "text-sm font-medium",
        "transition-colors duration-200",
        variants[variant] ?? variants.blue,
        className,
      ].join(" ")}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  )
}
