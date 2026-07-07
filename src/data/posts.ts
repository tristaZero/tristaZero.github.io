import { getCollection } from "astro:content";
import type { Entry } from "./types";

/** Native blog posts as feed entries (link to their on-site page). */
export async function getPostEntries(): Promise<Entry[]> {
  const posts = await getCollection("blog", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.map((post) => ({
    title: post.data.title,
    url: `/blog/${post.id}/`,
    date: post.data.date,
    source: "Blog",
    kind: "post" as const,
    featured: post.data.featured,
  }));
}
