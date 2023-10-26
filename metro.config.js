const {getDefaultConfig} = require('@expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

// https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md#apollo-client-354-2021-11-19
defaultConfig.resolver.sourceExts.push('cjs')

module.exports = defaultConfig
