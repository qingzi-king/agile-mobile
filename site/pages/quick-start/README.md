# 风格指南

[React风格指南](http://rsk.book.jasperxu.com/ReactStyleGuide.html)

## 添加新组件
添加新组件时，请按照下面的目录结构组织文件，并在 `agile.config.ts` 中配置组件信息。

```
lib
└─ button
   ├─ test             # 单元测试
   ├─ demo             # 示例代码
   ├─ index.tsx        # 组件入口
   ├─ index.less       # 组件样式
   ├─ README.md        # 中文文档
   └─ README.en-US.md  # 英文文档
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