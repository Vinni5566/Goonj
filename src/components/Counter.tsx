import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = { to: number; suffix?: string; duration?: number };

export function Counter({ to, suffix = "", duration = 1800 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = val >= 1_000_000 ? `${(val / 1_000_000).toFixed(0)}M` : val >= 1000 ? `${(val / 1000).toFixed(0)}K` : `${val}`;

  return <span ref={ref}>{formatted}{suffix}</span>;
}
