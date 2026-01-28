export type SlideType = "intro" | "momentPage" | "moments" | "letter";

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
      id: string;
      type: "momentPage";
      momentIndex: number;
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
        location?: string;
      }>;
      bg: string;
      accent: string;
    }
  | {
      id: "letter";
      type: "letter";
      title: string;
      text: string;
      align?: "left" | "center";
      bg: string;
      accent: string;
    };
