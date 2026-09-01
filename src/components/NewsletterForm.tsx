"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@example.com"
        className="rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
