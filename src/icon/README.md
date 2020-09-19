
# Icon 按钮

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `check`(实心) 和 `check-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

```html
<Icon type="like" size="lg" color="red" />
```

### 基础按钮

`time-o` `search-o` `refresh-o` `close` `check-o` `close-o` `check` `forbidden-o` `forbidden` `info` `info-o` `like-o` `like` `star-o` `star` `arrow_up` `arrow_left` `arrow_down` `arrow_right` `turning_left` `turning_right` `turning_up` `turning_down` `loading` `success` `plus` `cross` `offline` `abnormal` `ellipsis` `notice`

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称（必填）   | String   |
| size    |   图标大小    | xxs、xs、sm、md、lg  | `md` |
| color   | 图标颜色  | Color | 'red' |

## 其他

当前图标采用iconfont图标库资源，更新注意引用。