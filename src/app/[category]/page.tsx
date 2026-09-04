import { notFound } from "next/navigation";
import { getAllArticles } from "@/data/articles";
import { ArticleCard, HeroCard } from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";

const CATEGORY_MAP: Record<string, string> = {
  reviews: "Reviews",
  news: "News",
  "best-picks": "Best Picks",
};

const DESCRIPTIONS: Record<string, string> = {
  reviews:
    "Hands-on reviews of the laptops, phones, and audio gear we actually tested — with honest pros, cons, and scores.",
  news: "The tech announcements and industry news worth knowing about, explained without the hype.",
  "best-picks":
    "Our curated buying guides for every budget, built from testing, not press releases.",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const label = CATEGORY_MAP[params.category];
    return {
          title: label ?? "Category",
          description: DESCRIPTIONS[params.category],
          alternates: { canonical: `/${params.category}` },
    };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_MAP[category];
  if (!label) notFound();

  const articles = getAllArticles().filter((a) => a.category === label);
  const [first, ...remaining] = articles;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label }]} />
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {label}
      </h1>
      <p className="mt-2 max-w-2xl text-muted">{DESCRIPTIONS[category]}</p>

      {articles.length === 0 ? (
        <p className="mt-10 text-muted">No articles in this section yet.</p>
      ) : (
        <div className="mt-8 space-y-8">
          {first && <HeroCard article={first} />}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
