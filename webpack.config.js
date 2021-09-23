const path = require("path");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "source-map",
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "umd",
    // libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json",
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          query: {
            presets: ["@babel/react", "@babel/es2015"],
            plugins: ["@babel/proposal-class-properties"],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      ["app/components"]: srcPath("app/components"),
      ["app/constants"]: srcPath("app/constants"),
      utilities: srcPath("utilities"),
    },
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".scss",
      ".js",
      ".json",
      ".png",
      ".gif",
      ".jpg",
      ".svg",
    ],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
};
