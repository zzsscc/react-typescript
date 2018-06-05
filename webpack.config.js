let webpackConfig;
module.exports = env => {
  switch (env.NODE_ENV) {
    case 'prod':
    case 'production':
      webpackConfig = require('./webpack/webpack.prod.conf');
      break;
    case 'dev':
    case 'development':
    default:
      webpackConfig = require('./webpack/webpack.dev.conf');
  }
  return webpackConfig;
}
