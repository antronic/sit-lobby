'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env-setup');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

const paths = require('../config/path');

const webpackConfig = require('../config/webpack.base.conf');
const webpackDevServerConfig = require('../config/webpack-dev-server.config');

const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  contentBase: paths.publicFolder,
  compress: true,
  publicPath: paths.publicPath,
  watchContentBase: true,
  overlay: true,
  public: '/',
  stats: {
    colors: true,
  },
  // WebpackDevServer is noisy by default so we emit custom message instead
  // by listening to the compiler events with `compiler.plugin` calls above.
  // quiet: true,
  // Reportedly, this avoids CPU overload on some systems.
  // https://github.com/facebookincubator/create-react-app/issues/293
  watchOptions: {
    ignored: /node_modules/,
  },
});

devServer.listen(3002, '0.0.0.0', (err) => {
  console.log('Server start!');
});


['SIGINT', 'SIGTERM'].forEach(function(sig) {
  process.on(sig, function() {
    devServer.close();
    process.exit();
  });
});