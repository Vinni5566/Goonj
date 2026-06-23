type Props = { className?: string; size?: number };

export function Gungu({ className = "", size = 56 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="gunguWing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0B85C" />
          <stop offset="100%" stopColor="#C4604A" />
        </linearGradient>
      </defs>
      {/* left wing — cassette ribbon */}
      <path
        d="M30 32 C 14 14, 4 22, 8 34 C 11 44, 22 44, 30 32 Z"
        fill="url(#gunguWing)"
        opacity="0.92"
      />
      <path d="M12 28 Q 20 30 26 32" stroke="#2D1B4E" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M11 33 Q 19 34 26 33" stroke="#2D1B4E" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* right wing */}
      <path
        d="M34 32 C 50 14, 60 22, 56 34 C 53 44, 42 44, 34 32 Z"
        fill="url(#gunguWing)"
        opacity="0.92"
      />
      <path d="M38 32 Q 44 30 52 28" stroke="#2D1B4E" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M38 33 Q 45 34 53 33" stroke="#2D1B4E" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* body */}
      <ellipse cx="32" cy="32" rx="2.2" ry="9" fill="#2D1B4E" />
      <circle cx="32" cy="23" r="2.6" fill="#2D1B4E" />
      <path d="M31 21 Q 29 17 27 16" stroke="#2D1B4E" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M33 21 Q 35 17 37 16" stroke="#2D1B4E" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}
