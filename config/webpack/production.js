// Below code should get refactored but the current way that rails/webpacker v5
// does the globals, it's tricky
const environment = require('./environment')
const webpackConfig = require('./webpackConfig')

const productionOnly = () => {
  // place any code here that is for production only
}

module.exports = webpackConfig(productionOnly)
