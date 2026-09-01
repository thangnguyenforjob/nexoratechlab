export default function RatingBadge({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
        <span className="text-xl font-bold leading-none">{rating.toFixed(1)}</span>
      </div>
      <div>
        <p className="text-sm font-semibold">Nexoratech Score</p>
        <p className="text-xs text-muted">out of 10</p>
      </div>
    </div>
  );
}
