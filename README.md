# jotape.me

Personal site and interactive blog. Next.js 16 (App Router), React 19, Tailwind CSS 4, MDX, `motion` and `next-intl`.

## Running

```bash
nvm use   # Node 24
yarn
yarn dev
```

`yarn build` / `yarn lint` must stay clean.

## Content

- **UI copy and bio**: `messages/en.json` and `messages/pt.json`. English is the default locale; every route lives under `/en` or `/pt`.
- **Posts**: `posts/<locale>/<slug>.mdx`, with the same slug in both languages. Frontmatter: `title`, `abstract`, `publishedOn`.
  - `##`/`###` headings feed the table of contents.
  - Code fences accept a title: ```` ```tsx title="src/app/page.tsx" ````.
  - MDX components are registered in `src/mdx-components.tsx`: `ArticleNote`, `Highlight`, `TomatoMono`, `ChromaticCircle`, `ColorProperties`, `ColorShaders`, `WidgetContainer`.
