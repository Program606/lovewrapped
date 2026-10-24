interface BaseSlide {
  id: string;
  type: "intro" | "moments" | "letter" | "stats";
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

export type MomentsSlideType = {
  id: string;
  type: "moments";
  title: string;
  bg: string;
  accent: string;
  moments: Moment[];
};
export type SingleSlideType = {
  id: string;
  type: "singleMain";
  parentId: string;
  momentIndex: number;
  bg: string;
};
export interface Moment {
  order: number;
  imageUrl: string;
  title: string;
  body: string;
  location?: string;
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
  | MomentsSlideType
  | LetterSlideType
  | StatsSlideType;

export type ApiSlidesResponse = ApiSlide[];
