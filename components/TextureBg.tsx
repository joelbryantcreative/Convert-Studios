// Subtle on-brand blurred backdrop (noir base with soft sage/teal glows).
// Drop inside a `relative` section; keep section content at `relative z-10`.
export function TextureBg({
  overlay = "bg-noir/60",
}: {
  overlay?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/texture.jpg')] bg-cover bg-center" />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
