const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

// This is the default configuration for Expo Project
const config = getDefaultConfig(__dirname)

// This is the relative path to root node_modules
const projectRootNodeModules = '../../../../node_modules'

const getPathForRootNodeModule = moduleName => {
  return path.resolve(__dirname + `/${projectRootNodeModules}/${moduleName}`)
}

// modules to use in Android & iOS App from root directory
const extraNodeModules = {
  react: getPathForRootNodeModule('react'),
  'react-dom': getPathForRootNodeModule('react-dom')
}

// Reload App if any of the root node_modules changes
const additionalWatchFolders = [
  path.resolve(__dirname + projectRootNodeModules)
]

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false
  }
})

config.resolver.extraNodeModules = extraNodeModules

config.watchFolders = [...config.watchFolders, ...additionalWatchFolders]

module.exports = config
