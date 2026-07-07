import type { Entry } from "./types";
import { sortKey } from "./types";
import { publications } from "./publications";
import { articles } from "./articles";
import { talks } from "./talks";
import { podcasts } from "./podcasts";
import { videos } from "./videos";

export { publications, articles, talks, podcasts, videos };
export * from "./types";
export * from "./site";

export const allEntries: Entry[] = [
  ...publications,
  ...articles,
  ...talks,
  ...podcasts,
  ...videos,
];

function byDateDesc(a: Entry, b: Entry): number {
  return sortKey(b.date).localeCompare(sortKey(a.date));
}

/** Pinned entries first, then newest by date. */
function byPinnedThenDate(a: Entry, b: Entry): number {
  if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
  return byDateDesc(a, b);
}

/** Substantial, readable/watchable items for the homepage feed. Pinned first, then newest. */
export function featuredFeed(limit?: number): Entry[] {
  return buildFeed([], limit);
}

/** Homepage feed merged with extra entries (e.g. native blog posts). Pinned first, then newest. */
export function buildFeed(extra: Entry[] = [], limit?: number): Entry[] {
  const feed = [...allEntries, ...extra].filter((e) => e.featured).sort(byPinnedThenDate);
  return typeof limit === "number" ? feed.slice(0, limit) : feed;
}

/** All entries of a kind, newest first. */
export function byKind(kind: Entry["kind"]): Entry[] {
  return allEntries.filter((e) => e.kind === kind).sort(byDateDesc);
}

/** Talks grouped by year, years descending. */
export function talksByYear(): { year: string; items: Entry[] }[] {
  const sorted = [...talks].sort(byDateDesc);
  const groups = new Map<string, Entry[]>();
  for (const t of sorted) {
    const y = t.date.slice(0, 4);
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push(t);
  }
  return [...groups.entries()].map(([year, items]) => ({ year, items }));
}

/** Articles grouped by category, newest first within each group. */
export function articlesByCategory(): { category: string; items: Entry[] }[] {
  const order = ["Technical", "Personal Development"];
  const sorted = [...articles].sort(byDateDesc);
  return order
    .map((category) => ({
      category,
      items: sorted.filter((a) => a.category === category),
    }))
    .filter((g) => g.items.length > 0);
}
