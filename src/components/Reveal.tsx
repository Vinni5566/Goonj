import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number; children: ReactNode };

export function Reveal({ delay = 0, y = 24, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
