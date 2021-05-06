const { path } = require('@vuepress/utils');

module.exports = {
  layouts: {
    404: path.resolve(__dirname, 'layouts/404.vue'),
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  }
}
