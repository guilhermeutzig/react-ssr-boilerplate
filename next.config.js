module.exports = {
  poweredByHeader: false,
  enableSvg: true,
  exportTrailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|svg|png|jpg|gif|heic)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          useRelativePath: false,
          outputPath: 'assets',
          context: 'assets',
        },
      },
    });
    return config;
  },
};
