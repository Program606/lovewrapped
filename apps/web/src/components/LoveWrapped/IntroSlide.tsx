import type { Slide } from "@/types/slide";

export function IntroSlide({ slide }: { slide: Extract<Slide, { type: "intro" }> }) {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 text-white">
      <div className="text-xs uppercase tracking-[0.25em] text-white/70">
        From {slide.from} → To {slide.to}
      </div>

      <h1 className="mt-4 text-4xl font-extrabold leading-tight">
        {slide.headline}
      </h1>

      <p className="mt-4 text-base text-white/80 max-w-sm">
        {slide.subheadline}
      </p>

      <div className="mt-10 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: slide.accent }} />
        <div className="text-sm text-white/70">
          Music can start here (later: sync lyrics/text)
        </div>
      </div>
    </div>
  );
}
