import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = { className?: string; size?: number };

export function MemoryJar({ className = "", size = 240 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className={className} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 240" width={size} height={size} aria-hidden>
        <defs>
          <linearGradient id="jarFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0B85C" />
            <stop offset="100%" stopColor="#E8A84C" />
          </linearGradient>
          <clipPath id="jarClip">
            <path d="M40 70 Q 40 60 50 60 L 150 60 Q 160 60 160 70 L 160 210 Q 160 225 145 225 L 55 225 Q 40 225 40 210 Z" />
          </clipPath>
        </defs>

        {/* Lid */}
        <rect x="45" y="20" width="110" height="32" rx="6" fill="#2D1B4E" />
        <rect x="50" y="48" width="100" height="10" rx="3" fill="#6B3FA0" />

        {/* Jar outline */}
        <path
          d="M40 70 Q 40 60 50 60 L 150 60 Q 160 60 160 70 L 160 210 Q 160 225 145 225 L 55 225 Q 40 225 40 210 Z"
          fill="#FDFAF5"
          stroke="#2D1B4E"
          strokeWidth="2.5"
        />

        {/* Fill animated */}
        <g clipPath="url(#jarClip)">
          <motion.rect
            x="40"
            y="60"
            width="120"
            height="165"
            fill="url(#jarFill)"
            initial={{ y: 230 }}
            animate={inView ? { y: 90 } : { y: 230 }}
            transition={{ duration: 2, ease: "easeOut" }}
            opacity="0.85"
          />
          {/* Sound waves */}
          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={i}
              d={`M ${55 + i * 25} 150 q 5 -${10 + i * 3} 10 0 q 5 ${10 + i * 3} 10 0`}
              stroke="#FDFAF5"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.85 } : {}}
              transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
            />
          ))}
        </g>

        {/* Label */}
        <rect x="60" y="120" width="80" height="36" rx="4" fill="#FDFAF5" opacity="0.9" stroke="#2D1B4E" strokeWidth="1" />
        <text x="100" y="143" textAnchor="middle" fontFamily="serif" fontSize="13" fill="#2D1B4E" fontStyle="italic">
          memories
        </text>
      </svg>
    </div>
  );
}
