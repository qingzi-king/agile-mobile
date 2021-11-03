# 快速开始

## 安装

```bash
$ npm install agile-mobile
# or
$ yarn add agile-mobile
```

<Alert> 当前处于测试阶段，更新会比较频繁，因此强烈建议使用 lockfiles 或手动锁定 agile mobile 的版本。</Alert>

## 导入

只需直接导入组件，agile mobile就会自动加载 css 样式的文件。

```js
import { Button } from 'agile-mobile';

const App = () => (
  <>
    <Button color="primary">Hello Agile！</Button>
  </>
);
```

## 按需加载
`babel-plugin-import` 是一个按需加载的 babel 插件, 创建 `.babelrc` 或使用 `package.json` 进行如下配置:
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

## 参与贡献

### 开启文档服务

```bash

# 启动
$ npm run start
# or
$ yarn start

# 构建

$ yarn build:doc

```

同时需要再 config 中进行相应的文档配置，详细配置请参考[dumi文档手册](https://d.umijs.org/zh-CN/config)。

### 添加新组件

添加新组件时，请按照下面的目录结构组织文件，并在 index.ts 中配置组件信息。

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

### 样式

CSS 命名采用 BEM 的风格，默认一套主题色（可自行设置）。

 - 所有自带样式以前缀 fam- 开头。
 - 一律小写
 - 尽量用英文
 - 尽量不缩写，除非一看就明白的单词
 - 样式变量-示例

样式变量-示例

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