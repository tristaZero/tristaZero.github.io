---
title: "Welcome to my blog"
date: "2026-07-07"
description: "A quick hello — and a template you can copy to write your next post."
featured: true
draft: false
---

Hi, and welcome! 👋 This is the first post on my new site. From here on I'll be
writing about **big data, AI, agents, and open source** — the things I work on
day to day.

## Writing a new post

Each post is a single Markdown file in `src/content/blog/`. Copy this file,
rename it (the file name becomes the URL slug), and update the frontmatter at
the top:

```yaml
---
title: "Your title"
date: "2026-07-15"      # controls ordering, newest first
description: "One-line summary shown in listings."
featured: true          # show it in the homepage "Latest" feed
draft: false            # set true to hide it from the published site
---
```

Then write the body in normal Markdown.

## What you can use

Everything standard Markdown supports renders with clean typography:

- **Bold**, *italic*, and `inline code`
- Lists, quotes, and links
- Headings for structure

> Reliability, scalability, and cost-efficiency aren't afterthoughts —
> they're the design.

Code blocks are highlighted too:

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```

That's it — commit the file, push, and it deploys automatically. Happy writing! ✨
