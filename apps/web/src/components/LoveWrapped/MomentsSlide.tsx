import type { Slide } from "@/types/slide";

export function MomentsSlide({ slide }: { slide: Extract<Slide, { type: "moments" }> }) {
  return (
    <div className="h-full w-full px-6 pt-16 pb-10 text-white">
      <h2 className="text-2xl font-bold">{slide.title}</h2>

      <div className="mt-6 space-y-4">
        {slide.moments.map((m, idx) => (
          <div key={idx} className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 p-3">
            <div className="h-20 w-20 overflow-hidden rounded-xl">
              <img src={m.imageUrl} alt={m.title} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold">{idx + 1}. {m.title}</div>
              <div className="mt-1 text-xs text-white/70">{m.body}</div>
              <div className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: slide.accent }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
