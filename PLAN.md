# Blog Plan

## Project Goal

建立一个以中文为主的个人技术博客，定位为 `AI vibe coding` 方向的长期内容平台，用于：

- 发布原创技术文章
- 沉淀项目复盘、工程思考与方法论
- 收录带来源标注的“他山之石”摘录内容
- 对外展示个人技术方向、工作流与代表性项目

## Current State

当前项目已经是一个可运行、可构建的 `Astro` 静态博客。

已具备：

- 中文首页、文章页、项目页、关于页、标签页
- `AI vibe coding` 风格的统一视觉语言
- 原创文章内容集合：`src/content/blog/`
- “他山之石”内容集合：`src/content/stones/`
- `RSS` 与 `sitemap`
- 可正常执行 `npm run dev` 与 `npm run build`

## Completed Work

### 1. Project scaffold

- 手工搭建 `Astro` 项目，而不是依赖在线模板拉取
- 已安装并配置基础依赖
- 关键配置文件已建立：
  - `package.json`
  - `astro.config.mjs`
  - `tsconfig.json`
  - `src/content.config.ts`

### 2. Core pages and content structure

- 已创建并接通以下页面：
  - `src/pages/index.astro`
  - `src/pages/blog/index.astro`
  - `src/pages/blog/[...slug].astro`
  - `src/pages/projects.astro`
  - `src/pages/about.astro`
  - `src/pages/tags/index.astro`
  - `src/pages/tags/[tag].astro`
  - `src/pages/stones/index.astro`
  - `src/pages/stones/[...slug].astro`

### 3. Chinese localization

- 站点主要页面文案已整体切换为中文
- 页面语言已设置为 `zh-CN`
- 日期展示已切换为中文格式
- 中文标签路由已支持

### 4. AI vibe coding redesign

- 全局视觉风格已改为深色、实验感、工具感更强的 `AI vibe coding` 方向
- 首页已加入以下内容区块：
  - 工作流
  - 能力标签
  - 当前关注
- `about` 与 `projects` 页面已统一到同一叙事方向

### 5. Stones section

- 已新增“他山之石”栏目
- 内容目录：`src/content/stones/`
- 列表页：`src/pages/stones/index.astro`
- 详情页：`src/pages/stones/[...slug].astro`
- 文末强制来源展示布局：`src/layouts/StoneLayout.astro`

### 6. Source enforcement for stones

`stones` 集合在 `src/content.config.ts` 中强制要求以下字段：

- `sourceName`
- `sourceUrl`
- `sourceAuthor` 可选
- `sourceNote` 可选

缺少必填来源字段时，构建应失败。

### 7. Real project replacement

- 示例项目已替换为真实项目：`conversation-about-ai-workflow`
- 当前项目展示数据位于：`src/data/projects.ts`
- 目前确认这是 **一个项目**，不是三个独立项目

## Important Content Rules

### Original blog posts

- 目录：`src/content/blog/`
- 格式：Markdown (`.md`)
- 通过 frontmatter 控制：
  - `title`
  - `description`
  - `pubDate`
  - `tags`
  - `featured`
  - `draft`

### Stones posts

- 目录：`src/content/stones/`
- 格式：Markdown (`.md`)
- 必须填写来源字段，文末会自动渲染来源信息

## Validation Status

最近一次状态：构建通过。

验证命令：

```bash
npm run build
```

本地预览命令：

```bash
npm run dev
```

## Pending Decisions

### High priority

- 将模板式个人介绍替换为真实个人信息
- 将 `conversation-about-ai-workflow` 项目展示补充为更完整的真实信息
- 用真实原创文章替换当前示例文章

### Medium priority

- 决定是否把 `src/pages/projects.astro` 从“项目列表式”改成“单项目详情式”布局
  - 当前只有一个核心项目，这种改法更自然
  - 但用户尚未明确要求立即执行

### Low priority

- 增加评论系统，如 `Giscus`
- 增加更完整的 SEO 元信息
- 增加部署说明文档或 README

## Recommended Next Step For New Agent

如果后续由新 agent 接手，优先按以下顺序继续：

1. 询问用户是否要把 `projects` 页改成单项目详情布局
2. 如果用户确认，则围绕 `conversation-about-ai-workflow` 做单项目深度展示页
3. 否则，先把 `about` 页中的模板介绍改成用户真实信息
4. 再协助用户替换或新增原创文章到 `src/content/blog/`

## Key Files To Read First

新 agent 接手时，建议先读这些文件：

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/projects.astro`
- `src/data/projects.ts`
- `src/content.config.ts`
- `src/styles/global.css`
- `src/layouts/StoneLayout.astro`
- `PLAN.md`
