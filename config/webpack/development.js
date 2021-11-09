process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const { devServer, inliningCss } = require('@rails/webpacker')

const webpackConfig = require('./webpackConfig')

const developmentEnvOnly = (clientWebpackConfig, serverWebpackConfig) => {

  clientWebpackConfig.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../../tsconfig.json')
      },
      async: false
    })
  )
}
module.exports = webpackConfig(developmentEnvOnly)
