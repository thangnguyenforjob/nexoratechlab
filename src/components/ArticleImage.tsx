import { Article } from "@/lib/types";
import PlaceholderImage from "./PlaceholderImage";

interface ArticleImageProps {
  article: Article;
  className?: string;
  emojiClassName?: string;
  showCredit?: boolean;
  priority?: boolean;
}

export default function ArticleImage({
  article,
  className = "",
  emojiClassName = "text-5xl",
  showCredit = false,
}: ArticleImageProps) {
  if (!article.image) {
    return (
      <PlaceholderImage
        gradient={article.gradient}
        emoji={article.emoji}
        className={className}
        emojiClassName={emojiClassName}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image.src}
        alt={article.image.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {showCredit && (
        <span className="absolute bottom-1.5 right-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
          Ảnh: {article.image.credit}
        </span>
      )}
    </div>
  );
}
