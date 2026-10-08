module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-iconify/babel',
      {
        icons: [
          'lucide:search',
          'lucide:sparkles',
          'lucide:x',
          'lucide:arrow-right',
          'circle-flags:gb',
          'circle-flags:in',
          'circle-flags:es',
          'circle-flags:fr',
          'circle-flags:jp',
          'circle-flags:de',
          'circle-flags:kr',
          'circle-flags:pt',
          'circle-flags:it',
          'circle-flags:ae',
          'circle-flags:cn',
          'circle-flags:ru',
        ],
      },
    ],
  ],
};
