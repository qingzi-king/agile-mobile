---
title: Agile Mobile UI - 富能通科技
hero:
  image: http://docs.antjob.ink/agile-ui/agile-logo.svg
  title: Agile Mobile UI
  desc: v1 beta (Funenc CQ R&D Team)
  actions:
    - text: 快速上手
      link: /zh/guide/quick-start
    - text: 组件列表
      link: /zh/components
footer: Open-source MIT Licensed | Copyright © 2020-present funenc.com<br />Powered by [funenc](http://funenc.com/)
---

🔥🔥🔥 ~ It is currently being revised. Please do not use it，stable version V1 on the way ~ 🔥🔥🔥

一个灵活、精巧的react移动端组件库

🚀 项目正在持续开发中，随时欢迎您加入并提交您首个PR💋。

![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/qingzi-king/agile-mobile)
&nbsp;
![GitHub](https://img.shields.io/github/license/qingzi-king/agile-mobile)
&nbsp;
![GitHub](http://img.shields.io/github/stars/qingzi-king/agile-mobile?style=social)

## 📦 Installation

```
npm install agile-mobile
```
```
yarn add agile-mobile
```

## 🔨 Use

```
import { Button } from 'agile-mobile';

const App = () => (
  <>
    <Button color="primary">Hello Agile！</Button>
  </>
);
```

## 💄 Develp

包含本地文档及示例展示。

```
yarn start
```

## 🧩 Loader
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

## 💍 Directory Structure

```
.
├── LICENSE
├── README.md
├── babel-transform-less-to-css.js  # babel插件（将.less替换为.css）
├── config                          # 文档配置（基于dumi）
│   ├── components.ts
│   └── config.ts
├── docs                            # 文档配置
├── dist                            # 文档构建后目录
├── gulpfile.js                     # 组件打包配置（基于gulp）
├── jest.config.js                  # 测试配置（基于jest）
├── lib                             # 组件打包后的目录
├── package.json
├── src                             # 源文件
│   ├── assets                      # 资源目录
│   ├── components                  # 组件目录
│   │   ├── button
│   │   ├── elastic-box
│   │   └── ...
│   ├── demos
│   ├── global                      # 全局配置
│   │   ├── global.less
│   │   ├── index.ts
│   │   └── theme.less              # 全局主题配置
│   ├── index.ts                    # 组件库入口
│   ├── tests                       # 测试入口
│   ├── typings                     # 辅助ts配置
│   └── utils                       # 工具
├── tsconfig.json
└── yarn.lock
```

## 🥷 Component structure
```
.
├── src
│   ├── components
│   │   ├── button
│   │   │   ├── README.md           # 说明（可中英文区分README.es.md、README.zh.md）
│   │   │   ├── button.tsx          # 组件主体
│   │   │   ├── PropsType.tsx       # 类型定义（定义在组件内则可选）
│   │   │   ├── demos               # 示例
│   │   │   │   └── index.tsx
│   │   │   ├── index.ts            # 入口
│   │   │   ├── styles              # 样式
│   │   │   │   └── button.less
│   │   │   └── tests               # 测试
│   |   │   │   └── button.test.tsx
```

## License
Agile Mobile UI is MIT licensed, as found in the [LICENSE](https://github.com/qingzi-king/agile-mobile/blob/master/LICENSE) file.
