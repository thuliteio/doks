# Doks Copilot Instructions

## Project Overview

**Doks** is a modern, minimal Hugo documentation theme built by Thulite. It provides a professional foundation for creating beautiful, high-performance documentation websites with built-in features like full-text search, dark mode, blog support, and internationalization (i18n).

- **Official Website**: https://doks.thulite.io/
- **Documentation**: https://getdoks.org/
- **Repository**: https://github.com/thuliteio/doks

## Tech Stack

### Core Technologies

- **Hugo v0.155.1+** (extended version, required for SCSS support)
  - Static site generator for documentation
  - Uses Goldmark markdown processor with math support (KaTeX/MathJax)
  - Module system (`@thulite/*` packages) for extensibility
- **Node.js v24.13.0+** with npm v11.6.2+
- **Thulite Framework**: Foundational UI framework (Bootstrap 5 compatible)

### Build & Development Tools

- **Vite**: Asset bundling and CSS/JS optimization
- **Prettier**: Code formatting (configured for markdown, JSON, YAML at 2-space tabs; SCSS at 2-space; other files at 4-space)
- **Babel**: JavaScript transpilation
- **PostCSS**: CSS processing with Autoprefixer and PurgeCSS

### Frontend Dependencies

- **@thulite/doks-core**: Core theme layouts and components
- **@thulite/bootstrap**: Bootstrap 5 wrapper
- **@thulite/seo**: SEO optimization module
- **@thulite/images**: Image processing and lazy loading
- **@thulite/inline-svg**: SVG inlining utilities
- **flexsearch**: Client-side full-text search (configured in default params)
- **@tabler/icons**: Icon system
- **basiclightbox**: Image lightbox functionality
- **clipboard**: Clipboard API utilities

### Deployment

- **Netlify**: Configured via `netlify.toml`
  - Build command: `npm run build`
  - Dev command: `npm run dev` (Hugo dev server on port 1313)
  - Functions: Netlify serverless functions support (empty by default)

## Project Structure

```
doks/
├── content/           # Markdown content and pages
│   ├── _index.md     # Homepage
│   ├── privacy.md    # Privacy page
│   ├── blog/         # Blog posts (section: blog)
│   └── docs/         # Documentation pages (section: docs, primary content)
│       ├── guides/   # Guide pages
│       └── reference/ # Reference pages
├── layouts/          # Custom Hugo layouts (override theme defaults)
│   ├── home.html     # Custom homepage layout
│   └── _partials/    # Partial templates
│       ├── head/     # Custom head elements
│       └── footer/   # Custom footer elements
├── assets/           # Static assets processed by Hugo
│   ├── scss/         # SCSS stylesheets
│   │   └── common/   # Custom SCSS (_custom.scss, _variables-custom.scss)
│   ├── js/           # JavaScript files (custom.js for custom logic)
│   ├── images/       # Image assets
│   └── svgs/         # SVG files
├── static/           # Raw static files (copied as-is)
├── config/           # Hugo configuration
│   ├── _default/     # Default configuration
│   │   ├── hugo.toml      # Main Hugo config
│   │   ├── params.toml    # Theme parameters
│   │   ├── module.toml    # Hugo module mounts (integration of @thulite/* packages)
│   │   ├── markup.toml    # Markdown/Goldmark processing settings
│   │   ├── languages.toml # i18n configuration (EN, DE, NL)
│   │   └── menus/         # Navigation menu definitions
│   ├── production/   # Production overrides
│   └── next/         # Future/next version config
├── .changeset/       # Changesets for version management
├── public/           # Built output (generated, do not edit)
├── resources/        # Hugo resource cache (generated)
├── package.json      # Node.js dependencies and build scripts
├── netlify.toml      # Netlify deployment configuration
└── theme.toml        # Theme metadata

**Key Mount Points** (from module.toml):
- `layouts/` custom layouts override `@thulite/doks-core/layouts`
- `home.html` is excluded from doks-core to allow customization
- Data from `@thulite/doks-core/data` merged with local `/data` folder
```

## Build & Development Workflow

### Installation

```bash
npm install
```

This installs all dependencies including Hugo binaries via the node packages.

### Development Server

```bash
npm run dev
```

- Starts Hugo dev server at `http://localhost:1313`
- Hot reload enabled (--disableFastRender --noHTTPCache flags)
- Watches for changes in content, layouts, and assets

### Build for Production

```bash
npm run build
```

- Minifies output (--minify flag)
- Runs garbage collection (--gc flag)
- PurgeCSS removes unused CSS (references hugo_stats.json)
- Outputs to `public/` directory
- Used by Netlify CI/CD

### Code Formatting

```bash
npm run format
```

- Formats all files with Prettier
- Tab widths: 2 spaces (MD, JSON, YAML, SCSS), 4 spaces (default)
- Line ending: CRLF

### Other Commands

```bash
npm run create              # Create new content: npm run create path/to/content.md
npm run preview             # Preview built site
```

## Content Structure & Conventions

### Content Organization

- **Blog**: `content/blog/` articles (outputs to `/blog/slug/`)
- **Documentation**: `content/docs/` primary documentation (outputs to `/docs/sections/slug/`)
- **Guides**: `content/docs/guides/` tutorial content
- **Reference**: `content/docs/reference/` API/reference docs
- **Privacy/Legal**: Root-level markdown files (e.g., privacy.md)

### Front Matter

All pages use YAML front matter with these key fields:

```yaml
---
title: "Page Title"
description: "Short description"
date: 2026-02-16T...
lastmod: 2026-02-16T...
draft: false
seo:
  title: "Custom SEO title"
  description: "Custom SEO description"
  canonical: "custom-url"
  noindex: false
---
```

### i18n Support

- **Three languages configured**: English (en), German (de), Nederlands (nl)
- English is default (weight: 10, others disabled by default in hugo.toml)
- To enable other languages: remove from `disableLanguages` in config/\_default/hugo.toml
- Content ISO codes: `en-US`, `de-DE`, `nl-NL`

### Markdown Features

- **Math support**: KaTeX inline `\(x = y\)` and block `\[x = y\]` delimiters
- **Syntax highlighting**: Enabled with Goldmark, style: monokai
- **TOC generation**: Auto-generated from h2-h3 headings (configurable in markup.toml)
- **Auto heading IDs**: GitHub-style heading anchors

## Configuration Management

### Key Parameters (config/\_default/params.toml)

- `math`: Enable/disable math rendering (KaTeX/MathJax)
- **Doks-specific settings** (under `[doks]`):
  - `flexSearch`: Full-text search toggle (default: true)
  - `colorMode`: auto|light|dark (default: auto)
  - `navbarSticky`, `breadcrumbTrail`, `scrollSpy`: Navigation features
  - `editPage`, `relatedPosts`: Content features
  - `docsVersioning`: Enable multi-version docs (default: false)

### Multiple Environments

- `config/_default/`: Base configuration used by development
- `config/production/`: Production overrides (Netlify uses this)
- `config/next/`: Reserved for future previews

## Coding Guidelines

### Markdown

- **File naming**: Use hyphens for multi-word slugs (e.g., `example-guide.md`)
- **Front matter structure**: Always include title, description, date, and draft status
- **Sections**: Organize content in logical sections (guides, reference, blog)

### HTML/Templates

- **Custom layouts**: Add site-specific layouts to `layouts/` directory
- **Partials convention**: Use `_partials/` subdirectories for reusable components
- **Head injection**: Custom elements go in `layouts/_partials/head/custom-head.html`
- **Footer injection**: Custom scripts go in `layouts/_partials/footer/script-footer-custom.html`

### SCSS/CSS

- **Dark mode support**: Required for all components
- **CSS variables**: Bootstrap 5 CSS variables are available (from @thulite/bootstrap)
- **Custom SCSS**:
  - Variables: Edit `assets/scss/common/_variables-custom.scss`
  - Styles: Edit `assets/scss/common/_custom.scss`
- **PurgeCSS**: Uses hugo_stats.json. Add dynamic class names to postcss.config.js dynamicAttributes

### JavaScript

- **Custom JS**: `assets/js/custom.js` (currently empty but available)
- **Build output**: Minified and split by Vite into `public/js/`
- **Bootstrap JS**: Can optionally enable via `bootstrapJavascript: false` in params

### Formatting Standards

- **EditorConfig**: 2-space tabs for markdown, YAML, JSON, SCSS; 4-space default
- **End of line**: CRLF (Windows style, see .prettierrc.yaml)
- **Trailing whitespace**: Removed automatically
- **Final newline**: Inserted automatically
- **Run** `npm run format` before committing

## Recommended VS Code Extensions

Configured in `.vscode/extensions.json`:

- **budparr.language-hugo-vscode**: Hugo template syntax
- **yzhang.markdown-all-in-one**: Markdown editing
- **tamasfe.even-better-toml**: TOML configuration
- **dbaeumer.vscode-eslint**: JavaScript linting
- **DavidAnson.vscode-markdownlint**: Markdown linting
- **stylelint.vscode-stylelint**: SCSS/CSS linting

## Important Implementation Notes

### Hugo Module System (module.toml)

The project uses Hugo modules to mount content and layouts from npm packages:

- Core layouts from `@thulite/doks-core` are included via module mounts
- **Critical**: `home.html` is explicitly excluded from the core module to allow customization
- All Thulite packages (`@thulite/bootstrap`, `@thulite/seo`, etc.) are mounted for layout inheritance
- Never delete or heavily modify the mounts in `module.toml` without understanding cascade implications

### Search & Performance

- **FlexSearch**: Client-side full-text search (no server required)
- **Search index**: Generated automatically via `searchIndex` output format
- **PurgeCSS**: Removes unused Bootstrap CSS based on hugo_stats.json
- Always rebuild after major content changes to update search indices and CSS

### Security Headers

Netlify headers configured in `netlify.toml` include:

- CSP (Content Security Policy) - restricts inline scripts
- HSTS - forces HTTPS
- X-Frame-Options - prevents clickjacking
- Referrer-Policy - strict origin

### Versioning & Changesets

- Uses Changesets (`@changesets/cli`) for version management
- PR-based changelog generation (GitHub integration)
- Configuration in `.changeset/`

## Common Tasks

### Adding a New Guide

1. Create file: `content/docs/guides/my-guide.md`
2. Add YAML front matter with title, description, date metadata
3. Write markdown content
4. Run `npm run dev` to preview
5. Run `npm run format` before committing

### Adding a Blog Post

1. Create directory: `content/blog/my-post/`
2. Create `index.md` inside with front matter
3. Include optional featured image
4. Blog outputs to `/blog/{slug}/` via permalink config in hugo.toml

### Customizing Theme

1. **Colors**: Edit `assets/scss/common/_variables-custom.scss` (Bootstrap CSS variables)
2. **Custom styles**: Add to `assets/scss/common/_custom.scss`
3. **Layout overrides**: Create new files in `layouts/` matching the structure in node_modules/@thulite/doks-core/layouts
4. **Homepage**: Edit `layouts/home.html`

### Enabling New Language

1. Uncomment language in `config/_default/hugo.toml` under `disableLanguages` (remove it)
2. Ensure content directory exists: `content/{lang-code}/`
3. Configure translation strings in `config/_default/languages.toml`

## Troubleshooting & Common Issues

### Build Failures

- **Hugo version mismatch**: Ensure Hugo >= 0.155.1 (extended): `hugo version`
- **Node version**: Ensure Node.js >= 24.13.0: `node --version`
- **Missing dependencies**: Run `npm install`
- **Stale build cache**: Delete `resources/_gen/` and rebuild

### Dev Server Issues

- **Port already in use**: Hugo defaults to 1313; check if free
- **Hot reload not working**: Ensure running with `npm run dev` (not raw hugo command)
- **Content not showing**: Verify `draft: false` in front matter

### CSS/Styling Issues

- **Dark mode breaks**: Check custom CSS doesn't override critical variables
- **PurgeCSS removes needed styles**: Add class names to `dynamicAttributes` in postcss.config.js
- **Custom SCSS not loading**: Verify import path in `_custom.scss`

### Search Not Working

- **Index not generating**: Run `npm run build` to generate search-index.json
- **FlexSearch disabled**: Check `flexSearch = true` in config/\_default/params.toml
- **Index too large**: Limit with `indexSummary: true` to index only `.Summary` field

## Known Workarounds

- None currently documented. No active TODOs or HACKs in source code.

## Resources & Links

- **Hugo Docs**: https://gohugo.io/
- **Bootstrap 5**: https://getbootstrap.com/docs/5.0/
- **Thulite Website**: https://thulite.io/
- **GitHub Discussions**: https://github.com/thuliteio/doks/discussions
- **Issue Tracker**: https://github.com/thuliteio/doks/issues
