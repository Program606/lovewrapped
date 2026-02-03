import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import FullScreenLetterModal from "./FullScreenLetterModal";

type Phase = "closed" | "halfOpen" | "open";

type Props = {
  letterText: string;
  envelopeColor?: string;
  accentColor?: string;
  paperPeek?: number; // how much paper shows in halfOpen (px)
  threshold?: number; // drag progress threshold (0..1)
  clicksToHalfOpen?: number; // default 3
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function EnvelopeLetter({
  letterText,
  envelopeColor = "#ff79b0",
  accentColor,
  paperPeek = 26,
  threshold = 0.4,
  clicksToHalfOpen = 3,
}: Props) {
  const reduce = useReducedMotion();

  // ---- 3-state machine
  const [phase, setPhase] = useState<Phase>("closed");

  // ---- click gate for closed -> halfOpen
  const [tapCount, setTapCount] = useState(0);
  const clickResetTimer = useRef<number | null>(null);
  const triggeredRef = useRef(false);

  // Tap highlight only (no hover)
  const [pressed, setPressed] = useState(false);
  const [dragging, setDragging] = useState(false);

  const glow = useMemo(() => {
    return accentColor ?? "rgba(255, 121, 176, 0.55)";
  }, [accentColor]);

  // ---- motion values
  const y = useMotionValue(0);
  const PULL_MAX = 280;

  // progress 0..1 based on y
  const progress = useTransform(y, (latest) => clamp(-latest / PULL_MAX, 0, 1));

  const paperShadow = useTransform(progress, [0, 1], [0.14, 0.35]);
  const paperScale = useTransform(progress, [0, 1], [1, 1.02]);

  // flap rotates more as paper is pulled
  // closed flap is shut; halfOpen flap starts slightly open
  const flapRotateFromProgress = useTransform(progress, [0, 1], [18, 55]);

  const snapControls = useAnimationControls();

  // ---- keep paper position correct when phase changes
  useEffect(() => {
    if (phase === "closed") {
      y.set(0);
      triggeredRef.current = false;

      if (clickResetTimer.current) {
        window.clearTimeout(clickResetTimer.current);
        clickResetTimer.current = null;
      }
      return;
    }

    if (phase === "halfOpen") {
      y.set(0); // not -paperPeek
      return;
    }

    if (phase === "open") {
      y.set(-threshold * PULL_MAX);
    }
  }, [phase, paperPeek, threshold, y]);

  // ---- click handling: 3 clicks from closed -> halfOpen
  function handleEnvelopeClick() {
    setPressed(true);
    window.setTimeout(() => setPressed(false), 140);

    if (phase !== "closed") return;

    setPressed(true);
    window.setTimeout(() => setPressed(false), 140);

    setTapCount((prev) => {
      const next = prev + 1;

      if (next >= clicksToHalfOpen) {
        setPhase("halfOpen");

        // reset tapCount here instead of in useEffect
        if (clickResetTimer.current)
          window.clearTimeout(clickResetTimer.current);
        clickResetTimer.current = null;

        return 0;
      }

      return next;
    });
  }

  // ---- sizing
  const W = 240;
  const H = 170;

  const ringStyle = pressed
    ? {
        boxShadow: `0 0 0 6px ${glow}, 0 18px 40px rgba(0,0,0,0.25)`,
        transform: "scale(1.03)",
      }
    : { boxShadow: "0 14px 30px rgba(0,0,0,0.22)" };

  // flap rotation depends on phase:
  // closed: 0
  // halfOpen/open: driven by progress (so it reacts while pulling)
  const flapRotate = phase === "closed" ? 0 : flapRotateFromProgress;

  //Modal Logic
  const [modalOpen, setModalOpen] = useState(false);

  // called when paper reaches 75%
  function handleOpenModal() {
    setModalOpen(true);
  }

  // called when backdrop is clicked
  function handleCloseModal() {
    setModalOpen(false);
    setPhase("halfOpen");
  }

  return (
    <div className="w-full flex items-center justify-center">
      <motion.div
        className="relative select-none"
        style={{ width: W, height: H }}
        onPointerDown={() => phase === "closed" && setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerCancel={() => setPressed(false)}
      >
        {/* Click layer: ONLY counts clicks in closed state */}
        {phase === "closed" && (
          <button
            type="button"
            onClick={handleEnvelopeClick}
            className="absolute inset-0 z-999 rounded-[28px] focus:outline-none"
            aria-label="Envelope"
          />
        )}

        {/* Envelope container */}
        <motion.div
          className="absolute inset-0 rounded-[28px]"
          style={ringStyle}
        >
          {/* Flap ( lowest layer)*/}
          <motion.div
            className="absolute left-0 right-0 top-0 h-[62%] z-10"
            style={{
              zIndex: 10,
              transformOrigin: "top center",
              rotateX: flapRotate,
              perspective: 900,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.24), rgba(0,0,0,0.08))",
              }}
            />
          </motion.div>

          {/* Back panel */}
          <div
            className="absolute inset-0 rounded-[28px] z-20"
            style={{
              background: `linear-gradient(180deg, ${envelopeColor} 0%, rgba(255,255,255,0.10) 60%, rgba(0,0,0,0.05) 100%)`,
            }}
          />

          {/* Paper*/}
          {phase !== "closed" && (
            <motion.div
              className={[
                "absolute left-1/2 -translate-x-1/2 z-30",
                "w-[78%] rounded-2xl",
                "bg-[#fff7fb] border border-black/10",
                "opacity-75",
                dragging ? "ring-2 ring-black/10 shadow-xl" : "shadow-lg",
              ].join(" ")}
              style={{
                top: -42, // paper sticks out ABOVE the envelope
                height: 190,
                y, // motion value
                scale: paperScale,
                boxShadow: `0 18px 40px rgba(0,0,0,${paperShadow.get()})`,
              }}
              drag={phase === "halfOpen" ? "y" : false}
              dragDirectionLock
              dragMomentum={false}
              dragConstraints={{
                top: -PULL_MAX, // allow pulling up (negative y)
                bottom: 0, // resting position
              }}
              dragElastic={reduce ? 0.05 : 0.16}
              onDragStart={() => {
                if (phase !== "halfOpen") return;
                snapControls.stop(); // CRITICAL: stop any snapping animation
                setDragging(true);
                console.log("drag start ✅");
              }}
              onDragEnd={async () => {
                if (phase !== "halfOpen") return;
                setDragging(false);

                const p = progress.get();
                console.log("drag end, progress =", p);

                if (p >= threshold) {
                  {
                    console.log("Open gates");
                  }
                  setPhase("open");
                  handleOpenModal();
                  return;
                }

                await snapControls.start({
                  y: 0,
                  transition: reduce
                    ? { duration: 0.12 }
                    : { type: "spring", stiffness: 260, damping: 24 },
                });
                y.set(0);
              }}
              animate={snapControls}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <div className="px-4 pt-4 pb-3">
                <div className="h-1.5 w-14 rounded-full bg-black/10" />
                <div className="mt-3 text-sm text-black/50">pull to read</div>
              </div>
            </motion.div>
          )}

          {/* FRONT LAYERS (on top of paper) */}
          <div className="absolute inset-0 rounded-[28px] overflow-hidden">
            {/* Folds */}
            <div className="absolute bottom-0 left-0 right-0 h-[78%] z-40">
              {/* Left Fold */}
              <div
                className="absolute bottom-0 left-0 h-full w-1/2 opacity-95 z-40"
                style={{
                  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  background: "rgba(255,255,255,0.12)",
                }}
              />
              {/* Right Fold */}
              <div
                className="absolute bottom-0 right-0 h-full w-1/2 z-40"
                style={{
                  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                  background: "rgba(0,0,0,0.06)",
                }}
              />
              {/* Bottom Fold */}
              <div
                className="absolute bottom-0 left-0 right-0 h-full opacity-95"
                style={{
                  clipPath: "polygon(0 100%, 50% 45%, 100% 100%)",
                  background: "rgba(255,255,255,0.10)",
                }}
              />
            </div>

            {/* Border */}
            <div
              className="absolute inset-0 rounded-[28px] border border-white/20 z-15"
              style={{ zIndex: 15 }}
            />
          </div>
        </motion.div>

        {/* Hints */}
        {phase === "closed" && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/70">
            tap {clicksToHalfOpen}x to open ({tapCount}/{clicksToHalfOpen})
          </div>
        )}
        {phase === "halfOpen" && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/70">
            drag paper up (75%)
          </div>
        )}
        {phase === "open" && (
          <>
            <FullScreenLetterModal
              open={modalOpen}
              text={letterText}
              onClose={handleCloseModal}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
