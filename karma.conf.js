// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'test/specs.webpack.js', watched: true },
      { pattern: 'src/scripts/**/*.js', watched: true },
      { pattern: './node_modules/babel-polyfill/browser.js', watched: false }
    ],

    exclude: [],

    preprocessors: {
      'test/specs.webpack.js': ['webpack', 'sourcemap'],
      'src/scripts/index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      watch: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']// 'babel-loader',
            //   query: {
            //     cacheDirectory: true,
            //     presets: ['es2015', 'react', 'stage-1']
            // }
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      // require('karma-chrome-launcher'),
      require('karma-sourcemap-loader')
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    singleRun: false
  })
}
