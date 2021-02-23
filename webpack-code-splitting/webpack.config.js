const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      //dependOn: "shared",
    },
    // another: {
    //   import: "./src/another-module.js",
    //   //dependOn: "shared",
    // },
    // shared: "lodash",
  },
  devtool: "inline-source-map", //debug
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), //ko can clean dist khi ctrl + S
    new HtmlWebpackPlugin({
      //auto generate dist/index.html
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // optimization: { //create one instance shared lodash module
  //   runtimeChunk: "single",
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
};
