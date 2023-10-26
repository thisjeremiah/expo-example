const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['nativewind'],
      },
    },
    argv,
  )

  config.module.rules.push({
    test: /\.css$/i,
    use: ['postcss-loader'],
  })

  // Fix production error
  // https://github.com/webpack/webpack/issues/5429#issuecomment-463213127
  if (config.mode === 'production') {
    config.optimization.concatenateModules = false
    config.optimization.providedExports = false
    config.optimization.usedExports = false
  }

  // Use the React refresh plugin in development mode
  if (env.mode === 'development') {
    config.plugins.push(new ReactRefreshWebpackPlugin())
  }

  return config
}
