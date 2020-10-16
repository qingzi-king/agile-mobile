export default {
  entry: 'src/*',
  extractCSS: true,
  lessInBabelMode: true,
  // runtimeHelpers: true, // 是否把 helper 方法提取到 @babel/runtime 里（一定要在 dependencies 里有 @babel/runtime 依赖）
  esm: {
    type: 'babel',
    minify: false,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  }
};