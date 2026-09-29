import type { MetadataRoute } from "next";
import { getServices } from "@/lib/cms/queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.safeguardforce.online";
  const services = await getServices().catch(() => []);

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/brochure", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/disclaimer", priority: 0.5, changeFrequency: "monthly" as const },
  ].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const legacyServiceRoutes = [
    "security-services",
    "facility-management",
    "housekeeping",
    "fire-safety",
    "technical-maintenance",
    "detective-services",
  ].map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(s.updated_at || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...legacyServiceRoutes, ...serviceRoutes];
}
