// Common configuration applying to client and server configuration

// const { globalMutableWebpackConfig: baseClientWebpackConfig, merge } = require('shakapacker')
const { webpackConfig: baseClientWebpackConfig, merge } = require('shakapacker')

const commonOptions = {
  resolve: {
      extensions: ['.css', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
          }
        ]
      }
    ]
  }
}

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
// const commonWebpackConfig = () => (merge({}, baseClientWebpackConfig, commonOptions))
const commonWebpackConfig = () => (merge({}, baseClientWebpackConfig(), commonOptions))

module.exports = commonWebpackConfig
