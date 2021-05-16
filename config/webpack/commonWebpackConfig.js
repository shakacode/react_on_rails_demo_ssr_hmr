// Common configuration applying to client and server configuration

const {
  webpackConfig: baseClientWebpackConfig,
  merge
} = require('@rails/webpacker')

const imageLoaderRule = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: require.resolve('url-loader'),
    options: {
      // Interop assets like Metro bundler
      esModule: false,
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }
}

const aliases = {
  'react-native$': 'react-native-web',
  // Alias internal react-native modules to react-native-web
  'react-native/Libraries/Components/View/ViewStylePropTypes$':
    'react-native-web/dist/exports/View/ViewStylePropTypes',
  'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
    'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
  'react-native/Libraries/vendor/emitter/EventEmitter$':
    'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
  'react-native/Libraries/vendor/emitter/EventSubscriptionVendor$':
    'react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor',
  'react-native/Libraries/EventEmitter/NativeEventEmitter$':
    'react-native-web/dist/vendor/react-native/NativeEventEmitter'
}

// Check if the installed version of react-native-web still supports NetInfo.
aliases['@react-native-community/netinfo'] =
  'react-native-web/dist/exports/NetInfo'

// Add polyfills for modules that react-native-web doesn't support
// Depends on expo-asset
aliases['react-native/Libraries/Image/AssetSourceResolver$'] =
  'expo-asset/build/AssetSourceResolver.web.js'
aliases['react-native/Libraries/Image/assetPathUtils$'] =
  'expo-asset/build/Image/assetPathUtils.web.js'
aliases['react-native/Libraries/Image/resolveAssetSource$'] =
  'expo-asset/build/resolveAssetSource.web.js'
aliases['react-native/Libraries/Image/AssetRegistry$'] =
  'expo-asset/build/AssetRegistry.web.js'
const commonOptions = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx'],
    alias: aliases
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      imageLoaderRule
    ]
  }
}

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
const commonWebpackConfig = () =>
  merge({}, baseClientWebpackConfig, commonOptions)

module.exports = commonWebpackConfig
