const path = require('path');

const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpack({
        template: './src/index.html',
        title: 'Webpack Tutorial',
        filename: 'index.html',
        inject: 'body',
      }),
  ],
};