// VerticalSlideText.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export function VerticalSlideText({
  text,
  className = "",
  delay = 0.9,
}: Props) {
  return (
    <motion.p
      initial={{
        y: 80,
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.95,
      }}
      animate={{
        y: [80, 0, -60, -60], // BIG vertical travel
        opacity: [0, 1, 1, 1],
        filter: ["blur(12px)", "blur(0px)", "blur(0px)", "blur(0px)"],
        scale: [0.95, 1.05, 1.02, 1],
      }}
      exit={{
        y: -60,
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.9,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        times: [0, 0.4, 0.75, 1],
        delay,
      }}
      className={`text-white/90 ${className}`}
    >
      {text}
    </motion.p>
  );
}
