process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { devServer } = require('@rails/webpacker')
const webpackConfig = require('./webpackConfig')

module.exports = webpackConfig()

const developmentOnly = () => {
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
  const path = require('path')

  const environment = require('./environment')

  const isWebpackDevServer = process.env.WEBPACK_DEV_SERVER

  //plugins
  if (isWebpackDevServer) {
    environment.plugins.append(
      'ReactRefreshWebpackPlugin',
      new ReactRefreshWebpackPlugin({
        overlay: {
          sockPort: devServer.port
        }
      })
    )
  }

  environment.plugins.append(
    'ForkTsCheckerWebpackPlugin',
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../../tsconfig.json')
      },
      async: false
    })
  )
}

module.exports = webpackConfig(developmentOnly)
