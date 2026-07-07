import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // Plain string date, e.g. "2026-07-07" — used for reverse-chron ordering.
    date: z.string(),
    description: z.string().optional(),
    // Show in the homepage "Latest" feed.
    featured: z.boolean().default(true),
    // Hide from production builds while writing.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
