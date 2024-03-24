const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      model: path.resolve(__dirname, 'src/model/'),
      services: path.resolve(__dirname, 'src/definitions/services/')
    }
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 500 * 1024,
    maxEntrypointSize: 500 * 1024
  },
  devtool: 'source-map'
}
