import { notFound } from "next/navigation";
import { getAllArticles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";

const TOPIC_MAP: Record<string, string> = {
  laptops: "Laptops",
  phones: "Phones",
  audio: "Audio",
  "ai-software": "AI Software",
  lifestyle: "Lifestyle",
};

export function generateStaticParams() {
  return Object.keys(TOPIC_MAP).map((topic) => ({ topic }));
}

export function generateMetadata({ params }: { params: { topic: string } }) {
  const label = TOPIC_MAP[params.topic];
    return {
          title: label ?? "Topic",
          alternates: { canonical: `/topics/${params.topic}` },
    };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const label = TOPIC_MAP[topic];
  if (!label) notFound();

  const articles = getAllArticles().filter((a) => a.topic === label);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Topics" }, { label }]} />
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {label}
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        Every review, guide, and news story we&apos;ve published about {label.toLowerCase()}.
      </p>

      {articles.length === 0 ? (
        <p className="mt-10 text-muted">No articles yet — check back soon.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
