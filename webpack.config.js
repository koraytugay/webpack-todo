const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
      favicon: "public/favicon.ico"
    })
  ],
  devServer: {},
  devtool: 'source-map', // without this debug in intellij does not seem to work..
}
