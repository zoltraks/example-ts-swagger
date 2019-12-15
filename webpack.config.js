const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/service/express.ts',
  devtool: 'inline-source-map',
  externals: {
    'express': 'commonjs express'
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
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
};
