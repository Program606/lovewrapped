export type SlideType = "intro" | "momentPage" | "moments" | "letter";

export type Slide =
  | {
      id: string;
      type: "intro";
      headline: string;
      subheadline: string;
      from: string;
      to: string;
      bg: string;
      accent: string;
    }
  | {
      id: string;
      type: "momentPage";
      bg: string;
      momentIndex: number;
      accent: string;
    }
  | {
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
  | {
      id: string;
      type: "letter";
      title: string;
      text: string;
      align?: "left" | "center";
      bg: string;
      accent: string;
    };
