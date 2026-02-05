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

export type MomentsSlideType = {
  id: string;
  type: "moments";
  title: string;
  bg: string;
  accent: string;
  moments: Moment[];
};
export type MomentSingleSlideType = {
  id: string;
  type: "momentSingle";
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
  | MomentSingleSlideType
  | MomentsSlideType
  | LetterSlideType
  | StatsSlideType;

export type ApiSlidesResponse = ApiSlide[];
