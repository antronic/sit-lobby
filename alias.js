const path = require('path');

module.exports = {
  resolve: {
    alias: {
      $actions: path.resolve(__dirname, 'src/actions'),
      $containers: path.resolve(__dirname, 'src/containers'),
      $components: path.resolve(__dirname, 'src/components'),
      $libs: path.resolve(__dirname, 'src/libs'),
      $pages: path.resolve(__dirname, 'src/pages'),
      $reducers: path.resolve(__dirname, 'src/reducers'),
      $services: path.resolve(__dirname, 'src/services'),
      $styles: path.resolve(__dirname, 'src/styles'),
    },
  },
};
