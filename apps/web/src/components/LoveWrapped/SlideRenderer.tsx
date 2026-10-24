import type {
  ApiSlide
} from "@/types/slide";
import { IntroSlide } from "./IntroSlide";
import {MomentsSlide} from "./MomentsSlide"; 
import { LetterSlide } from "./LetterSlide";
import { StatSlide } from "./StatsSlide";
import { PhotoDumpSlide } from "./PhotoDumpSlideType";

type SlideRendererProps = {
  slide: ApiSlide;
};

export function SlideRenderer({ slide}: SlideRendererProps) {
  if (slide.type === "photoDump") return <PhotoDumpSlide slide={slide}/>;
  if (slide.type === "intro") return <IntroSlide slide={slide} />;
  if (slide.type === "stats") return <StatSlide slide={slide} />;
  if (slide.type === "moments") return <MomentsSlide slide={slide} />;
  if (slide.type === "letter") return <LetterSlide slide={slide} />;

  return null;
}
