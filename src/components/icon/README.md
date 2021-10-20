
# Icon 按钮

<code src="./demos/index.tsx"></code>

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `check`(实心) 和 `check-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

```html
<Icon type="like" size="lg" color="red" />
```

### 基础按钮
`abnormal`、`add`、`arrow_down`、`arrow_left`、`arrow_right`、`arrow_up`、`check`、`check_filled`、`circle`、`close`、`close_filled`、`department`、`ellipsis`、`forbidden`、`forbidden_filled`、`home`、`info`、`info_filled`、`like`、`like_filled`、`loading`、`notice`、`offline`、`page_turning_left`、`person`、`reduce`、`refresh`、`search`、`setting`、`show_less`、`show_more`、`star`、`star_filled`、`success`、`time`

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| color   | 图标颜色  | String | - |
| size    |   图标大小，值：xxs、xs、sm、md、lg | String | `md` |
| type    |   内置 icon 名称（必填） | String | - |

## 其他

注：当前图标采用SVG形式引入，后期会将图标进行独立管理。