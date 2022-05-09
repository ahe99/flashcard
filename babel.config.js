const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            $components: './src/components',
            $helpers: './src/helpers',
            $hooks: './src/hooks',
            $layouts: './src/layouts',
            $utils: './src/utils',
            $config: './src/config',
            $styles: './src/styles',
            $assets: './assets',
            $images: './assets/images',
          },
        },
      ],
    ],
  };
};
