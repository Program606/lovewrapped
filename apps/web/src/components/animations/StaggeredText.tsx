// StaggerWords.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
};

export function StaggeredText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
}: Props) {
  const words = text.split(" ").filter(Boolean);

  return (
    <motion.p
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.045,
          },
        },
      }}
      className={`text-white/95 leading-snug ${className}`}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={{
            hidden: { y: 10, opacity: 0, filter: "blur(6px)" },
            show: { y: 0, opacity: 1, filter: "blur(0px)" },
          }}
          transition={{ type: "spring", stiffness: 520, damping: 34 }}
          className={`inline-block mr-1 ${wordClassName}`}
        >
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
}
