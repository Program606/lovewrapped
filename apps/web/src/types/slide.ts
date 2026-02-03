
interface BaseSlide {
  id: string;
  type: "intro" | "momentPage" | "moments" | "letter" | "stats";
  bg: string;
  accent: string;
}

export interface IntroSlideType extends BaseSlide {
  type: "intro";
  headline: string;
  subheadline: string;
  from: string;
  to: string;
}

export interface MomentPageSlideType extends BaseSlide {
  type: "momentPage";
  momentIndex: number;
}

export interface MomentsSlideType extends BaseSlide {
  type: "moments";
  title: string;
  moments: Array<{
    imageUrl: string;
    title: string;
    body: string;
    location?: string;
  }>;
}

export interface LetterSlideType extends BaseSlide {
  type: "letter";
  title: string;
  text: string;
  align?: "left" | "center";
}

export interface StatsSlideType extends BaseSlide {
  type: "stats";
  title: string;
  text: string;
}

export type ApiSlide =
  | IntroSlideType
  | MomentPageSlideType
  | MomentsSlideType
  | LetterSlideType
  | StatsSlideType;

export type ApiSlidesResponse = ApiSlide[];