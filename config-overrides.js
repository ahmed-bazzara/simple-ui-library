const { override, addWebpackModuleRule, addBabelPresets, addBabelPlugins } = require('customize-cra')

module.exports = override(
  // addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPresets('@emotion/babel-preset-css-prop', '@babel/preset-env', ['@babel/preset-react', { 'runtime': 'automatic' }]),
  addBabelPlugins(['@babel/plugin-proposal-private-property-in-object', { "loose": true }], ['@babel/plugin-proposal-class-properties', { "loose": true }], ['@babel/plugin-proposal-private-methods', { 'loose': true }]),
  addWebpackModuleRule({ test: /\.svg$/, use: 'svg-inline-loader' }),
)
