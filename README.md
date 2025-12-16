# @thamimagi/design-system

A composable, multi-framework design system built for true front-end interoperability.

## Vision

```
┌─────────────────────────────────────────────────────────────┐
│                    @thamimagi/design-system                  │
│         (Framework-agnostic: React + Vue + Svelte)          │
├─────────────────────────────────────────────────────────────┤
│  Astro Blog          │  Directus CMS        │  Future Apps  │
│  (React islands)     │  (Vue extensions)    │  (Any FW)     │
│                      │                      │               │
│  ← Module Federation / Shared Components →                  │
└─────────────────────────────────────────────────────────────┘
```

This design system enables **true composable architecture** across:

- **Astro** - Static sites with interactive React/Vue/Svelte islands
- **Directus** - Vue-based CMS with custom interfaces and modules
- **Any framework** - DaisyUI's CSS foundation works everywhere

By sharing components via Module Federation and maintaining framework parity, we achieve consistent UX across the entire stack without style duplication.

## Features

- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🌼 **DaisyUI v5** - Framework-agnostic component classes
- 📖 **Storybook 8** - Component documentation and playground
- ⚛️ **React 19** - Primary component library (Vue/Svelte planned)
- 📦 **NPM Package** - Published as `@thamimagi/design-system`

## Installation

```bash
pnpm add @thamimagi/design-system
```

## Usage

```tsx
import { Button, Card } from "@thamimagi/design-system";
import "@thamimagi/design-system/styles";

function App() {
  return (
    <Card title="Hello">
      <p>Welcome to the design system!</p>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm dev

# Build library
pnpm build

# Build Storybook
pnpm build-storybook
```

## Components

### Button
DaisyUI button with variants: primary, secondary, accent, ghost, link, neutral.

### Card
DaisyUI card with support for images, actions, and variants.

## Themes

Built-in DaisyUI themes: light (default), dark, cupcake, forest.

Custom theme (Astrofy-inspired) planned.

## Roadmap

- [ ] Vue component variants (for Directus extensions)
- [ ] Svelte component variants (for Astro islands)
- [ ] Custom DaisyUI theme (dark base, cyan-blue primary)
- [ ] Module Federation configuration
- [ ] Web Components wrapper (true framework-agnostic)

## License

MIT
