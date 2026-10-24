import type { ThreePhotoSlideType } from "@/types/slide";
import type { CSSProperties } from "react";

type PhotoPosition = {
  top: string;
  left: string;
  width: string;
  rotate: number;
  zIndex: number;
};

const photoPositions: PhotoPosition[] = [
  {
    top: "11%",
    left: "10%",
    width: "52%",
    rotate: 0,
    zIndex: 2,
  },
  {
    top: "29%",
    left: "36%",
    width: "52%",
    rotate: 0,
    zIndex: 4,
  },
  {
    top: "54%",
    left: "10%",
    width: "52%",
    rotate: 0,
    zIndex: 3,
  },
];

function PolaroidPhoto({
  src,
  position,
  index,
}: {
  src: string;
  position: PhotoPosition;
  index: number;
}) {
  const style: CSSProperties = {
    top: position.top,
    left: position.left,
    width: position.width,
    transform: `rotate(${position.rotate}deg)`,
    zIndex: position.zIndex,
  };

  return (
    <div
      className="absolute bg-white p-[7px] pb-[8px]
             shadow-[2px_4px_8px_rgba(0,0,0,0.18)]
             transition-transform duration-300 ease-in-out
             hover:scale-105"
      style={style}
    >
      <img
        src={src}
        alt={`Nature memory ${index + 1}`}
        draggable={false}
        className="aspect-[1/1.12] w-full object-cover"
      />

      {/* Social media style icons */}
      <div className="flex items-center gap-1 pt-[5px] text-[#f6a6af]">
        <span className="text-[15px] leading-none">♥</span>
        <span className="text-[14px] leading-none">☏</span>
        <span className="text-[14px] leading-none">➤</span>
      </div>
    </div>
  );
}

function Doodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 55 55"
      fill="none"
      className={`absolute h-12 w-12 ${className}`}
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="3" strokeLinecap="round">
        <path d="M27 48 C25 30 17 18 9 11" />
        <path d="M27 48 C29 28 36 17 44 9" />
        <path d="M27 48 C23 34 10 29 5 29" />
        <path d="M27 48 C32 35 43 31 50 31" />
      </g>
      <g fill="white">
        <ellipse cx="8" cy="10" rx="4" ry="8" transform="rotate(-40 8 10)" />
        <ellipse cx="44" cy="8" rx="4" ry="8" transform="rotate(35 44 8)" />
        <ellipse cx="5" cy="28" rx="3" ry="6" transform="rotate(-60 5 28)" />
        <ellipse cx="50" cy="30" rx="3" ry="6" transform="rotate(60 50 30)" />
      </g>
    </svg>
  );
}

export function ThreePhotoSlide({ slide }: { slide: ThreePhotoSlideType }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background image */}
      <img
        src={slide.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Polaroid collage */}
      {slide.photos.slice(0, 3).map((photo, index) => (
        <PolaroidPhoto
          key={index}
          src={photo}
          index={index}
          position={photoPositions[index]}
        />
      ))}

      {/* White decorative doodles */}
      <Doodle className="left-[3%] top-[6%] z-10 -rotate-12" />
      <Doodle className="right-[2%] top-[23%] z-10 rotate-12" />
      <Doodle className="left-[3%] top-[48%] z-10 -rotate-12" />

      {/* Hand-drawn crosses */}
      <div
        className="absolute bottom-[22%] right-[8%] z-10
                   -rotate-[12deg] text-[36px] font-bold
                   tracking-[4px] text-white"
      >
        ×××
      </div>

      {/* Caption */}
      <div
        className="absolute bottom-[15%] right-[1%] z-10
                   -rotate-[12deg] bg-white/10 px-2 py-1"
      >
        <p className="text-[11px] font-semibold text-white">
          {slide.caption ?? "Breath of Calm on break."}
        </p>
      </div>
    </div>
  );
}
