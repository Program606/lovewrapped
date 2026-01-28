import type { Slide } from "@/types/slide";
import { slides } from "@/data/slides";
import { IntroSlide } from "./IntroSlide";
import { MomentsSlide } from "./MomentsSlide";
import { LetterSlide } from "./LetterSlide";
import { MomentsSingle } from "./Moments/MomentsSingle";

export function SlideRenderer({ slide }: { slide: Slide }) {
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  if (slide.type === "momentPage") {
    const momentsSlide = slides.find(s => s.type === "moments");
    const moment = momentsSlide && momentsSlide.type === "moments" ? momentsSlide.moments[slide.momentIndex] : null;
    return moment ? <MomentsSingle moment={moment} /> : null;
  }
  if (slide.type === "moments") return <MomentsSlide slide={slide} />;
  if (slide.type === "letter") return <LetterSlide slide={slide} />;
}
