interface PlaceholderImageProps {
  gradient: [string, string];
  emoji: string;
  className?: string;
  emojiClassName?: string;
}

export default function PlaceholderImage({
  gradient,
  emoji,
  className = "",
  emojiClassName = "text-5xl",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      aria-hidden="true"
    >
      <span className={emojiClassName}>{emoji}</span>
    </div>
  );
}
