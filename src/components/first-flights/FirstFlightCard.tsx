import React, { useMemo } from 'react';
import { FirstFlightContest, VulnerabilitiesFound } from '@/types/first-flight-contest';

function formatDate(yyyyMmDd: string): string {
  const [y, m, d] = yyyyMmDd.split('-').map((v) => Number(v));
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function SeverityPills({ v }: { v: VulnerabilitiesFound }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <div className="w-20 text-center px-2 py-1 rounded-full border border-red-600/40 bg-red-950/40 text-red-300 text-xs font-light tracking-wide">
        {v.high} High
      </div>
      <div className="w-20 text-center px-2 py-1 rounded-full border border-orange-500/40 bg-orange-950/40 text-orange-300 text-xs font-light tracking-wide">
        {v.medium} Med
      </div>
      <div className="w-20 text-center px-2 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 text-xs font-light tracking-wide">
        {v.low} Low
      </div>
    </div>
  );
}

export function FirstFlightCard({
  name,
  number,
  endDate,
  contestUrl,
  writeupPath,
  logoPath,
  vulnerabilitiesFound
}: FirstFlightContest) {
  const formattedDate = useMemo(() => formatDate(endDate), [endDate]);

  return (
    <div
      className={[
        'w-full rounded-2xl border border-border bg-background/60',
        'backdrop-blur-sm p-6 md:p-7 shadow-sm'
      ].join(' ')}
    >
      <div className="flex flex-wrap items-start gap-6">
        {/* Left: logo + stacked competition details */}
        <div className="flex items-start gap-4 min-w-0 flex-1">
          <div className="h-[84px] w-[84px] shrink-0  overflow-hidden">
            <img
              src={logoPath}
              alt={`${name} logo`}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-light tracking-wide truncate">
              {name}
            </h3>

            <div className="text-md md:text-base font-light tracking-wide text-muted-foreground">
              First Flight #{number}
            </div>

            <div className="text-sm md:text-base font-light tracking-wide text-muted-foreground">
              {formattedDate}
            </div>
          </div>
        </div>

        {/* Right side: vulnerabilities found and buttons to contest page and my report */}
        <div className="flex items-start gap-4 shrink-0 ml-auto basis-full justify-start sm:basis-auto">
          <div className="self-start flex flex-col items-end gap-2">
            <SeverityPills v={vulnerabilitiesFound} />
          </div>

          <div className="self-start flex flex-col gap-2">
            <a
              href={contestUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-muted transition"
            >
              Contest
            </a>

            <a
              href={writeupPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-light tracking-wide text-foreground hover:bg-muted transition"
            >
              Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

