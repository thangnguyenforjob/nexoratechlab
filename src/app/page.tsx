import Link from "next/link";
import {
  getAllArticles,
  getFeaturedArticles,
  getArticlesByCategory,
} from "@/data/articles";
import { HeroCard, ArticleCard, ListRow } from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const all = getAllArticles();
  const featured = getFeaturedArticles();
  const mainFeatured = featured[0] ?? all[0];
  const rest = all.filter((a) => a.slug !== mainFeatured.slug);
  const bestPicks = getArticlesByCategory("best-picks");
  const reviews = getArticlesByCategory("reviews");
  const news = getArticlesByCategory("news");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <HeroCard article={mainFeatured} />
        </div>
        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="font-display mb-1 text-sm font-bold uppercase tracking-wide text-brand">
            Trending Now
          </h2>
          <div>
            {rest.slice(0, 4).map((article, i) => (
              <ListRow key={article.slug} article={article} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest grid + sidebar */}
      <section className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl font-extrabold tracking-tight">
              Latest Stories
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {all.slice(0, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display mb-2 text-lg font-bold">
              Get the Nexoratech Briefing
            </h3>
            <p className="mb-4 text-sm text-muted">
              The week&apos;s best reviews and buying advice, straight to your
              inbox. No spam, one email a week.
            </p>
            <NewsletterForm />
          </div>

          <div className="rounded-2xl border border-border bg-white p-6">
            <h3 className="font-display mb-3 text-sm font-bold uppercase tracking-wide text-brand">
              Most Read
            </h3>
            {all.slice(0, 5).map((article, i) => (
              <ListRow key={article.slug} article={article} index={i + 1} />
            ))}
          </div>
        </aside>
      </section>

      {/* Category strips */}
      <CategorySection title="Best Picks" href="/best-picks" articles={bestPicks} />
      <CategorySection title="Reviews" href="/reviews" articles={reviews} />
      <CategorySection title="News" href="/news" articles={news} />
    </div>
  );
}

function CategorySection({
  title,
  href,
  articles,
}: {
  title: string;
  href: string;
  articles: ReturnType<typeof getAllArticles>;
}) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-14">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <h2 className="font-display text-xl font-extrabold tracking-tight">
          {title}
        </h2>
        <Link
          href={href}
          className="text-sm font-semibold text-brand hover:text-brand-dark"
        >
          See all →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
