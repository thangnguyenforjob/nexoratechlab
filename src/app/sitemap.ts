import type { MetadataRoute } from "next";
import { getAllArticles } from "@/data/articles";
import { SITE_URL } from "@/lib/site";

const CATEGORY_SLUGS = ["reviews", "news", "best-picks"];
const TOPIC_SLUGS = ["laptops", "phones", "audio", "ai-software", "lifestyle"];

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = getAllArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
    },
    {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
    },
        ...CATEGORY_SLUGS.map((slug) => ({
                url: `${SITE_URL}/${slug}`,
                lastModified: new Date(),
                changeFrequency: "daily" as const,
                priority: 0.8,
        })),
        ...TOPIC_SLUGS.map((slug) => ({
                url: `${SITE_URL}/topics/${slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.6,
        })),
      ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${SITE_URL}/articles/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "monthly",
        priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
