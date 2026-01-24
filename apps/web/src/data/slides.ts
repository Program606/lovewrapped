import type { Slide } from "@/types/slide";

export const slides: Slide[] = [
  {
    id: "intro",
    type: "intro",
    headline: "Laura, this is your LoveWrapped 💛",
    subheadline: "From James — swipe up when you're ready.",
    from: "James",
    to: "Laura",
    bg: "#0B1220",
    accent: "#F97316"
  },
  {
    id: "moments",
    type: "moments",
    title: "Top 5 moments with you",
    moments: [
      {
        imageUrl: "...",
        title: "Late-night talks",
        body: "The kind where time disappears."
      }
    ],
    bg: "#111827",
    accent: "#F97316"
  }
];
