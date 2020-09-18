<!--
 * @Descripttion: 
 * @Author: qingzi.wang
 * @Date: 2020-09-01 10:52:44
 -->
# agile-mobile

富能通移动端组件库（agile mobile） —— 一个灵活、精巧的react移动端组件库

[中文文档](http://mobile.agile.antjob.ink/)

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

## 目录结构

```
.
├── CHANGELOG.zh-CN.md        # 变更日志
├── LICENSE
├── README.md
├── build                     # 文档构建目录
├── config                    # 文档构建配置目录
├── package.json
├── public                    # 文档入口
├── scripts                   # 文档构建启动配置
├── src                       # 组件库源文件
├── site                      # 文档内容目录
│   ├── assets                # 文档资源目录
│   ├── components            # 文档公共组件
│   ├── index.tsx
│   ├── pages
│   │   ├── app.tsx           # 文档应用入口组件
│   │   ├── browseIndex.tsx   # 示例预览入口
│   │   ├── change-log        # 变更日志页面
│   │   ├── *
│   ├── react-app-env.d.ts
│   ├── routes                # 文档路由
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── agile.config.ts           # 组件配置文件
├── tsconfig.json
└── yarn.lock
```

## 组件结构
```
.
├── src
│   ├── button
│   │   ├── PropsType.tsx   # 类型定义
│   │   ├── README.md       # 文档
│   │   ├── index.tsx       # 入口
│   │   ├── demo            # 示例
│   │   │   ├── index.tsx
│   │   └── style           # 样式
│   │   │   ├── index.ts
│   │   │   ├── index.less
```

## 示例

![演示](http://docs.antjob.ink/agile-ui/qr-demo.png)

http://mobile.agile.antjob.ink/m/home

<!--
## 其他

```

Markdown转HTML使用了
markdown-it
html-loader
@dking/markdown-webpack-loader

```
-->