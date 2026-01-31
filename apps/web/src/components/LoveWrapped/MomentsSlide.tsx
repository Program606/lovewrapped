import type { Slide } from "@/types/slide";
import { DroppingCardList, type DroppingCard } from "../animations/DroppingCard";

export function MomentsSlide({
  slide,
  active = true,
}: {
  slide: Slide & { type: "moments" };
  active?: boolean;
}) {
  // Convert slide.moments to DroppingCard format
  const cards: DroppingCard[] = slide.moments.map((moment, idx) => ({
    id: `moment-${idx}`,
    title: moment.title,
    body: moment.body,
    imageUrl: moment.imageUrl,
    badge: undefined,
  }));

  return (
    <div className="h-full w-full px-6 pt-16 pb-10 text-white">
      <h2 className="text-2xl font-bold">{slide.title}</h2>

      <div className="flex items-center justify-center flex-1">
        <DroppingCardList
          active={active}
          cards={cards}
          revealIntervalMs={450}
          startDelayMs={250}
          className="w-full"
        />
      </div>
    </div>
  );
}
