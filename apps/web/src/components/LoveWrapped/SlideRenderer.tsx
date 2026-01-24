import type { Slide } from "@/types/slide";
import { IntroSlide } from "./IntroSlide";
import { MomentsSlide } from "./MomentsSlide";

export function SlideRenderer({ slide }: { slide: Slide }) {
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  return <MomentsSlide slide={slide} />;
}
