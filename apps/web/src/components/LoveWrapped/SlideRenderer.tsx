import type {
  ApiSlide,
  ApiSlidesResponse,
  MomentsSlideType,
} from "@/types/slide";
import { IntroSlide } from "./IntroSlide";
import { MomentsSingle } from "./Moments/MomentsSingle";
import {MomentsSlide} from "@/components/LoveWrapped/MomentsSlide"; 
import { LetterSlide } from "./LetterSlide";
import { StatSlide } from "./StatsSlide";

type SlideRendererProps = {
  slide: ApiSlide;
  slides: ApiSlidesResponse;
};

export function SlideRenderer({ slide, slides }: SlideRendererProps) {
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  if (slide.type === "stats") return <StatSlide slide={slide} />;

  if (slide.type === "momentSingle") {
    const parent = slides.find(
      (s): s is MomentsSlideType =>
        s.type === "moments" && s.id === slide.parentId,
    );
    if (!parent) return null;

    const moment = parent.moments[slide.momentIndex];
    if (!moment) return null;

    return <MomentsSingle moment={moment} />;
  }

  if (slide.type === "moments") return <MomentsSlide slide={slide} />;
  if (slide.type === "letter") return <LetterSlide slide={slide} />;

  return null;
}
