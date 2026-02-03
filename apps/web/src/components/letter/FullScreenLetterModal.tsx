import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  open: boolean;
  text: string;
  onClose: () => void;
};

export default function FullScreenLetterModal({ open, text, onClose }: Props) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: reduce ? 0.12 : 0.18 },
          }}
          exit={{ opacity: 0, transition: { duration: reduce ? 0.1 : 0.14 } }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop (click-away closes) */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            initial={{ y: reduce ? 0 : 18, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: reduce
                ? { duration: 0.12 }
                : { type: "spring", stiffness: 220, damping: 22 },
            }}
            exit={{ y: reduce ? 0 : 12, opacity: 0 }}
          >
            <div
              className="
                w-full max-w-lg
                h-[92vh] sm:h-[88vh]
                rounded-3xl
                bg-[#fff7fb]
                shadow-2xl
                border border-black/10
                overflow-hidden
              "
              onClick={(e) => e.stopPropagation()} // prevent click-away when clicking inside
            >
              <div className="h-full w-full flex flex-col">
                {/* Header strip (optional aesthetic) */}
                <div className="px-6 py-4 border-b border-black/10 bg-white/50">
                  <div className="text-sm font-semibold text-black/70">
                    A letter for you 💌
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-auto px-6 py-5">
                  <p className="whitespace-pre-wrap text-[17px] leading-relaxed text-black/80">
                    {text}
                  </p>
                </div>

                {/* Footer hint */}
                <div className="px-6 py-4 border-t border-black/10 bg-white/40">
                  <div className="text-xs text-black/50">
                    Tap outside to close
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
