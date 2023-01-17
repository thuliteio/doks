const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');
const path = require('path');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './hugo_stats.json',
      ],
      defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
      },
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h5',
        'alert-link',
        'container-xxl',
        'container-fluid',
        'offcanvas-backdrop',
        'img-fluid',
        'lazyload',
        'blur-up',
        'figcaption',
        ...whitelister([
          path.join(__dirname, '../assets/scss/components/_alerts.scss'),
          path.join(__dirname, '../assets/scss/components/_buttons.scss'),
          path.join(__dirname, '../assets/scss/components/_code.scss'),
          path.join(__dirname, '../assets/scss/components/_diagrams.scss'),
          path.join(__dirname, '../assets/scss/components/_syntax.scss'),
          path.join(__dirname, '../assets/scss/components/_search.scss'),
          path.join(__dirname, '../assets/scss/common/_dark.scss'),
          './node_modules/bootstrap/scss/_dropdown.scss',
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
