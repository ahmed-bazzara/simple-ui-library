const path = require("path");
function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["svg"],
        },
      },
    },
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [require.resolve("@emotion/babel-preset-css-prop")],
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["svg-inline-loader"],
    });

    config.resolve.alias = {
      utilities: path.join(__dirname, "..", "src", "utilities"),
      ["app/constants"]: path.join(__dirname, "..", "src", "app", "constants"),
      ["app/components"]: path.join(
        __dirname,
        "..",
        "src",
        "app",
        "components"
      ),
    };

    // path.join(__dirname, '..', 'test', 'karma.conf.js')

    return config;
  },
};
