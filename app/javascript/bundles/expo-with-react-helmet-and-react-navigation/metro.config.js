const { getDefaultConfig } = require('@expo/metro-config')
const defaultConfig = getDefaultConfig(__dirname)
const path = require('path')


module.exports = {

  getProjectRoots() {
    /**
     * Add our workspace roots so that react native can find the source code for the included packages
     * in the monorepo
     */
    const projectPath = path.resolve(__dirname)
    const rootModulesPath = path.resolve(__dirname, '../../../../node_modules')

    return [projectPath, rootModulesPath]
  }
}
