// The source code including full typescript support is available at: 
// https://github.com/shakacode/react_on_rails_demo_ssr_hmr/blob/master/config/webpack/development.js

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const { devServer, inliningCss } = require('shakapacker');

const webpackConfig = require('./ServerClientOrBoth');

const developmentEnvOnly = (clientWebpackConfig, _serverWebpackConfig) => {
  // plugins
  if (inliningCss) {
    // Note, when this is run, we're building the server and client bundles in separate processes.
    // Thus, this plugin is not applied to the server bundle.

    // eslint-disable-next-line global-require
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
    clientWebpackConfig.plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: {
          sockPort: devServer.port,
        },
      }),
    );
  }

  clientWebpackConfig.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../../tsconfig.json')
      },
      async: false
    })
  )
};

module.exports = webpackConfig(developmentEnvOnly);
