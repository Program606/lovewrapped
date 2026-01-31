import type { Slide } from "@/types/slide";
import {motion}  from "framer-motion";

type StatsSlide = Extract<Slide, { type: "stats" }>;

export function StatSlide({ slide }: { slide: StatsSlide }) {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 text-white">
      {/* <div className="text-xs uppercase tracking-[0.25em] text-white/70">
        Stats
      </div> */}

      <div className="mt-4 text-center">
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} />
        
      </div>
    </div>
  );
}
