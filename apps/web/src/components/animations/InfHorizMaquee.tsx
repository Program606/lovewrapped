// MarqueeText.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  speedSec?: number; // lower = faster
};

export function MarqueeText({ text, className = "", speedSec = 12 }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap text-white/70"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speedSec,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
        <span aria-hidden="true">{text}</span>
        <span aria-hidden="true">{text}</span>
      </motion.div>
    </div>
  );
}
