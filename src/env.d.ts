/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ANALYTICS_PROVIDER?: 'plausible' | 'umami';
  readonly PUBLIC_ANALYTICS_SRC?: string;
  readonly PUBLIC_ANALYTICS_DOMAIN?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_GISCUS_REPO?: string;
  readonly PUBLIC_GISCUS_REPO_ID?: string;
  readonly PUBLIC_GISCUS_CATEGORY?: string;
  readonly PUBLIC_GISCUS_CATEGORY_ID?: string;
  readonly PUBLIC_GISCUS_MAPPING?: string;
  readonly PUBLIC_GISCUS_STRICT?: string;
  readonly PUBLIC_GISCUS_REACTIONS_ENABLED?: string;
  readonly PUBLIC_GISCUS_EMIT_METADATA?: string;
  readonly PUBLIC_GISCUS_INPUT_POSITION?: string;
  readonly PUBLIC_GISCUS_THEME?: string;
  readonly PUBLIC_GISCUS_LANG?: string;
  readonly PUBLIC_SITE_GITHUB_URL?: string;
  readonly PUBLIC_SITE_EMAIL?: string;
  readonly PUBLIC_SITE_PROJECT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
