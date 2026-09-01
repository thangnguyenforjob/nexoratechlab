import Link from "next/link";

const nav = [
  { label: "Reviews", href: "/reviews" },
  { label: "Best Picks", href: "/best-picks" },
  { label: "News", href: "/news" },
  { label: "Laptops", href: "/topics/laptops" },
  { label: "Phones", href: "/topics/phones" },
  { label: "Audio", href: "/topics/audio" },
  { label: "AI Software", href: "/topics/ai-software" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Nexora Tech Lab"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-brand hover:text-brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-5 overflow-x-auto border-t border-border px-4 py-2 text-sm font-semibold text-foreground/70 md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-brand">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
