import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariants } from "@/components/animations/slideVariants";
import { SlideRenderer } from "@/components/LoveWrapped/SlideRenderer";
import { ProgressBar } from "@/components/LoveWrapped/ProgressBar";
import type { ApiSlidesResponse } from "@/types/slide";
import {dummyData1} from "../../data/dummyData";
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function LoveWrappedMVP() {
  const slideData: ApiSlidesResponse = (dummyData1);
  // const [slideData, setSlideData] = useState<ApiSlidesResponse>([]);
  const total = slideData.length;
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const current = slideData[index];

  const progressPct = useMemo(
    () => ((index + 1) / total) * 100,
    [index, total],
  );

  function goNext() {
    setIndex(([i]) => [clamp(i + 1, 0, total - 1), 1]);
  }

  function goPrev() {
    setIndex(([i]) => [clamp(i - 1, 0, total - 1), -1]);
  }
  // useEffect(() => {
  //   const fetchClientData = async () => {
  //     const { data } = await axios.get<ApiSlidesResponse>("/api");
  //     setSlideData(data);
  //   };
  //   fetchClientData();
  // }, []);

  if (!current) return null;

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: current.bg}}
    >
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
          <SlideRenderer slide={current} slides={slideData} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
