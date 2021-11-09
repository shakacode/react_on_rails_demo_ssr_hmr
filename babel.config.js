module.exports = function (api) {
  const defaultConfigFunc = require('@rails/webpacker/package/babel/preset.js')
  const resultConfig = defaultConfigFunc(api);

  // Example of how to modify the default
  const changesOnDefault = {
    plugins: []
  }

  resultConfig.plugins = [...resultConfig.plugins, ...changesOnDefault.plugins ];

  return resultConfig;
}
