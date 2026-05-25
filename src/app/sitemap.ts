import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

const lastModified = new Date("2026-05-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/hakimuddin.jpg`],
      videos: [
        {
          title: "Handof for Linear Figma plugin demo",
          thumbnail_loc: `${siteUrl}/projects/handof-figma-linear.webp`,
          description:
            "Product walkthrough for Hakimuddin Haweliwala's FigJam-to-Linear plugin.",
        },
      ],
    },
  ];
}
