/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return ({
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      });
}