const path = require('path');

const env = JSON.parse(process.env.ENV_CONFIG);

const resolvePath = p => path.resolve(p);

const alias = {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
};

const resolveAlias = a => {
  Object.keys(a).forEach((v, i) => {
    Object.assign(alias, {}, {
      // [v]: path.resolve(a[v]),
      [v]: a[v],
    })
  })
  return alias;
};

const vars = Object.assign({}, env.vars, {
  PUBLIC_URL: env.path.deploy,
});

module.exports = {
  appSrc: resolvePath(env.path.appSrc),
  appIndex: resolvePath(env.path.appIndex),
  appHtml: resolvePath(env.path.appHtml),
  publicPath: env.path.publicPath,
  deploy: resolvePath(env.path.deploy),
  buildFolder: resolvePath(env.path.buildFolder),
  publicFolder: resolvePath(env.path.publicFolder),
  appNodeModules: resolvePath(env.path.appNodeModules),
  // alias: resolveAlias(env.alias),
  vars: vars,
  stringifiedVars: JSON.stringify(vars),
};