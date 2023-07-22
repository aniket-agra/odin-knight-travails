const path = require('path');

module.exports = {
  mode : "development",
  entry: './src/index.js',
  devtool : "inline-source-map",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module : {
    rules : [
      {
        test : /\.(svg|jpeg)$/i,
        type : 'asset/resource'
      }, 
      {
        test : /\.(css)$/i,
        use : ['style-loader', 'css-loader']
      }
    ]
  }
};