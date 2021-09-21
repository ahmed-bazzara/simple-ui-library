const { override, addBabelPreset, addWebpackModuleRule } = require('customize-cra')

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addWebpackModuleRule({ test: /\.svg$/, use: 'svg-inline-loader' }),
)
