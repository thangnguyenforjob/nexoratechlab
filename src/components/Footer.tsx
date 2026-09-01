import Link from "next/link";

const columns = [
  {
    title: "Sections",
    links: [
      { label: "Reviews", href: "/reviews" },
      { label: "Best Picks", href: "/best-picks" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Laptops", href: "/topics/laptops" },
      { label: "Phones", href: "/topics/phones" },
      { label: "Audio", href: "/topics/audio" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Nexoratech", href: "/about" },
      { label: "How We Review", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Nexora Tech Lab"
              className="h-12 w-auto invert"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Independent tech reviews, buying guides, and news — tested by
            people who actually use the gear every day.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-wide text-white/50">
              {col.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Nexoratech.online. All rights reserved.
      </div>
    </footer>
  );
}
