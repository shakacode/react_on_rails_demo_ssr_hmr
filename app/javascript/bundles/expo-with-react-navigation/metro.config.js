const path = require('path')

const extraNodeModules = {
  react: path.resolve(__dirname + '/../../../../node_modules/react'),
  'react-dom': path.resolve(__dirname + '/../../../../node_modules/react-dom')
}
const watchFolders = [path.resolve(__dirname + '/../../../../node_modules')]

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    extraNodeModules
  },
  watchFolders
}
