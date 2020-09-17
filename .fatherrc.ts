export default {
  entry: 'src/*',
  extractCSS: true,
  lessInBabelMode: true,
  esm: {
    type: 'babel',
    minify: false,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  }
};