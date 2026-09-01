import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "./ArticleImage";
import CategoryPill from "./CategoryPill";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function HeroCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
    >
      <ArticleImage
        article={article}
        className="aspect-[16/10] md:aspect-auto"
        emojiClassName="text-7xl"
        showCredit
      />
      <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
        <CategoryPill category={article.category} />
        <h2 className="font-display text-2xl font-bold leading-tight tracking-tight group-hover:text-brand sm:text-3xl">
          {article.title}
        </h2>
        <p className="line-clamp-3 text-base text-muted">{article.dek}</p>
        <div className="mt-2 flex items-center gap-2 text-xs font-medium text-muted">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <ArticleImage
        article={article}
        className="aspect-[16/10]"
        emojiClassName="text-5xl"
        showCredit
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <CategoryPill category={article.category} />
        <h3 className="line-clamp-2 font-display text-lg font-bold leading-snug group-hover:text-brand">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{article.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-muted">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function ListRow({ article, index }: { article: Article; index?: number }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex items-center gap-4 border-b border-border py-4 last:border-0"
    >
      {typeof index === "number" && (
        <span className="font-display w-6 shrink-0 text-2xl font-black text-border">
          {index}
        </span>
      )}
      <ArticleImage
        article={article}
        className="h-16 w-20 shrink-0 rounded-lg"
        emojiClassName="text-2xl"
      />
      <div className="min-w-0">
        <p className="line-clamp-2 text-sm font-semibold leading-snug group-hover:text-brand">
          {article.title}
        </p>
        <p className="mt-1 text-xs text-muted">{formatDate(article.date)}</p>
      </div>
    </Link>
  );
}
