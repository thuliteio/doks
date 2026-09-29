---
"doks": major
---

# Major Changes

BREAKING CHANGE: LibSass support has been removed. Dart Sass is now required.

**WHAT changed:**

- Replaced LibSass with Dart Sass for CSS compilation
- All asset build pipelines now follow Hugo's official best practices
- JavaScript build aligned with Hugo's esbuild/Babel patterns

**WHY:**

- LibSass has been deprecated by the Sass team since 2020
- Dart Sass provides modern Sass language features and better maintenance
- Hugo's official patterns ensure future compatibility and reliability

**HOW to upgrade:**
Install Dart Sass in your environment:

- macOS (Homebrew): `brew install sass/sass/sass`
- Linux (Snap): `sudo snap install dart-sass`
- Windows (Scoop): `scoop install sass`
- Or: npm install -g sass

Other improvements:

- Enhanced Prettier, ESLint, and VS Code configuration
- Expanded Dependabot automation and dependency management
- Improved error handling and performance in JavaScript modules
- Modern CSS reset and better cross-browser consistency
