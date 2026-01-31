export const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98
  }),
  center: {
    y: "0%",
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.98
  })
};
