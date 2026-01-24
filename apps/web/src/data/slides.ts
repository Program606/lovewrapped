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
    accent: "#F97316",
  },
  {
    id: "moments",
    type: "moments",
    title: "Top 5 moments with you",
    moments: [
      {
        imageUrl: "...",
        title: "Late-night talks",
        body: "The kind where time disappears.",
      },
    ],
    bg: "#111827",
    accent: "#F97316",
  },
  {
    id: "letter",
    type: "letter",
    title: "A Letter to You",
    text: `Hey you.

        I don’t say this enough, but you matter more to me than you probably realize.
        Every small moment, every quiet laugh, every late reply—it all adds up.

        No matter where life pulls us next,
        this chapter will always be one of my favorites.`,
        
    align: "left",
    bg: "#111827",
    accent: "#F97316",
  },
];
