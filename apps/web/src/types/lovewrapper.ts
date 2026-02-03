export type SlideType = "intro" | "memory" | "reason" | "photo" | "outro";

export interface Theme {
  primaryColor: string;
  accentColor: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface Person {
  id: string;   // "james"
  name: string; // "James"
}

export interface BaseSlide {
  id: string;
  type: SlideType;
  order?: number;
  backgroundColor?: string;
  accentColor?: string;
}

export interface IntroSlide extends BaseSlide {
  type: "intro";
  headline: string;
  subheadline?: string;
}

export interface MemorySlide extends BaseSlide {
  type: "memory";
  title: string;
  description: string;
  dateLabel?: string;
  imageUrl?: string;
}

export interface ReasonSlide extends BaseSlide {
  type: "reason";
  title: string; // "Reason #1 I love you"
  body: string;  // the text
}

export interface PhotoSlide extends BaseSlide {
  type: "photo";
  imageUrl: string;
  caption?: string;
}

export interface OutroSlide extends BaseSlide {
  type: "outro";
  headline: string;
  message?: string;
}

export type Slide =
  | IntroSlide
  | MemorySlide
  | ReasonSlide
  | PhotoSlide
  | OutroSlide;

export interface LoveWrapperConfig {
  sender: Person;
  recipient: Person;
  title: string;
  theme: Theme;
  slides: Slide[];
}
