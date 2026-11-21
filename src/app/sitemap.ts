import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { caseStudies } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies.map((c) => ({ url: `${base}/work/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
