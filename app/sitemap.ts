import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...articles.map((article) => ({
      url: `${siteUrl}/${article.slug}`,
      priority: 0.8,
    })),
  ];
}
