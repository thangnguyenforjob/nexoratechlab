export type Category = "Reviews" | "News" | "Best Picks";
export type Topic = "Laptops" | "Phones" | "Audio";

export interface Section {
  heading?: string;
  body: string[];
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
  rating?: number; // out of 10, reviews only
pros?: string[];
  cons?: string[];
  sources: { title: string; url: string }[];
  content: Section[];
  featured?: boolean;
}
