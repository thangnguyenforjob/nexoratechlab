import { Article } from "@/lib/types";

export default function ArticleGallery({ article }: { article: Article }) {
  const extraImages = (article.images ?? []).slice(1);
  if (extraImages.length === 0) return null;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {extraImages.map((image, i) => (
        <figure
          key={i}
          className="overflow-hidden rounded-xl border border-border bg-surface"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-xs text-muted">
            {image.alt} — Photo: {image.credit}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
