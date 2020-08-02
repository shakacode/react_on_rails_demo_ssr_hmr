process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { devServer } = require('@rails/webpacker')

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

module.exports = environment.toWebpackConfig()
