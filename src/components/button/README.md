
# Button 按钮

<code src="./demos/index.tsx"></code>

## 基础按钮

通过 `type` 设置方按钮类型，可选值有 `default` `danger ` `primary ` `success ` `warning ` `dark` 默认可不填。

可通过 `inline` 设置行内元素，不设置为块元素。

## 代码示例
```html
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="default">Default</Button>
<Button type="dark">Dark</Button>
<Button type="primary" fill="none">Link</Button>
```

### 尺寸

通过 `size` 设置方按钮类型，可选值有 `large` `default ` `small ` 默认可不填。
```html
<Button type="primary" size="large">Primary Large</Button>
<Button type="primary" size="default">Primary Default</Button>
<Button type="primary" size="small">Primary Small</Button>
```

### 边框
通过 `fill` 设置为 `outline`。

```html
<Button type="primary" fill="outline">Primary</Button>
<Button type="success" fill="outline">Success</Button>
```

### 禁用

```html
<Button type="primary" disabled>Primary Disabled</Button>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className |  样式类名 | string | - |
| dashed     | `hairline`存在时，边框是否虚线  | boolean | `false` |
| disabled   | 设置禁用  | boolean | `false`  |
| fill     | 填充类型，可选值为`solid`、`outline`、`none`  | string | `solid` |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void | - |
| type    | 按钮类型，可选值为`default`、`danger`、`primary`、`success`、`warning`、`dark`或者不设  | string | - |
| size    | 按钮大小，可选值为`default`、`large`、`small` | string | `default`|
| style    | 自定义样式 |   Object  | - |

## CSS 变量

| 属性               | 说明     | 默认值                    |
| ------------------ | -------- | ------------------------- |
| --color       | 基础色，用于提供给`color`、`border-color`、`background-color` | `var(--fam-color-white)`   |
| --text-color       | 文字颜色 | `var(--fam-color-dark)`   |
| --background-color | 背景颜色 | `var(--fam-color-white)`  |
| --border-radius    | 圆角大小 | `3px`                     |
| --border-width     | 边框宽度 | `1px`                     |
| --border-style     | 边框样式 | `solid`                   |
| --border-color     | 边框颜色 | `var(--fam-border-color-base)` |
