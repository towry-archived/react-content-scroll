var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './test/index'
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    inline: true
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules\//
    }, {
      test: /\.css$/, 
      loaders: ['style', 'css'],
    }]
  }
}
