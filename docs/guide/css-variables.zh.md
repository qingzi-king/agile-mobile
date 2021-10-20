# CSS 变量

相比于直接覆盖 CSS 样式，CSS 变量可以让我们更加优雅的调整组件的样式。

> 本文的前提是你已经对 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)有一些基础的了解

在组件文档的 "CSS 变量" 表格中，你可以查阅到每个组件暴露了都哪些 CSS 变量，当然你也可以直接在组件的 ts 定义中找到。

## 当前存在的变量
```less
// 主题色
--fam-color-primary: #268AF0;
--fam-color-success: #6FC643;
--fam-color-warning: #F59A23;
--fam-color-danger: #FF3141;
--fam-color-dark: #555;
--fam-color-important: #FF5B05;
--fam-color-gray: #DCDEE0;
--fam-color-white: #FFF;
--fam-color-text: #333;

// 字号
--fam-font-size: 14px;

// 圆角
--fam-radius: 2px;
```

以 Button 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性        | 说明     | 默认值           |
| ----------- | -------- | ---------------- |
| --font-size | 字号     | 14px             |
| --color     | 文字颜色 | --fam-color-text |

这表示了它支持了 `--font-size` 和 `--color` 变量。

接下来，我们需要设置 CSS 变量的值，有两种方法：

## 方法一：在 CSS 文件中设置

给 Button 组件加一个自定义的 `className`：

```jsx
<Button className='funenc-button'/>
```

然后在 CSS 文件中设置 CSS 变量

```css
.funenc-button {
  --font-size: 18px;
}
```

## 方法二：直接通过 style 属性设置

直接通过组件的 `style` 属性，简单粗暴，适合小范围的调整：

```jsx
<Button style={{ '--font-size': '32px' }}/>
```
