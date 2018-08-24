module.exports = {
  entry: {
    client: './app/client.js',
  },

  output: {
    path: __dirname + '/dist',
  },

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
