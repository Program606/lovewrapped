export type SlideType = "intro" | "momentPage" | "moments" | "letter" | "stats";

interface BaseSlide {
  id: string;
  type: SlideType;
  bg: string;
  accent: string;
}

interface IntroSlide extends BaseSlide {
  id: string;
  type: "intro";
  headline: string;
  subheadline: string;
  from: string;
  to: string;
  bg: string;
  accent: string;
}

interface MomentPageSlide extends BaseSlide {
  id: string;
  type: "momentPage";
  momentIndex: number;
  bg: string;
  accent: string;
}

interface MomentsSlide extends BaseSlide {
  id: string;
  type: "moments";
  title: string;
  moments: Array<{
    imageUrl: string;
    title: string;
    body: string;
    location?: string;
  }>;
  bg: string;
  accent: string;
}

interface LetterSlide extends BaseSlide {
  id: string;
  type: "letter";
  title: string;
  text: string;
  align?: "left" | "center";
  bg: string;
  accent: string;
}

interface StatsSlide extends BaseSlide {
  id: string;
  type: "stats";
  title: string;
  text: string;
  bg: string;
  accent: string;
}

export type Slide =
  | IntroSlide
  | MomentPageSlide
  | MomentsSlide
  | LetterSlide
  | StatsSlide;