import type { StatsSlideType  } from "@/types/slide";
import { VerticalSlideText } from "@/components/animations/VerticalTextTB";
import EnvelopeLetter from "@/components/letter/EnvelopeLetter";

export function StatSlide({ slide }: { slide: StatsSlideType  }) {
  return (
    <div className="h-full w-full px-6 text-white flex flex-col justify-center bg-red-400 z-2">
      <div className="w-full h-[600px] flex flex-col items-center gap-8 z-3">
        <VerticalSlideText
          text={slide.title}
          delay={0.8}
          className="text-5xl font-mono text-center"
        />

        <EnvelopeLetter
          letterText={
            "Hey.\n\nI made this just for you.\n\nEvery little moment mattered.\n\n— Prince"
          }
          envelopeColor="#ff79b0"
          accentColor="rgba(255, 121, 176, 0.55)"
          paperPeek={28}
          threshold={0.75}
          clicksToHalfOpen={3}
        />
      </div>
    </div>
  );
}
