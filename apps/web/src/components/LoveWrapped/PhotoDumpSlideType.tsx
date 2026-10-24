import type { PhotoDumpSlideType } from "@/types/slide";

import type { CSSProperties } from "react";

type PhotoPosition = {
  top: string;
  left: string;
  width: string;
  rotate: number;
  zIndex: number;
};

const photoPositions: PhotoPosition[] = [
  { top: "7%", left: "7%", width: "45%", rotate: -5, zIndex: 2 },
  { top: "5%", left: "51%", width: "43%", rotate: 9, zIndex: 3 },
  { top: "31%", left: "5%", width: "44%", rotate: -4, zIndex: 2 },
  { top: "29%", left: "50%", width: "44%", rotate: 5, zIndex: 3 },

  // Middle-right photo
  { top: "51%", left: "51%", width: "43%", rotate: -5, zIndex: 6 },

  // Bottom-left photo
  { top: "65%", left: "7%", width: "45%", rotate: 9, zIndex: 3 },

  // Bottom-right photo
  { top: "73%", left: "51%", width: "43%", rotate: -7, zIndex: 5 },
];

export function PhotoDumpSlide({
  slide,
}: {
  slide: PhotoDumpSlideType;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#eee5d4",
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(90,65,40,0.025) 4px
          )
        `,
      }}
    >
      {/* Purple hand-drawn line */}
      <div
        className="absolute -top-2 -left-4 z-20 h-8 w-[75%]
                   -rotate-[10deg] border-b-[3px]"
        style={{
          borderColor: slide.accent ?? "#a855f7",
        }}
      />

      {/* Decorative paper scraps */}
      <div
        className="absolute -left-8 top-[48%] h-24 w-32
                   rotate-[-18deg] bg-[#d8cdb9]/70"
      />

      <div
        className="absolute -right-10 bottom-6 h-24 w-40
                   rotate-[20deg] bg-[#d8cdb9]/60"
      />

      {/* Photo collage */}
      {slide.photos.slice(0, 7).map((photo, index) => {
        const position = photoPositions[index];

        const style: CSSProperties = {
          top: position.top,
          left: position.left,
          width: position.width,
          transform: `rotate(${position.rotate}deg)`,
          zIndex: position.zIndex,
        };

        return (
          <div
            key={index}
            className="absolute bg-white p-[5px] pb-[8px]
                       shadow-[2px_5px_9px_rgba(0,0,0,0.25)]
                       transition-transform duration-300
                       hover:scale-105"
            style={style}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              draggable={false}
              className="aspect-[1/1.05] w-full object-cover"
            />
          </div>
        );
      })}

      {/* Photo Dump label */}
      <div
        className="absolute left-[9%] top-[54%] z-10
                   -rotate-[5deg] rounded-xl
                   border border-[#7b8b86]
                   bg-[#e6e1d1] px-4 py-3
                   shadow-[3px_4px_0px_#9aaba6]"
      >
        <h2
          className="text-center font-serif text-[22px]
                     leading-[0.9] tracking-tight text-black"
        >
          {(slide.title ?? "Photo Dump")
            .split(" ")
            .map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
        </h2>
      </div>

      {/* Decorative tape */}
      <div
        className="absolute bottom-[8%] left-[8%] z-10
                   h-6 w-24 rotate-[8deg]
                   bg-[#e9d9b7]/80 shadow-sm"
      />

      {/* Bottom caption */}
      <div
        className="absolute bottom-[5%] right-[3%] z-10
                   rotate-[-8deg] bg-[#eee5d4]/90
                   px-2 py-1"
      >
        <span
          className="font-mono text-[10px] font-bold
                     tracking-[0.08em] text-[#4b4036]"
        >
          {slide.caption ?? "buzzing with life"}
        </span>
      </div>
    </div>
  );
}
