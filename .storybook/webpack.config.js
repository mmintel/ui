const path = require("path");
const rootPath = path.resolve(__dirname, '../');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader'
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/styles/abstracts/**/*.scss',
            'assets/styles/globals/config.scss',
            'assets/styles/globals/reset.scss',
            'assets/styles/globals/base.scss',
            'assets/styles/globals/helpers.scss',
            'assets/styles/globals/tooltip.scss',
            'assets/styles/globals/notification.scss',
          ]
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.vue');

  config.resolve.alias = {
    ...config.resolve.alias,
    '~': rootPath,
    '@': rootPath,
  }

  return config;
};