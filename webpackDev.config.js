
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Sets the build mode

  output: {
    clean: true, // delete all dist files on build creation
  },

  module: {
    rules: [
      {
        // Handle all html files to run them with html-loader
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Basic webpack setup',
      filename: 'index.html',
    }),
    new MiniCssExtract({
      filename: 'style.[fullhash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets/', to: 'assets/' }],
    }),
  ],
};