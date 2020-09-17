export default {
  esm: {
    type: 'babel',
    minify: false,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'agile-mobile',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
};