const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './app/server.js',
  },

  output: {
    path: __dirname + '/dist',
  },

  target: 'node',

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  stats: {
    hash: false,
    version: false,
    timings: false,
    entrypoints: false,
    children: false,
    errorDetails: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  },
};
