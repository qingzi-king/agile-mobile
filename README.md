<!--
 * @Descripttion: 
 * @Author: qingzi.wang
 * @Date: 2020-09-01 10:52:44
 -->
# agile-mobile

富能通移动端组件库（agile mobile） —— 一个灵活、精巧的react移动端组件库

## 📦 安装

```
npm install agile-mobile
```
```
yarn agile-mobile
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

## 目录结构

```
.
├── README.md
├── build                     # 构建后文件
├── config                    # 构建配置
├── libs                      # 组件库
├── package.json
├── public                    # 公共入口
├── scripts                   # 构建启动配置
├── src
│   ├── assets                # 资源目录
│   ├── components            # 公共组件目录
│   ├── index.tsx             # 入口文件
│   ├── pages                 # 页面目录
│   ├── react-app-env.d.ts
│   ├── routes                # 路由目录
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── tsconfig.json
├── agile.config.ts           # 组件配置文件
└── yarn.lock
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