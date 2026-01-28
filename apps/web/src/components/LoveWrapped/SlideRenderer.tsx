import type { Slide } from "@/types/slide";
import { IntroSlide } from "./IntroSlide";
import { MomentsSlide } from "./MomentsSlide";
import { LetterSlide } from "./LetterSlide";

export function SlideRenderer({ slide }: { slide: Slide }) {
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  if (slide.type === "moments") return <MomentsSlide slide={slide} />;
  if (slide.type === "letter") return <LetterSlide slide={slide} />;
  
  // Exhaustive check - TypeScript will error if we miss a type
  const _exhaustive: never = slide;
  return _exhaustive;
}
