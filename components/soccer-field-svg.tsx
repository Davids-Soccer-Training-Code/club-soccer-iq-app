export function SoccerFieldSvg({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border border-green-200 bg-[#07120c]"
      style={{ aspectRatio: "1166 / 1126" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#07140c_0_8.2%,#0b1f12_8.2%_16.4%)]"
      />
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full text-white/65"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <rect fill="none" height="90" stroke="currentColor" strokeWidth="0.8" width="90" x="5" y="5" />
        <line stroke="currentColor" strokeWidth="0.7" x1="5" x2="95" y1="50" y2="50" />
        <circle cx="50" cy="50" fill="none" r="9" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="50" fill="currentColor" r="0.6" />
        <rect fill="none" height="18" stroke="currentColor" strokeWidth="0.7" width="50" x="25" y="5" />
        <rect fill="none" height="8" stroke="currentColor" strokeWidth="0.7" width="24" x="38" y="5" />
        <path d="M 42 23 A 9 9 0 0 0 58 23" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="17" fill="currentColor" r="0.6" />
        <rect fill="none" height="18" stroke="currentColor" strokeWidth="0.7" width="50" x="25" y="77" />
        <rect fill="none" height="8" stroke="currentColor" strokeWidth="0.7" width="24" x="38" y="87" />
        <path d="M 42 77 A 9 9 0 0 1 58 77" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="83" fill="currentColor" r="0.6" />
      </svg>
      <div aria-hidden className="absolute inset-0 bg-black/25" />
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}
