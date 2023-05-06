const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    clean: true, // delete all dist files on build creation
    filename: 'main.[contenthash].js',
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
      {
        // Babel basic config
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    // Prod optimizations
    minimize: true,
    minimizer: [new CssMinimizer(), new Terser()],
  },
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
