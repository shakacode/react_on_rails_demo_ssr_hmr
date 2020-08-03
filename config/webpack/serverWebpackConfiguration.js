const { config } = require('@rails/webpacker')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const environment = require('./environment')

const clientConfigObject = environment.toWebpackConfig()

const configureServer = () => {
  // We need to use "merge" because the clientConfigObject, EVEN after running
  // toWebpackConfig() is a mutable GLOBAL. Thus any changes, like modifying the
  // entry value will result in changing the client config!
  // Using webpack-merge into an empty object avoids this issue.
  const serverWebpackConfig = merge({}, clientConfigObject)

  // We just want the single server bundle entry
  const serverEntry = {
    'server-bundle': environment.entry.get('server-bundle'),
  }
  serverWebpackConfig.entry = serverEntry

  // Remove the mini-css-extract-plugin from the style loaders because
  // the client build will handle exporting CSS.
  // replace file-loader with null-loader
  serverWebpackConfig.module.rules.forEach((loader) => {
    if (loader.use && loader.use.filter) {
      loader.use = loader.use.filter(
        (item) =>
          !(typeof item === 'string' && item.match(/mini-css-extract-plugin/))
      )
    }
  })

  // No splitting of chunks for a server bundle
  serverWebpackConfig.optimization = {
    minimize: false,
  }
  serverWebpackConfig.plugins.unshift(
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  )

  // Custom output for the server-bundle that matches the config in
  // config/initializers/react_on_rails.rb
  serverWebpackConfig.output = {
    filename: 'server-bundle.js',
    globalObject: 'this',
    // If using the React on Rails Pro node server renderer, uncomment the next line
    // libraryTarget: 'commonjs2',
    path: config.outputPath,
    publicPath: config.outputPath,
    // https://webpack.js.org/configuration/output/#outputglobalobject
  }

  // Don't hash the server bundle b/c would conflict with the client manifest
  // And no need for the MiniCssExtractPlugin
  serverWebpackConfig.plugins = serverWebpackConfig.plugins.filter(
    (plugin) =>
      plugin.constructor.name !== 'WebpackAssetsManifest' &&
      plugin.constructor.name !== 'MiniCssExtractPlugin' &&
      plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
  )

  // Critical due to https://github.com/rails/webpacker/pull/2644
  delete serverWebpackConfig.devServer

  // eval works well for the SSR bundle because it's the fastest and shows
  // lines in the server bundle which is good for debugging SSR
  // The default of cheap-module-source-map is slow and provides poor info.
  serverWebpackConfig.devtool = 'eval'

  // If using the default 'web', then libraries like Emotion and loadable-components
  // break with SSR. The fix is to use a node renderer and change the target.
  // If using the React on Rails Pro node server renderer, uncomment the next line
  // serverWebpackConfig.target = 'node'

  return serverWebpackConfig
}

module.exports = configureServer
