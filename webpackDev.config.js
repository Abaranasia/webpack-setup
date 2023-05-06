
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
        // To handle all html files to run them with html-loader
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        // To handle local css styles first
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // To handle global css styles
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        // To handle asset type files (jpg, png & gif by pattern)
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebPackPlugin({
      // HTNL handling
      title: 'Basic webpack setup',
      filename: 'index.html',
    }),
    new MiniCssExtract({
      // Global css styles
      filename: 'style.[fullhash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      // File handling
      patterns: [{ from: 'src/assets/', to: 'assets/' }],
    }),
  ],
};