# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run generate  # Generate static site
npm run preview   # Preview production build
```

No test runner is configured in this project.

## Architecture

This is a **Nuxt 3** curriculum/CV application with **multi-user, multi-language** support. The core idea is complete separation between data (composables) and rendering (components).

### Data Layer — `src/composables/use-versions/`

Each composable returns a `Curriculum` object (typed in `types.ts`) representing one person's CV in one language:

- `usePortugueseVersion()` — Rafael's CV in Portuguese (primary)
- `useEnglishVersion()` — Rafael's CV in English
- `usePortugueseVersionParent()` — Maria Cristina's CV in Portuguese

To add a new CV variant, create a new composable returning the `Curriculum` type and wire it to a new page.

### Rendering Layer — `src/components/curriculum/curriculum.vue`

Single data-driven component that accepts a `Curriculum` prop and renders all sections. All loops over experiences, languages, and courses happen here. Uses `v-html` for resume bullet points (trusted internal data only).

### Pages — `src/pages/`

Nuxt auto-routing — no manual router config. Each page imports a composable and passes the result to `<Curriculum />`:

- `/` → `usePortugueseVersion()`
- `/english-version` → `useEnglishVersion()`

### Component Pattern

Components use **namespaced barrel exports**:

```ts
// components/section/index.ts
export const Section = { Root, Title, Text, Col, ... }
```

Used in templates as `<Section.Root>`, `<Section.Title>`, etc. Follow this pattern when adding new component groups.

### Styling

- **TailwindCSS** utility-first; no scoped CSS in components
- CSS custom properties defined in `src/assets/css/main.css`: `--primary`, `--text-primary`, `--text-secondary`, `--text-tertiary`, and font size variables
- Tailwind theme references these vars via `tailwind.config.js`
- Path alias: `@/` maps to `src/`
