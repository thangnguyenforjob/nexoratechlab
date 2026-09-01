export type Category = "Reviews" | "News" | "Best Picks";
export type Topic = "Laptops" | "Phones" | "Audio";

export interface Section {
  heading?: string;
  body: string[];
}

export interface ArticleImage {
  src: string;
  alt: string;
  credit: string;
  creditUrl?: string;
}

export interface Article {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: Category;
  topic: Topic;
  author: string;
  date: string; // ISO
  readTime: string;
  gradient: [string, string];
  emoji: string;
  images?: ArticleImage[]; // at least 2 real images per article, first is used as the hero/card image
  rating?: number; // out of 10, reviews only
  pros?: string[];
  cons?: string[];
  sources: { title: string; url: string }[];
  content: Section[];
  featured?: boolean;
}
