# Changelog

All notable changes to `simple-blog-ui` are documented here. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning follows [SemVer](https://semver.org/spec/v2.0.0.html).

## [0.4.2] — 2026-04-18

### Added

- Cover image at the top of the README.

### Changed

- README refreshed: badges (HTML/React/Vue/Lit/Storybook/highlight.js), updated component count to 45 across 9 categories, and a dedicated section documenting the Blog primitives.

### Fixed

- Marked `src/**/*.js` as having side effects so bundlers do not tree-shake `customElements.define` calls.
- Preserved `customElements.define` side effects in the Storybook build.

## [0.1.0] — 2026-04-17

### First public release 🚀

38 Web Components across 8 categories, styled after [`mkdocs-simple-blog`](https://github.com/FernandoCelmer/mkdocs-simple-blog).

### Added

- **Actions** — `sb-button`, `sb-icon-button`, `sb-button-group`, `sb-close-button`
- **Typography** — `sb-heading`, `sb-text`, `sb-code` (highlight.js syntax highlighting, 35+ languages)
- **Layout** — `sb-container`, `sb-stack`, `sb-divider`
- **Display** — `sb-card`, `sb-avatar`, `sb-badge`, `sb-tag`, `sb-accordion`, `sb-collapse`, `sb-list-group`, `sb-carousel`, `sb-table`
- **Forms** — `sb-input`, `sb-textarea`, `sb-checkbox`, `sb-switch`
- **Feedback** — `sb-alert`, `sb-spinner`, `sb-progress`, `sb-toast`
- **Navigation** — `sb-link`, `sb-tabs`, `sb-nav`, `sb-navbar`, `sb-breadcrumb`, `sb-pagination`
- **Overlays** — `sb-modal`, `sb-tooltip`, `sb-dropdown`, `sb-offcanvas`, `sb-popover`

### React integration

- Official PascalCase wrappers via `simple-blog-ui/react` subpath export
- Custom events map to standard React handlers (`onClick`, `onChange`, `onInput`, `onClose`, `onSelect`, etc)
- Generated with [@lit/react](https://lit.dev/docs/frameworks/react/)

### Theming

- Light and dark themes via `data-theme="dark"` attribute
- Design tokens inherited from `mkdocs-simple-blog`'s `root.css`
- Override any token on `:root` to re-theme
- Semantic tokens (`--surface`, `--bg-subtle`, `--border-subtle`, `--backdrop`, `--code-bg`, `--code-fg`)

### Developer experience

- ESM + CJS builds
- `react`/`react-dom` declared as optional peer dependencies
- Vite multi-entry build (`simple-blog-ui` + `simple-blog-ui/react`)
- Storybook with per-component MDX docs and HTML / React / Vue code tabs
- Three usage guides in Storybook: Usage/HTML, Usage/React, Usage/Vue
- Live documentation at [fernandocelmer.github.io/simple-blog-ui](https://fernandocelmer.github.io/simple-blog-ui/)

[0.1.0]: https://github.com/FernandoCelmer/simple-blog-ui/releases/tag/v0.1.0
