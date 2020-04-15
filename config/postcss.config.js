const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',      
      ],
      whitelist: [
        'lazyloaded',
        ...whitelister([
          './assets/scss/common/_dark.scss',
          './assets/scss/common/_syntax.scss',
          './assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
