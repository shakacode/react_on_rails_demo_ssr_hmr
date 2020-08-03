const webpackConfig = require('./webpackConfig')

const testOnly = () => {
  // place any code here that is for test only
}

module.exports = webpackConfig(testOnly)
