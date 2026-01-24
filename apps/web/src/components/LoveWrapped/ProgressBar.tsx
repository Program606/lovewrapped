interface ProgressBarProps {
  progressPct: number;
}

export function ProgressBar({ progressPct }: ProgressBarProps) {
  return (
    <div className="absolute left-0 right-0 bottom-3 z-20 px-4 pb-2">
      <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
        <div
          className="h-full rounded-full bg-white/80 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </div>
  );
}
