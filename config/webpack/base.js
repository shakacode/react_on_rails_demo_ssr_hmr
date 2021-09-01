const { webpackConfig, merge } = require('@shakacode/webpacker')
const customConfig = require('./webpackConfig')

module.exports = merge(webpackConfig, customConfig)