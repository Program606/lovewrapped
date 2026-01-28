import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type DroppingCard = {
  id: string;
  title: string;
  body?: string;
  imageUrl?: string;
  badge?: string;
};

type Props = {
  /** Set true only when the slide is fully in view / active */
  active: boolean;

  /** Ordered list: card[0] is the “initial” top card */
  cards: DroppingCard[];

  /** ms between each card reveal */
  revealIntervalMs?: number;

  /** Optional: start after a short pause once active */
  startDelayMs?: number;

  /** Optional: container class */
  className?: string;
};

export function DroppingCardList({
  active,
  cards,
  revealIntervalMs = 450,
  startDelayMs = 250,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();

  // how many cards are currently shown
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (!active) return;
    if (cards.length <= 1) return;

    let mounted = true;
    let intervalId: number | null = null;
    const startTimer = window.setTimeout(() => {
      if (!mounted) return;

      intervalId = window.setInterval(() => {
        setVisibleCount((prev) => {
          const next = prev + 1;
          return next >= cards.length ? cards.length : next;
        });
      }, revealIntervalMs);
    }, startDelayMs);

    return () => {
      mounted = false;
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [active, cards.length, revealIntervalMs, startDelayMs]);



  const shown = useMemo(() => cards.slice(0, Math.max(1, visibleCount)), [cards, visibleCount]);

  const containerTransition = reduceMotion
    ? ({ duration: 0.15 } as const)
    : ({
        type: "spring",
        stiffness: 180, // bouncy but not cartoonish
        damping: 22, // keeps it sleek
        mass: 0.9,
      } as const);

  const itemTransition = reduceMotion
    ? ({ duration: 0.15 } as const)
    : ({
        type: "spring",
        stiffness: 240, // slightly snappier on the drop
        damping: 20,
        mass: 0.85,
      } as const);

  return (
    <div className={className} key={active ? "active" : "inactive"}>
      {/* Center column */}
      <motion.div
        layout
        transition={containerTransition}
        className="mx-auto w-[92vw] max-w-[520px]"
      >
        {/* Stack */}
        <motion.div
          layout
          transition={containerTransition}
          className="flex flex-col items-center gap-3"
        >
          <AnimatePresence initial={false}>
            {shown.map((card, idx) => (
              <motion.div
                key={card.id}
                layout
                initial={
                  idx === 0
                    ? false // first card is already there; don't animate it in
                    : {
                        opacity: 0,
                        y: -28, // starts above then drops down
                        scale: 0.985,
                        filter: "blur(2px)",
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: 16,
                  scale: 0.99,
                  filter: "blur(2px)",
                }}
                transition={{
                  ...itemTransition,
                  // small per-card delay makes it feel “called in”
                  delay: idx === 0 ? 0 : Math.min(0.08 * idx, 0.25),
                }}
                className="w-full"
              >
                <HorizontalCard card={card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

function HorizontalCard({ card }: { card: DroppingCard }) {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-4 p-4">
        {/* image */}
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/10">
          {card.imageUrl ? (
            <img
              src={card.imageUrl}
              alt={card.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>

        {/* text */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="truncate text-sm font-semibold text-white">{card.title}</div>
            {card.badge ? (
              <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80">
                {card.badge}
              </span>
            ) : null}
          </div>

          {card.body ? (
            <div className="mt-1 line-clamp-2 text-xs text-white/70">{card.body}</div>
          ) : null}
        </div>

        {/* right accent */}
        <div className="h-9 w-1 rounded-full bg-white/15" />
      </div>
    </div>
  );
}
