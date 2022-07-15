// module.exports = function(api) {
//   api.cache(true);
//   const plugins = [
//     [
//       '@babel/plugin-transform-spread',
//       {
//         loose: true
//       }
//     ],
//     [
//       '@babel/plugin-proposal-class-properties',
//       {
//         loose: true
//       }
//     ],
//     '@babel/plugin-transform-runtime'
//   ];
//   return {
//     plugins,
//     presets: ['babel-preset-expo']
//   };
// };

/* eslint-disable func-names */
module.exports = function (api) {
  const presets =  ['module:metro-react-native-babel-preset'];
  const plugins = [
    '@babel/plugin-proposal-export-namespace-from',
    [
      '@babel/plugin-transform-spread',
      {
        loose: true
      }
    ],

    '@babel/plugin-transform-runtime',
    'react-native-reanimated/plugin'
  ];

  /** this is just for minimal working purposes,
   * for testing larger applications it is
   * advisable to cache the transpiled modules in
   * node_modules/.bin/.cache/@babel/register* */
  api.cache(false);

  return {
    presets,
    plugins,
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
