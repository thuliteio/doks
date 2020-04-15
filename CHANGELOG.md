# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.1] - 2020-03-31
### Added
- version to package.json - [issue 23](https://github.com/h-enk/hyas/issues/23)
- `copy:deps` to build command - [issue 22](https://github.com/h-enk/hyas/issues/22)
- `clean:deps` command

## [1.2.0] - 2020-03-30
### Added
- ga-lite - [issue 15](https://github.com/h-enk/hyas/issues/15)
- copy script for dep resources - [issue 14](https://github.com/h-enk/hyas/issues/14)
- flag `--minify` to `build` command

### Changed
- Bumped `[build.environment]` `netlify.toml`
- Bumped dependencies `package.json`
- Update security headers - [issue 17](https://github.com/h-enk/hyas/issues/17)
- `README.md`
- `robots` tag logic in `seo.html`

### Removed
- favicon - [issue 12](https://github.com/h-enk/hyas/issues/12)

## [1.1.0] - 2020-02-06
### Added
- `<link rel="shortcut icon" href="/path/to/favicon.ico">` - [issue 12](https://github.com/h-enk/hyas/issues/12)
- breadcrumbList structured data - [issue 11](https://github.com/h-enk/hyas/issues/11)
- body classes - [issue 10](https://github.com/h-enk/hyas/issues/10)
- `.stylelintignore` - [issue 9](https://github.com/h-enk/hyas/issues/9)
- `.eslintignore` - [issue 8](https://github.com/h-enk/hyas/issues/8)

### Changed
- default theme - [issue 7](https://github.com/h-enk/hyas/issues/7)
- bumped dependency `lazysizes` to `^5.2`
- bumped dependency `HUGO_VERSION` to `0.63.2`

## [1.0.1] - 2019-12-20
### Added
- custom `layouts/rss.xml` with page option `feed_exclude: true` - [issue 5](https://github.com/h-enk/hyas/issues/5)
- content `'./content/**/*.md',` to `postcss.config.js` - [issue 2](https://github.com/h-enk/hyas/issues/2)

### Changed
- set `canonifyURLs = false` in `/config/production/config.toml` and `/config/staging/config.toml` - [issue 3](https://github.com/h-enk/hyas/issues/3)

### Removed
- `--minify` in `build` command `package.json` - [issue 4](https://github.com/h-enk/hyas/issues/4)

## [1.0.0] - 2019-12-11
### Added
- [Layouts](https://github.com/h-enk/hyas/tree/master/layouts)
- [Image](https://github.com/h-enk/hyas/blob/master/layouts/shortcodes/img.html) shortcode
- [Directories](https://github.com/h-enk/hyas#theme-structure)
- [Scripts](https://github.com/h-enk/hyas/blob/master/package.json)
- bootstrap 4.4.1
- @fullhuman/postcss-purgecss 1.3.0
- purgecss-whitelister 2.4.0
- eslint 6.7.2
- stylelint 12.0.0
- stylelint-config-standard 19.0.0
- rimraf 3.0.0
- lazysizes 5.2.0-beta1
- [Atlas](https://github.com/indigotree/atlas), Copyright (c) 2017 Indigo Tree, [MIT License](https://github.com/indigotree/atlas/blob/master/LICENSE)

[Unreleased]: https://github.com/h-enk/hyas/compare/v1.2.1...HEAD
[1.2.1]: https://github.com/h-enk/hyas/releases/tag/v1.2.1
[1.2.0]: https://github.com/h-enk/hyas/releases/tag/v1.2.0
[1.1.0]: https://github.com/h-enk/hyas/releases/tag/v1.1.0
[1.0.1]: https://github.com/h-enk/hyas/releases/tag/v1.0.1
[1.0.0]: https://github.com/h-enk/hyas/releases/tag/v1.0.0
