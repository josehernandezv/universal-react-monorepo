/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const reactNativePath = require.resolve('react-native');
const reactNativeFolder = `${
  reactNativePath.split('node_modules/react-native/')[0]
}node_modules/react-native/`;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(process.cwd(), `node_modules/${name}`);
        },
      },
    ),
    blacklistRE: new RegExp(
      `^((?!${reactNativeFolder.replace(
        '/',
        '\\/',
      )}).)*\\/node_modules\\/react-native\\/.*$`,
    ),
  },
  watchFolders: [
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, '../../'),
    path.resolve(__dirname, '../../node_modules'),
  ],
};
