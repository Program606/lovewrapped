import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dummyData } from "@/data/slidesData";
import { slideVariants } from "@/components/animations/slideVariants";
import { SlideRenderer } from "@/components/LoveWrapped/SlideRenderer";
import { ProgressBar } from "@/components/LoveWrapped/ProgressBar";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function LoveWrappedMVP() {
  const total = dummyData.length;
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const current = dummyData[index];

  const progressPct = useMemo(
    () => ((index + 1) / total) * 100,
    [index, total]
  );

  function goNext() {
    setIndex(([i]) => [clamp(i + 1, 0, total - 1), 1]);
  }

  function goPrev() {
    setIndex(([i]) => [clamp(i - 1, 0, total - 1), -1]);
  }

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: current.bg }}>
      <ProgressBar progressPct={progressPct} />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.y < -80 || info.velocity.y < -600) goNext();
            if (info.offset.y > 80 || info.velocity.y > 600) goPrev();
          }}
          className="absolute inset-0"
        >
          <SlideRenderer slide={current} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
