export const metadata = {
    title: "About",
    alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        About Nexoratech
      </h1>
      <p className="mt-4 leading-relaxed text-muted">
        Nexoratech is an independent technology publication covering laptops,
        phones, and audio gear. We write buying guides and reviews based on
        hands-on testing and publicly available specifications, and we always
        link to our sources.
      </p>
      <h2 className="font-display mt-8 text-xl font-bold">How We Review</h2>
      <p className="mt-3 leading-relaxed text-muted">
        Every review lists explicit pros, cons, and a Nexoratech Score out of
        10. Our best-of guides are updated as new products launch and pricing
        changes.
      </p>
      <h2 className="font-display mt-8 text-xl font-bold">Contact</h2>
      <p className="mt-3 leading-relaxed text-muted">
        We welcome tips, corrections, and story ideas from readers,
        manufacturers, and fellow journalists alike. If you&apos;ve spotted an
        error in one of our reviews, have an embargoed product to brief us
        on, or think we&apos;ve missed a laptop, phone, or pair of
        headphones worth testing, we want to hear about it.
      </p>
      <p className="mt-3 leading-relaxed text-muted">
        For press inquiries, review units, advertising, and partnership
        proposals, please include as much detail as possible — product
        specs, timelines, and any relevant links — so our editorial team
        can get back to you quickly. We read every message and typically
        respond within two to three business days.
      </p>
      <p className="mt-3 leading-relaxed text-muted">
        Reach the editorial team at{" "}
        <a
          href="mailto:admin@nexoratechlab.online"
          className="text-brand hover:underline"
        >
          admin@nexoratechlab.online
        </a>
        .
      </p>
    </div>
  );
}
