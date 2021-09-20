const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  console.log({ baseConfig });
  console.log({ env });
  console.log({ config });
  
  // To get tsconfig baseUrl working
  // There is likely a better way to extract the baseUrl from tsconfig.
  baseConfig.config.resolve.modules.push(path.resolve(__dirname, '../src'));

  // To dramatically increase the build speed.
  let rule = baseConfig.config.module.rules.find(rule => {
    if (rule.use) {
      const { loader } = rule.use[0];
      return loader && loader.includes('ts-loader');
    }
  });
  if (rule && rule.use) {
    rule.use[0].options.transpileOnly = true;
  }
  baseConfig.config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    })
  );
  // return baseConfig.config;
  return baseConfig;
};