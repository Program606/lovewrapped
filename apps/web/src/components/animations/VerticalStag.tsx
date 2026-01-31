// VerticalSlideText.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export function VerticalSlideText({ text, className = "", delay = 0 }: Props) {
  return (
    <motion.p
      initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ y: -18, opacity: 0, filter: "blur(6px)" }}
      transition={{ type: "spring", stiffness: 420, damping: 28, delay}}
      className={`text-white/90 ${className}`}
    >
      {text}
    </motion.p>
  );
}
