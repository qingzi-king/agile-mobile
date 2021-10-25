<p align="center">
  <img width="300px" src="http://docs.antjob.ink/agile-ui/agile-logo.svg" />
</p>

<p align="center">
🔥🔥🔥 ~ 当前正在改版中，请不要使用，后续会出稳定版本V1 ~ 🔥🔥🔥
</p>

<p align="center">
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/qingzi-king/agile-mobile)
&nbsp;
![GitHub](https://img.shields.io/github/license/qingzi-king/agile-mobile)
&nbsp;
![GitHub](http://img.shields.io/github/stars/qingzi-king/agile-mobile?style=social)
</p>

<p align="center">一个灵活、精巧的react移动端组件库</p>

<p align="center">
🚀 项目正在持续开发中，随时欢迎您加入并提交您首个PR💋。
</p>

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

## 💄 开发环境

包含本地文档及示例展示。

```
yarn start
```

## 🧩 按需加载
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
## 💍 目录结构

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

## 🥷 组件结构
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