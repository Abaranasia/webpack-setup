module.exports = {
  mode: 'production',
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
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Basic webpack setup',
      filename: 'index.html',
    }),
  ],
};
