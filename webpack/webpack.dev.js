const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development')
    })
  ]
}