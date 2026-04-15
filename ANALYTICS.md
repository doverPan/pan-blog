# Blog Analytics

## Recommendation

This blog is a static Astro site, so the simplest durable setup is:

- Use `Umami` as the default analytics provider
- Keep `Plausible` as a compatible fallback
- Track two layers separately:
  - `reading`: visits, unique visitors, top posts, traffic sources
  - `recognition`: subscriptions, outbound clicks, replies, shares, references, collaboration signals

Why `Umami` first:

- Lightweight for static sites
- Privacy-friendly and easy to self-host
- No heavy dashboard or script overhead
- Works well when you mainly need author-side signals instead of ad-tech style attribution

## Comments And Reactions

For per-post likes, dislikes, and comments, use `Giscus`.

- Comments are stored in GitHub Discussions
- Reactions come from GitHub reactions, including `+1` and `-1`
- Good fit for Astro because it needs no custom backend in this repo

Required `.env` values:

- `PUBLIC_GISCUS_REPO`
- `PUBLIC_GISCUS_REPO_ID`
- `PUBLIC_GISCUS_CATEGORY`
- `PUBLIC_GISCUS_CATEGORY_ID`

Optional tuning:

- `PUBLIC_GISCUS_MAPPING=pathname`
- `PUBLIC_GISCUS_REACTIONS_ENABLED=1`
- `PUBLIC_GISCUS_INPUT_POSITION=top`
- `PUBLIC_GISCUS_THEME=dark_dimmed`
- `PUBLIC_GISCUS_LANG=zh-CN`

The interaction component is mounted in:

- `src/layouts/PostLayout.astro`
- `src/layouts/StoneLayout.astro`

## Site Setup

1. Copy `.env.example` to `.env`
2. Fill in either the `Umami` or `Plausible` values
3. Replace `site` in `astro.config.mjs` with your real domain
4. Deploy the site

Analytics is injected through `src/components/Analytics.astro` and loaded from `src/layouts/BaseLayout.astro`.

## Event Tracking

The site now supports custom click events with data attributes:

```html
<a
  href="https://github.com/yourname"
  data-analytics-event="profile_click"
  data-analytics-label="github"
>
  GitHub
</a>
```

Recommended custom events:

- `profile_click`
- `project_click`
- `contact_click`
- `resume_click`
- `newsletter_subscribe`
- `rss_subscribe`
- `source_click`

## Metrics Dashboard

Track these monthly.

### Reading

- Total pageviews
- Total unique visitors
- Top 10 posts by pageviews
- Avg. engagement time
- Entry sources: search, direct, social, referral, RSS
- Landing pages that bring first-time readers

### Recognition

- Newsletter or RSS subscriptions
- GitHub / project outbound clicks
- Contact form or email clicks
- External references or backlinks
- Social shares, reposts, bookmarks
- Direct inbound opportunities: interview, consulting, collaboration

### Content Quality Signals

- Posts with highest engagement time
- Posts with best click-through to project/contact links
- Posts that generate replies or quoted discussion
- Posts that keep bringing traffic after 30/90 days

## Suggested Author Review Template

Use this once per month.

```md
## YYYY-MM

### Reading
- UV:
- PV:
- Top 3 posts:
- Best traffic source:

### Recognition
- New subscribers:
- Profile/project clicks:
- Replies or references:
- Collaboration leads:

### Takeaways
- What topics pulled in new readers?
- What content created trust or follow-up actions?
- What should be written next?
```
