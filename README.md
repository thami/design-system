# @thami/design-system

Shared design system with Storybook, TailwindCSS v4, and DaisyUI v5.

## Features

- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🌼 **DaisyUI v5** - Component classes for Tailwind
- 📖 **Storybook 8** - Component documentation and playground
- ⚛️ **React 19** - Component library
- 📦 **NPM Package** - Published as `@thami/design-system`

## Installation

```bash
pnpm add @thami/design-system
```

## Usage

```tsx
import { Button, Card } from "@thami/design-system";
import "@thami/design-system/styles";

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

## License

MIT
