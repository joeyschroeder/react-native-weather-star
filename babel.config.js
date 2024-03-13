// eslint-disable-next-line no-unused-vars
const moduleResolver = require('babel-plugin-module-resolver');

module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        moduleResolver,
        {
          alias: {
            components: './src/components',
            constants: './src/constants',
            fonts: './src/fonts',
            images: './src/images',
            selectors: './src/selectors',
            services: './src/services',
            store: './src/store',
            thunks: './src/thunks',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
