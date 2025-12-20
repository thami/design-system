# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Multi-framework UI component library built on TailwindCSS v4 and DaisyUI v5. Published to npm as `@thamimagi/design-system`.

**Tech Stack**: React 19 + TailwindCSS v4 + DaisyUI v5 + Vite + Storybook 8

## Related Repositories

| Repository | Path | Purpose |
|------------|------|---------|
| **design-system** (this) | `/Users/thami.magi/workspace/design-system` | UI components |
| **blog** | `/Users/thami.magi/workspace/blog` | Astro frontend (consumer) |
| **blog-cms** | `/Users/thami.magi/workspace/blog-cms` | Directus CMS config |
| **kubernetes-spec-kit** | `/Users/thami.magi/workspace/kubernetes-spec-kit` | Infrastructure |

## Project Structure

```
design-system/
├── src/
│   ├── components/       # React components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── index.ts
│   ├── styles/           # CSS/Tailwind
│   └── index.ts          # Main exports
├── .storybook/           # Storybook configuration
├── dist/                 # Built output
├── storybook-static/     # Built Storybook
└── package.json
```

## Key Commands

```bash
# Development
pnpm install              # Install dependencies
pnpm dev                  # Start Storybook dev server
pnpm build                # Build library
pnpm build-storybook      # Build Storybook static site

# Quality
pnpm lint                 # Run linter
pnpm typecheck            # TypeScript check
pnpm test                 # Run tests

# Publishing
pnpm version patch        # Bump version
npm publish               # Publish to npm
```

## Component Guidelines

### Creating New Components

```tsx
// src/components/NewComponent/NewComponent.tsx
import { cn } from "../../utils/cn";

interface NewComponentProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function NewComponent({ variant = "primary", children }: NewComponentProps) {
  return (
    <div className={cn("base-class", variant === "primary" && "btn-primary")}>
      {children}
    </div>
  );
}
```

### Export Pattern

```tsx
// src/components/NewComponent/index.ts
export { NewComponent } from "./NewComponent";
export type { NewComponentProps } from "./NewComponent";

// src/components/index.ts
export * from "./NewComponent";
```

### Storybook Stories

```tsx
// src/components/NewComponent/NewComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { NewComponent } from "./NewComponent";

const meta: Meta<typeof NewComponent> = {
  component: NewComponent,
  title: "Components/NewComponent",
};
export default meta;

type Story = StoryObj<typeof NewComponent>;

export const Primary: Story = {
  args: { variant: "primary", children: "Hello" },
};
```

## Constraints

1. **Use DaisyUI classes** - Don't reinvent styling
2. **Framework-agnostic CSS** - Core styles work in any framework
3. **Export types** - All components export TypeScript types
4. **Document in Storybook** - Every component needs stories
5. **Semantic versioning** - Follow semver for npm releases

## Architecture

### Multi-Framework Strategy

```
@thamimagi/design-system
├── React components (primary)     # Current focus
├── Vue components (planned)       # For Directus extensions
├── Svelte components (planned)    # For Astro islands
└── CSS/DaisyUI (shared)           # Works everywhere
```

### Consumer Integration

```tsx
// In Astro/React/Vue projects
import { Button, Card } from "@thamimagi/design-system";
import "@thamimagi/design-system/styles";
```

## Deployment

- **npm**: https://npmjs.com/package/@thamimagi/design-system
- **Storybook**: https://thami.github.io/design-system/
- **Source**: https://github.com/thami/design-system

## Publishing Workflow

```bash
# 1. Update version
pnpm version patch|minor|major

# 2. Build
pnpm build

# 3. Publish
npm publish --access public

# 4. Deploy Storybook
pnpm build-storybook
# GitHub Pages auto-deploys storybook-static/
```
