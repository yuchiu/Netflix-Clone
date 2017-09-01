var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.(css|scss|sass)$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        include: path.join(__dirname, 'assets', 'scss')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'assets', 'img')
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot : true,
    stats: 'errors-only'
  },


  
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]

}
