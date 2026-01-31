// HorizontalSlideText.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export function HorizontalSlideText({ text, className = "", delay = 0 }: Props) {
  return (
    <motion.p
      initial={{ x: -22, opacity: 0, filter: "blur(6px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      exit={{ x: 22, opacity: 0, filter: "blur(6px)" }}
      transition={{ type: "spring", stiffness: 420, damping: 30, delay }}
      className={`text-white/90 ${className}`}
    >
      {text}
    </motion.p>
  );
}
