export function FuturisticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fafafa]"
    >
      <div className="bg-base-gradient absolute inset-0" />
      <div className="bg-grid-subtle absolute inset-0 opacity-40" />
      <div className="bg-radial-glow-top absolute inset-0" />
      <div className="bg-radial-glow-center absolute inset-0" />
      <div className="bg-radial-glow-center-right absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
      <div className="bg-noise-subtle absolute inset-0 opacity-[0.045] mix-blend-multiply" />
    </div>
  )
}
