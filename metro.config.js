const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = {
  resolver: {
    // Don't let Metro/Watchman crawl iOS Pods (avoids EMFILE storms)
    blockList: exclusionList([/ios\/Pods\/.*/]),
  },
  watchFolders: [],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
