import type { Slide } from "@/types/slide";

const moments = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1752824061955-a3787752b1bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Late-night talks",
    body: "The kind where time disappears.",
    location: "Your apartment",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop",
    title: "Coffee mornings",
    body: "Your smile over a warm cup.",
    location: "Our favorite cafe",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1719715734324-804920841025?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Road trip adventures",
    body: "Windows down, music loud, you by my side.",
    location: "Pacific Coast Highway",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    title: "Sunset walks",
    body: "Golden hour with your hand in mine.",
    location: "The beach at sunset",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1672855674905-4e5d8aaeb4de?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dancing in the kitchen",
    body: "No music, just us and laughter.",
    location: "Home",
  },
];

const intro = {
  id: "intro",
  type: "intro" as const,
  headline: "Kyle, this is your LoveWrapped 💛",
  subheadline: "MRFSA Presents LoveWrapped",
  from: "Prince",
  to: "Kyle",
  bg: "#0B1220",
  accent: "#F97316",
};

const momentPages: Extract<Slide, { type: "momentPage" }>[] = moments.map((_, i) => ({
  id: `moment-${i}`,
  type: "momentPage" as const,
  momentIndex: i,
  bg: "#111827",
  accent: "#F97316",
}));

const momentsSlide: Extract<Slide, { type: "moments" }> = {
  id: "moments",
  type: "moments" as const,
  title: "Top 5 moments with you..",
  moments,
  bg: "#111827",
  accent: "#F97316",
};

const letter = {
  id: "letter",
  type: "letter" as const,
  title: "A Letter to You",
  text: `Hey you.

        I don’t say this enough, but you matter more to me than you probably realize.
        Every small moment, every quiet laugh, every late reply—it all adds up.

        No matter where life pulls us next,
        this chapter will always be one of my favorites.`,
  align: "left" as const,
  bg: "#111827",
  accent: "#F97316",
};

export const slides: Slide[] = [intro, ...momentPages, momentsSlide, letter];
