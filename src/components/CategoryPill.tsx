const styles: Record<string, string> = {
  Reviews: "bg-brand/10 text-brand-dark",
  News: "bg-emerald-100 text-emerald-700",
  "Best Picks": "bg-accent/10 text-accent",
};

export default function CategoryPill({ category }: { category: string }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
        styles[category] ?? "bg-surface text-muted"
      }`}
    >
      {category}
    </span>
  );
}
