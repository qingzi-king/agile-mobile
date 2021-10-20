# CSS Variables

Compared to the crude CSS style override, CSS Variables allow us to customize the style of the component more elegantly.

> The premise of this article is that you have some basic understanding of [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

In the "CSS Variables" table of the component document, you can check which CSS variables are exposed by each component. Of course, you can also find it directly in the ts definition of the component.

## Current CSS Variables
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

Taking the Button component as an example, we can find a table similar to the following on its documentation:

| Name        | Description | Default          |
| ----------- | ----------- | ---------------- |
| --font-size | font size   | 17px             |
| --color     | font color  | --fam-color-text |

This means that it supports the `--font-size` and `--color` variables.

Next, we need to set the value of the CSS variable. There are two ways:

## Method 1: Set in the CSS file

Add a custom `className` to the Button component:

```jsx
<Button className='funenc-button'/>
```

Then set CSS Variables in the CSS file

```css
.funenc-button {
  --font-size: 18px;
}
```

## Method 2: Set directly through the style attribute

Directly through the `style` property of the component, it is simple and rude, suitable for small-scale adjustments:

```jsx
<Button style={{ '--font-size': '32px' }}/>
```
