# Quick Start

## Installation

```bash
$ npm install agile-mobile
# or
$ yarn add agile-mobile
```

<Alert> During the beta phase we may release break changes in subsequent releases, so it is highly recommended to lock the version of agile-mobile with lockfiles or manually.</Alert>

## Import

Just import the component directly and agile-mobile will automatically load css style files:

```js
import { Button } from 'agile-mobile';

const App = () => (
  <>
    <Button type="primary">Hello Agile！</Button>
  </>
);
```

## Demand loading
`babel-plugin-import` is an on-demand babel plug-in, create `.babelrc` or use `package.json` Configure as follows:
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
## Contribution

### Open document service

```bash

# 启动
$ npm run start
# or
$ yarn start

# 构建

$ yarn build:doc

```

At the same time, you need to configure the corresponding document in config，for detailed configuration, please refer to [dumi manual](https://d.umijs.org/zh-CN/config)。


## Add new component

When adding a new component, please organize the files according to the following directory structure and configure the component information in index.ts.

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

```
export { default as Button } from './components/button'
```

## Style

CSS 命名采用 BEM 的风格，默认一套主题色（可自行设置）。

 - 所有自带样式以前缀 fam- 开头。
 - 一律小写
 - 尽量用英文
 - 尽量不缩写，除非一看就明白的单词
 - 样式变量-示例

Style variables - Examples

```
--fam-color-primary: #268AF0;
--fam-color-success: #6FC643;
--fam-color-warning: #F59A23;
--fam-color-danger: #FF3141;
--fam-color-dark: #555;
--fam-color-important: #FF5B05;
--fam-color-gray: #DCDEE0;
--fam-color-white: #FFF;
--fam-color-text: #333;
```