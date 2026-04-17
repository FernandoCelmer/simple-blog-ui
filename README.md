# simple-blog-ui

Framework-agnostic UI component library for **simple-blog**. Built with [Lit](https://lit.dev/) (Web Components). Works in plain HTML, React, and Vue.

Inherits the design language of [`mkdocs-simple-blog`](https://github.com/FernandoCelmer/mkdocs-simple-blog): Fira Mono monospace, uppercase headings and actions, 2px solid borders, no rounded corners.

## Installation

```bash
npm install simple-blog-ui
```

## Usage

### HTML

```html
<script type="module">
  import 'simple-blog-ui';
  import 'simple-blog-ui/style.css';
</script>

<sb-button variant="primary">Click me</sb-button>
```

### React (JS or TS)

```jsx
import 'simple-blog-ui';
import 'simple-blog-ui/style.css';

export default function App() {
  return <sb-button variant="primary">Click me</sb-button>;
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

In `vite.config`, mark `sb-*` as custom elements:

```js
vue({ template: { compilerOptions: { isCustomElement: (t) => t.startsWith('sb-') } } });
```

## Components (35 total)

| Category       | Components                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------- |
| **actions**    | `sb-button`, `sb-icon-button`, `sb-button-group`, `sb-close-button`                          |
| **typography** | `sb-heading`, `sb-text`, `sb-code`                                                           |
| **layout**     | `sb-container`, `sb-stack`, `sb-divider`                                                     |
| **display**    | `sb-card`, `sb-avatar`, `sb-badge`, `sb-tag`, `sb-accordion`, `sb-collapse`, `sb-list-group`, `sb-carousel` |
| **forms**      | `sb-input`, `sb-textarea`, `sb-checkbox`                                                     |
| **feedback**   | `sb-alert`, `sb-spinner`, `sb-progress`, `sb-toast`                                          |
| **navigation** | `sb-link`, `sb-tabs`, `sb-nav`, `sb-navbar`, `sb-breadcrumb`, `sb-pagination`                |
| **overlays**   | `sb-modal`, `sb-tooltip`, `sb-dropdown`, `sb-offcanvas`, `sb-popover`                        |

## Development

```bash
npm install
npm run storybook       # docs + playground at http://localhost:6006
npm run build           # generates dist/ (ESM + CJS)
npm run build-storybook # static Storybook site
```

## Design tokens

Colors and fonts come from [`src/styles/root.css`](src/styles/root.css):

```css
--text: #000;        --color-blue:   #4051b5;
--title: #000;       --color-green:  #4cae4f;
--primary: #000;     --color-yellow: #f1dc15;
--background: #fff;  --color-orange: #ffa724;
--color-gray: #808080;
                     --color-purple: #ab47bd;
                     --color-red:    #ff2c06;
```

Override any of them at `:root` or on a scoped ancestor to re-theme the lib.
