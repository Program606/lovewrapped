type Moment = {
  order: number;
  imageUrl: string;
  title: string;
  body: string;
  location?: string;
};

export function MomentsSingle({ moment }: { moment: Moment }) {
  return (
    <div className="h-full w-full bg-[#0B1220]">
      <div className="flex h-full w-full flex-col px-0 pt-5 pb-6">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* Hero image (fixed height so panel below has space) */}
          <div className="relative h-[50%] w-full shrink-0">
            <img
              src={moment.imageUrl}
              alt={moment.title}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>

          {/* White info panel (scrollable if needed) */}
          <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-4 pb-5">
            {/* Title row */}
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <h1 className="truncate text-[22px] font-extrabold leading-tight text-slate-900">
                  {moment.title}
                </h1>
              </div>
            </div>

            {/* Meta rows */}
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[12px]">
                  📍
                </span>
                <span className="truncate">
                  {moment.location ?? "Somewhere special"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[12px]">
                  ✨
                </span>
                <span className="truncate">LoveWrapped Moment</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-slate-100" />

            {/* Body */}
            <p className="text-[14px] leading-relaxed text-slate-700">
              {moment.body}
            </p>

            {/* Bottom grab handle */}
            <div className="mt-5 flex items-center justify-center">
              <div className="h-1.5 w-16 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
