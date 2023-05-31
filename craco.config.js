const path = require(`path`);

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = './src/index.js';
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      };
      return webpackConfig;
    }
  }
};
