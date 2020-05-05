const path = require('path')
const nodeExternals = require('webpack-node-externals')
console.log(nodeExternals())
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  // webpack可以不处理应用的某些依赖库
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react', ['@babel/preset-env']]
      }
    }]
  }
}
