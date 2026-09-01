import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";
import ArticleImage from "@/components/ArticleImage";
import CategoryPill from "@/components/CategoryPill";
import RatingBadge from "@/components/RatingBadge";
import ProsCons from "@/components/ProsCons";
import Breadcrumb from "@/components/Breadcrumb";
import { ArticleCard } from "@/components/ArticleCard";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const categoryHref = `/${article.category.toLowerCase().replace(" ", "-")}`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: article.category, href: categoryHref },
          { label: article.title },
        ]}
      />

      <div className="mt-4 flex items-center gap-3">
        <CategoryPill category={article.category} />
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {article.topic}
        </span>
      </div>

      <h1 className="font-display mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{article.dek}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="font-semibold text-foreground">{article.author}</span>
        <span>·</span>
        <span>{formatDate(article.date)}</span>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>

      <ArticleImage
        article={article}
        className="mt-6 aspect-[16/9] rounded-2xl"
        emojiClassName="text-8xl"
        showCredit
        priority
      />

      {article.rating !== undefined && (
        <div className="mt-6">
          <RatingBadge rating={article.rating} />
        </div>
      )}

      <div className="prose-content mt-8 space-y-6">
        {article.content.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="font-display mb-3 text-2xl font-bold tracking-tight">
                {section.heading}
              </h2>
            )}
            {section.body.map((paragraph, j) => (
              <p key={j} className="mb-4 leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {article.pros && article.cons && (
        <div className="mt-8">
          <ProsCons pros={article.pros} cons={article.cons} />
        </div>
      )}

      {article.sources.length > 0 && (
        <div className="mt-10 border-t border-border pt-6">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">
            Sources
          </h3>
          <ul className="space-y-1">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand hover:underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display mb-4 text-xl font-extrabold tracking-tight">
            Related Stories
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
