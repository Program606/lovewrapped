import type { Slide } from "@/types/slide";

function splitParagraphs(text: string) {
  return text
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function LetterSlide({ slide }: { slide: Slide & { type: "letter" } }) {
  {
    const paragraphs = splitParagraphs(slide.text);

    return (
      <div className="h-full w-full flex flex-col justify-center px-6 text-white">
        <h2
          className={`text-3xl font-bold leading-tight ${
            slide.align === "center" ? "text-center" : "text-left"
          }`}
        >
          {slide.title}
        </h2>

        <div
          className={`mt-6 space-y-4 text-base text-white/85 max-w-xl ${
            slide.align === "center" ? "text-center mx-auto" : "text-left"
          }`}
        >
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: slide.accent }}
          />
          <div className="text-sm text-white/60">Written from the heart</div>
        </div>
      </div>
    );
  }
}
