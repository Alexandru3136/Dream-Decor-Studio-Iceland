import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/content/services";

const baseUrl = "https://dream-decor-studio-iceland.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/thjonusta/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    ...servicePages,
    {
      url: `${baseUrl}/print`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}
