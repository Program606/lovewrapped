import type { ApiSlide, ApiSlidesResponse, MomentsSlideType } from "@/types/slide";
import { IntroSlide } from "./IntroSlide";
// import { MomentsSlide } from "./MomentsSlide";
import { MomentsSingle } from "./Moments/MomentsSingle";
import { LetterSlide } from "./LetterSlide";
import { StatSlide } from "./StatsSlide";


type SlideRendererProps = {
  slide: ApiSlide;
  slides: ApiSlidesResponse,
};

export function SlideRenderer({ slide, slides }: SlideRendererProps) {
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  if (slide.type === "stats") return <StatSlide slide={slide} />;

  if (slide.type === "momentPage") {
  const momentsSlide = slides.find(
    (s): s is MomentsSlideType => s.type === "moments"
  );

  if (!momentsSlide) return null;
  if (slide.momentIndex == null) return null;

  const moment = momentsSlide.moments[slide.momentIndex];

  if (!moment) return null;

  return <MomentsSingle moment={moment} />;
}

  // if (slide.type === "moments") return <MomentsSlide slide={slide} />;
  if (slide.type === "letter") return <LetterSlide slide={slide} />;

  return null;
}

