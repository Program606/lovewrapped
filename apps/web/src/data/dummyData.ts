import type { ApiSlidesResponse } from "../types/slide";

export const dummyData1 = [
  {
    id: "intro",
    type: "intro",
    headline: "Kyle, this is your LoveWrapped 💛",
    subheadline: "MRFSA Presents LoveWrapped",
    from: "Prince",
    to: "Kyle",
    bg: "#0B1220",
    accent: "#F97316",
  },
  {
    id: "stats",
    type: "stats",
    title: "You began talking 3587 days ago..",
    text: "42 late-night talks, 17 spontaneous laughs, 6 road trips, and one unforgettable year together.",
    bg: "#0F172A",
    accent: "#38BDF8",
  },

  // Flattened pages (references the parent + index)
  {
    id: "moment-1",
    type: "momentSingle",
    parentId: "moments",
    momentIndex: 0,
    bg: "#111827",
  },
  {
    id: "moment-2",
    type: "momentSingle",
    parentId: "moments",
    momentIndex: 1,
    bg: "#111827",
  },
  {
    id: "moment-3",
    type: "momentSingle",
    parentId: "moments",
    momentIndex: 2,
    bg: "#111827",
  },
  {
    id: "moment-4",
    type: "momentSingle",
    parentId: "moments",
    momentIndex: 3,
    bg: "#111827",
  },
  {
    id: "moment-5",
    type: "momentSingle",
    parentId: "moments",
    momentIndex: 4,
    bg: "#111827",
  },
  // Source of truth
  {
    id: "moments",
    type: "moments",
    title: "Top 5 moments with you..",
    bg: "#111827",
    accent: "#F97316",
    moments: [
      {
        order: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1680536844970-4f803d5097f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Late-night talks",
        body: "The kind where time disappears.",
        location: "Your apartment",
      },
      {
        order: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1663361963652-e7c0a08c06d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Coffee mornings",
        body: "Your smile over a warm cup.",
        location: "Our favorite cafe",
      },
      {
        order: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1600451210798-9e6aa1a21155?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Road trip adventures",
        body: "Windows down, music loud, you by my side.",
        location: "Pacific Coast Highway",
      },
      {
        order: 4,
        imageUrl:
          "https://images.unsplash.com/photo-1644727783395-8bffbeba5273?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Sunset walks",
        body: "Golden hour with your hand in mine.",
        location: "The beach at sunset",
      },
      {
        order: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1600451210798-9e6aa1a21155?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dancing in the kitchen",
        body: "No music, just us and laughter.",
        location: "Home",
      },
    ],
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
] satisfies ApiSlidesResponse;
