const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js','./src/index.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Bundle name
    filename: 'mark-down-component.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use:['style-loader','css-loader']
     }
    ]
  }
};

