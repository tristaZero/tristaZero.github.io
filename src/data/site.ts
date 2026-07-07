export const site = {
  name: "Trista Pan",
  title: "Trista Pan — AI Engineer at Tetrate, Apache Member",
  description:
    "Trista Pan (Juan Pan) — AI Engineer at Tetrate, ex AI Product Director at ByteDance, former Co-Founder of SphereEx, Apache Member & Incubator Mentor, AWS Data Hero. Expertise in big data and AI. Articles, talks, podcasts, videos, and publications.",
  url: "https://tristazero.github.io",
  avatar: "/avatar.png",
};

export const profile = {
  name: "Trista Pan",
  role: "AI Engineer @ Tetrate",
  tagline:
    "Ex AI Product Director @ ByteDance · Former Co-Founder of SphereEx · Apache Member & Incubator Mentor · AWS Data Hero. Expertise in big data and AI.",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
];

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email";
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/tristaZero", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/panjuan", icon: "linkedin" },
  { label: "Twitter / X", href: "https://twitter.com/tristaZero", icon: "twitter" },
  { label: "Email", href: "mailto:panjuan@apache.org", icon: "email" },
];
