export type SlideType = "intro" | "moments";

export type Slide =
  | {
      id: "intro";
      type: "intro";
      headline: string;
      subheadline: string;
      from: string;
      to: string;
      bg: string;
      accent: string;
    }
  | {
      id: "moments";
      type: "moments";
      title: string;
      moments: Array<{
        imageUrl: string;
        title: string;
        body: string;
      }>;
      bg: string;
      accent: string;
    };
