/**
 * Section — Mardini IA Design System
 *
 * Wrapper de sección con padding estándar, container centrado
 * y blobs decorativos opcionales.
 *
 * Props:
 *   maxWidth  — "7xl" (default) | "6xl" | "5xl" | "4xl"
 *   blobs     — true | false (default false)
 */

const maxWidths = {
  "7xl": "max-w-7xl",
  "6xl": "max-w-6xl",
  "5xl": "max-w-5xl",
  "4xl": "max-w-4xl",
}

export function Section({ children, maxWidth = "6xl", blobs = false, className = "", ...props }) {
  return (
    <section
      className={["relative py-16 sm:py-24 lg:py-28 overflow-hidden", className].join(" ")}
      {...props}
    >
      {blobs && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
        </>
      )}
      <div className={[maxWidths[maxWidth] ?? maxWidths["6xl"], "mx-auto px-4 sm:px-6 lg:px-8"].join(" ")}>
        {children}
      </div>
    </section>
  )
}
