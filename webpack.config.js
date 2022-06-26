const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const root = __dirname
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'dist')
const public = path.resolve(dist, 'public')

module.exports = {
  entry: {
    worker: path.resolve(src, 'worker', 'index.ts'),
    'public/app': path.resolve(src, 'app'),
  },
  output: {
    path: dist,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(src, 'static'), to: public }],
    }),
  ],
}
