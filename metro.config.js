const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@src': path.resolve(__dirname, '/template/src'),
      '@assets': path.resolve(__dirname, '/template/src/assets'),
      '@components': path.resolve(__dirname, '/template/src/components'),
      '@fixtures': path.resolve(__dirname, '/template/src/fixtures'),
      '@hooks': path.resolve(__dirname, '/template/src/hooks'),
      '@navigation': path.resolve(__dirname, '/template/src/navigation'),
      '@reusable': path.resolve(__dirname, '/template/src/components/reusable'),
      '@screens': path.resolve(__dirname, '/template/src/screens'),
      '@services': path.resolve(__dirname, '/template/src/services'),
      '@store': path.resolve(__dirname, '/template/src/store'),
      '@appTypes': path.resolve(__dirname, '/template/src/types'),
      '@utils': path.resolve(__dirname, '/template/src/utils'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
