import svgLoader from 'vite-svg-loader'

module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      plugins: [
          svgLoader()
      ]
    }
  },
  title: 'Lib',
  themeConfig: {
    smoothScroll: true,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Components',
        link: '/components/',
      },
    ],
    sidebar: {
      '/components/': ['svg-icon']
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
  ],
};

