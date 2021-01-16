const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|mp4|mov|svg|webm|pdf|zip)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          }
        ]
      },
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, ".."),
      "node_modules",
    ],
    alias: {
      styles: resolve(__dirname, '../src/styles'),
      pages: resolve(__dirname, '../src/pages'),
      components: resolve(__dirname, '../src/structure/components'),
      icons: resolve(__dirname, '../src/structure/icons'),
      commons: resolve(__dirname, '../src/structure/commons'),
      containers: resolve(__dirname, '../src/structure/containers'),
      public: resolve(__dirname, '../public')
    }
  }
};
