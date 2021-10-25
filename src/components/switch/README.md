
# Switch 滑动开关

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| style | 标签自定义样式 | React.CSSProperties | {} |
| checked | 是否选中 | Boolean | `false` |
| loading | 是否加载中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| checkedText | 选中状态文本 | String | - |
| uncheckedText | 未选中状态文本 | String | - |
| checkedColor | 选中状态文本颜色（文本需存在） | String | `#FFF` |
| uncheckedColor | 未选中状态文本颜色（文本需存在） | String | `#CCC` |
| checkedBackGround | 选中状态背景颜色 | String | `#FFF` |
| uncheckedBackGround | 未选中状态背景颜色 | String | `#FFF` |
| onChange | 状态切换回调 | (e?: object) => void | - |
| onClick | 点击回调 | (e?: object) => void | - |