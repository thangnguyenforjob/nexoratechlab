export default function ProsCons({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">
          Pros
        </h3>
        <ul className="space-y-2">
          {pros.map((pro) => (
            <li key={pro} className="flex gap-2 text-sm text-emerald-900">
              <span aria-hidden="true">+</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-rose-700">
          Cons
        </h3>
        <ul className="space-y-2">
          {cons.map((con) => (
            <li key={con} className="flex gap-2 text-sm text-rose-900">
              <span aria-hidden="true">–</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
