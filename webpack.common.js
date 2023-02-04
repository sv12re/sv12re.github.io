const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      // use ts-loader for ts and js files so all files are converted to es5
      { test: /\.(tsx?|js)$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // required because the defaults for webpack -p don't remove multiline comments
  optimization: {
      minimize: true,
      minimizer: [
          new TerserPlugin({
              terserOptions: {
                  output: {
                      comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
  
};