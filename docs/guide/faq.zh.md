# FAQ
## 1、按需加载
如果开发项目无法进行按需加载，`babel-plugin-import`是一个用于按需加载组件代码和样式的 babel 插件。新建`.babelrc`或直接在`package.json`中引入如下配置。
```
{
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "agile-mobile",
        "libraryDirectory": "es",
        "style": true
      },
      "agile-mobile"
    ]
  ]
}
```