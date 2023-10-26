module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      [
        'module-resolver',
        {
          // absolute imports
          alias: {
            components: './components',
            api: './api',
            utils: './utils',
            hooks: './hooks',
            constants: './constants',
          },
        },
      ],
    ],
  }
}
