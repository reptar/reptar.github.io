module.exports = {
  site: {
    title: 'Reptar',
    author: 'Reptar',
    email: 'my@email.com',
    description: 'Reptar, a static site generator written in Node.\n',
    keywords: 'static site generator, static site, reptar, nodejs, javascript',
    url: 'http://reptar.github.io/',
  },
  path: {
    source: './',
    destination: './_site',
    templates: './_templates',
  },
  cleanDestination: true,
  file: {
    defaults: [
      { scope: { path: './' }, values: { template: 'page' } },
      {
        scope: { path: './docs/' },
        values: { template: 'docs_page', permalink: '/docs/:title/' },
      },
      {
        scope: { path: './_posts' },
        values: { template: 'post', permalink: '/blog/:title/' },
      },
    ],
    filters: { metadata: { draft: true }, futureDate: { key: 'date' } },
  },
  collections: {
    post: {
      path: './_posts',
      template: 'index',
      pageSize: 6,
      sort: { key: 'date', order: 'descending' },
      permalink: { index: '/blog/', page: '/blog/page/:page/' },
    },
    tag: {
      template: 'tag',
      pageSize: 6,
      metadata: 'tags',
      sort: { key: 'date', order: 'descending' },
      permalink: {
        index: '/blog/tag/:metadata/',
        page: '/blog/tag/:metadata/:page/',
      },
    },
  },
  // plugins: {
  //   'html-minifier': { enabled: true },
  //   excerpt: { enabled: true },
  // },
};
