export const metadata = { title: "About" };

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
        Have a tip or correction? Reach the editorial team at{" "}
        <a
          href="mailto:editors@nexoratech.online"
          className="text-brand hover:underline"
        >
          editors@nexoratech.online
        </a>
        .
      </p>
    </div>
  );
}
