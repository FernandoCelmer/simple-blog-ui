# simple-blog-ui

**The UI kit for your terminal-style blog.**

A framework-agnostic component library built with [Lit](https://lit.dev/) — drop it into plain HTML, React, or Vue and get 38 Web Components styled after [`mkdocs-simple-blog`](https://github.com/FernandoCelmer/mkdocs-simple-blog): Fira Mono, uppercase, 2px borders, zero rounded corners. The kind of UI that looks like it was typeset on a Selectric.

<p align="center">
  <a href="https://www.npmjs.com/package/simple-blog-ui"><img src="https://img.shields.io/npm/v/simple-blog-ui?style=flat-square&color=000000&labelColor=000000" alt="npm"></a>
  <img src="https://img.shields.io/badge/lit-3.x-000000?style=flat-square&labelColor=000000" alt="lit">
  <img src="https://img.shields.io/badge/react-ready-000000?style=flat-square&labelColor=000000" alt="react">
  <img src="https://img.shields.io/badge/vue-ready-000000?style=flat-square&labelColor=000000" alt="vue">
  <img src="https://img.shields.io/badge/license-MIT-000000?style=flat-square&labelColor=000000" alt="license">
</p>

## Why?

- **One lib, three stacks.** Web Components are native — write them once, use them everywhere.
- **Opinionated design, zero configuration.** The whole kit follows a single aesthetic: monospace terminal chic. No theme configuration required to look good.
- **Dark mode baked in.** Flip `data-theme="dark"` on `<html>` and every component inverts correctly.
- **Syntax highlighting included.** `<sb-code>` auto-highlights JavaScript, Python, Bash, JSON, HTML and 30+ more languages via highlight.js.
- **Tiny.** ~5KB Lit runtime + per-component shadow DOM. No global CSS-in-JS bloat.
- **React-first DX.** Official PascalCase wrappers via `simple-blog-ui/react` turn custom events (`sb-click`, `sb-change`) into native React handlers (`onClick`, `onChange`).

## Install

```bash
npm install simple-blog-ui
```

## Quick start

### HTML

```html
<script type="module">
  import 'simple-blog-ui';
</script>
<link rel="stylesheet" href="node_modules/simple-blog-ui/src/styles/main.css" />

<sb-button variant="primary">Click me</sb-button>
```

### React

```jsx
import { Button, Input, Alert } from 'simple-blog-ui/react';
import 'simple-blog-ui/style.css';

export default function App() {
  return (
    <>
      <Button variant="primary" onClick={() => alert('hi')}>Click me</Button>
      <Input label="Email" onInput={(e) => console.log(e.detail.value)} />
      <Alert variant="success" title="Saved">Done.</Alert>
    </>
  );
}
```

### Vue 3

```vue
<script setup>
import 'simple-blog-ui';
import 'simple-blog-ui/style.css';
</script>

<template>
  <sb-button variant="primary" @sb-click="onClick">Click me</sb-button>
</template>
```

Tell Vue that `sb-*` is a custom element — add to your `vite.config`:

```js
vue({ template: { compilerOptions: { isCustomElement: (t) => t.startsWith('sb-') } } })
```

## Components

**38 components · 8 categories · all in the same minimalist style.**

| Category       | Count | Components                                                                                      |
| -------------- | :---: | ----------------------------------------------------------------------------------------------- |
| **actions**    |   4   | `sb-button` · `sb-icon-button` · `sb-button-group` · `sb-close-button`                          |
| **typography** |   3   | `sb-heading` · `sb-text` · `sb-code`                                                            |
| **layout**     |   3   | `sb-container` · `sb-stack` · `sb-divider`                                                      |
| **display**    |   9   | `sb-card` · `sb-avatar` · `sb-badge` · `sb-tag` · `sb-accordion` · `sb-collapse` · `sb-list-group` · `sb-carousel` · `sb-table` |
| **forms**      |   4   | `sb-input` · `sb-textarea` · `sb-checkbox` · `sb-switch`                                        |
| **feedback**   |   4   | `sb-alert` · `sb-spinner` · `sb-progress` · `sb-toast`                                          |
| **navigation** |   6   | `sb-link` · `sb-tabs` · `sb-nav` · `sb-navbar` · `sb-breadcrumb` · `sb-pagination`              |
| **overlays**   |   5   | `sb-modal` · `sb-tooltip` · `sb-dropdown` · `sb-offcanvas` · `sb-popover`                       |

Play with every single one in the [Storybook](#storybook-and-docs).

## React — event handling

Custom events map to standard React props. The `CustomEvent` payload lives at `event.detail`.

| React prop      | Components                              |
| --------------- | --------------------------------------- |
| `onClick`       | Button · IconButton                     |
| `onChange`      | Input · Checkbox · Switch · Accordion   |
| `onInput`       | Input · Textarea                        |
| `onClose`       | Modal · Offcanvas · Toast · CloseButton |
| `onSelect`      | Dropdown · ListGroup                    |
| `onPageChange`  | Pagination                              |
| `onTabChange`   | Tabs                                    |
| `onDismiss`     | Alert                                   |
| `onRemove`      | Tag                                     |
| `onToggle`      | Collapse                                |
| `onSlide`       | Carousel                                |

## Theming

Two themes out of the box. Toggle with a single attribute:

```html
<html data-theme="dark">
```

Every component reads its colors and spacing from CSS custom properties defined in `root.css`. Override any of them to re-theme globally:

```css
:root {
  --primary: #1e40af;        /* change primary accent */
  --color-red: #b91c1c;      /* change error color */
  --background: #fef3c7;     /* change page background */
}
```

**Core tokens** (inherited verbatim from `mkdocs-simple-blog`):

```css
--text: #000        --color-blue:   #4051b5
--title: #000       --color-green:  #4cae4f
--primary: #000     --color-yellow: #f1dc15
--background: #fff  --color-orange: #ffa724
--color-gray: #808080
                    --color-purple: #ab47bd
                    --color-red:    #ff2c06
```

## Storybook and docs

Every component has a live Storybook page with HTML / React / Vue code tabs, interactive controls, and the full set of variants.

```bash
npm install
npm run storybook   # opens http://localhost:6006
```

Three usage guides inside Storybook: **Usage / HTML**, **Usage / React**, **Usage / Vue** — plus **Design / Colors** and **Design / Typography** for the full token map.

## Scripts

```bash
npm run storybook        # dev server at :6006
npm run build            # library build (ESM + CJS)
npm run build-storybook  # static Storybook site
npm pack                 # produce a local tarball for testing
```

## Credits

Born as a React/Vue companion to [`mkdocs-simple-blog`](https://github.com/FernandoCelmer/mkdocs-simple-blog). Built with [Lit](https://lit.dev/) and [highlight.js](https://highlightjs.org/). React wrappers generated via [@lit/react](https://lit.dev/docs/frameworks/react/).

## License

[MIT](LICENSE) — Fernando Celmer
