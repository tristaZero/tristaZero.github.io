export type Kind = "publication" | "article" | "talk" | "podcast" | "video";

export type Entry = {
  title: string;
  url: string;
  /** ISO-ish: "YYYY", "YYYY-MM", or "YYYY-MM-DD". Used for reverse-chron sort. */
  date: string;
  /** Publisher / venue, e.g. "InfoQ", "Conf42", "FOSDEM". */
  source?: string;
  /** Sub-grouping within a kind, e.g. "Technical", "Personal Development". */
  category?: string;
  kind: Kind;
  /** true = substantial, readable/watchable → eligible for the homepage feed. */
  featured: boolean;
  /** true = promo/announcement/event page, not consumable content → render as plain text, no link. */
  promo?: boolean;
  /** true = pin to the top of the homepage feed, ahead of date ordering. */
  pinned?: boolean;
  /** Optional role note, e.g. "Host", "Guest", "Speaker". */
  role?: string;
};

/** Normalize a loose date string to a comparable YYYY-MM-DD key. */
export function sortKey(date: string): string {
  if (/^\d{4}$/.test(date)) return `${date}-06-15`;
  if (/^\d{4}-\d{2}$/.test(date)) return `${date}-15`;
  return date;
}

/** Human label for the year of an entry. */
export function yearOf(date: string): string {
  return date.slice(0, 4);
}

const KIND_LABELS: Record<Kind, string> = {
  publication: "Publication",
  article: "Article",
  talk: "Activity",
  podcast: "Podcast",
  video: "Video",
};

export function kindLabel(kind: Kind): string {
  return KIND_LABELS[kind];
}
