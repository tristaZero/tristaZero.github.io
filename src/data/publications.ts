import type { Entry } from "./types";

// Book & peer-reviewed paper. Pinned to the top of the homepage feed.
export const publications: Entry[] = [
  {
    title: "A Definitive Guide to Apache ShardingSphere",
    url: "https://www.amazon.com/Definitive-Guide-Apache-ShardingSphere-distributed/dp/1803239425",
    date: "2022",
    source: "Book · Packt · First author",
    kind: "publication",
    featured: true,
    pinned: true,
  },
  {
    title: "Apache ShardingSphere: A Holistic and Pluggable Platform for Data Sharding",
    url: "https://ieeexplore.ieee.org/document/9835604",
    date: "2022",
    source: "Paper · ICDE 2022",
    kind: "publication",
    featured: true,
    pinned: true,
  },
];
