
# Skeleton 骨架屏

一般用于数据尚未渲染前先展示出页面的大致结构的一种加载状态

## 代码示例

### 基本
```tsx
<Skeleton row={2} title />
```

### 圆角
```tsx
<Skeleton row={3} avatar title round />
```

### 多实例
```tsx
<Skeleton row={3} avatar title loops={2} />
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 样式类  | String |  - |
| style | 自定义样式  | React.CSSProperties  | -  |
| loading | 是否加载状态， `false`则不渲染   | Boolean  | `true`  |
| animate |   是否显示加载动画  | Boolean  | `true` |
| avatar  |  是否显示头像  | Boolean |  `false`  |
| avatarSize  |  头像大小（px） | Number |  `32`  |
| avatarShape |  头像形状，值：`round`、`square` | String |  `round`  |
| title |  是否显示标题 | Boolean |  `false`  |
| titleWidth  |  内容行数宽度 | String or Number |  `40%`  |
| row |  内容行数 | Number |  `0`  |
| rowWidth  |  内容行数宽度 | String or Number |  `100%`  |
| loops | 实例循环次数 | Number | `1` |
| round | 是否将标题和段落显示为圆角风格 | Boolean | `false` |

### 其他

当`loops`大于`1`时，默认`margin-top`为`30`，可通过`style`进行覆盖。