# 风格指南

[React风格指南](http://rsk.book.jasperxu.com/ReactStyleGuide.html)

## 📦 安装

```
npm install agile-mobile
```
```
yarn add agile-mobile
```

## 🔨 使用

```
import { Button } from 'agile-mobile';

const App = () => (
  <>
    <Button type="primary">Hello Agile！</Button>
  </>
);
```

## 按需加载
`babel-plugin-import`是一个用于按需加载组件代码和样式的 babel 插件。新建`.babelrc`或直接在`package.json`中引入如下配置。
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

## 添加新组件
添加新组件时，请按照下面的目录结构组织文件，并在 `agile.config.ts` 中配置组件信息。

```
src
│   ├── button
│   │   ├── index.tsx         # 组件入口
│   │   ├── PropsType.tsx     # 类型定义
│   │   ├── demo              # 组件示例
│   │   ├── style             # 组件样式
│   │   ├── test              # 单元测试
│   │   ├── README.md         # 中文文档
│   │   ├── README.en-US.md   # 英文文档
```

## 样式

CSS 命名采用 BEM 的风格，默认一套主题色（可自行设置）。

- 所有自带样式以前缀 `fam-` 开头。
- 一律小写
- 尽量用英文
- 尽量不缩写，除非一看就明白的单词

样式变量-示例

```
@color-text-base: #000;            // 基本
@color-text-base-inverse: #fff;    // 基本 - 反色
@color-text-secondary: #a4a9b0;    // 辅助色
@color-text-placeholder: #bbb;     // 文本框提示
@color-text-disabled: #bbb;        // 失效
@color-text-caption: #888;         // 辅助描述
@color-text-paragraph: #333;       // 段落
@color-link: @brand-primary;       // 链接
```