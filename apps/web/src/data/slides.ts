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
    title: "Top 5 moments with you..",
    moments: [
      {
        imageUrl: "https://images.unsplash.com/photo-1752824061955-a3787752b1bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Late-night talks",
        body: "The kind where time disappears.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop",
        title: "Coffee mornings",
        body: "Your smile over a warm cup.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1719715734324-804920841025?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Road trip adventures",
        body: "Windows down, music loud, you by my side.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
        title: "Sunset walks",
        body: "Golden hour with your hand in mine.",
      },
      {
        imageUrl: "https://plus.unsplash.com/premium_photo-1672855674905-4e5d8aaeb4de?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dancing in the kitchen",
        body: "No music, just us and laughter.",
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
