
# Search 搜索栏

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 样式类  | String |  - |
| style | 自定义样式  | React.CSSProperties  | -  |
| disabled | 是否不可用 | Boolean | `false` |
| autoFocus | 是否自动聚焦 | Boolean | `false` |
| maxLength | 最多允许输入的字符个数 | Number | - |
| showCancelButton | 是否一直显示`取消`按钮 | Boolean | `false` |
| defaultValue | 赋值默认值 | String or Number | - |
| value | 外部输入值 | String or Number | - |
| placeholder | 输入框提示文本 | String | `请输入搜索关键词` |
| cancelText | `取消`按钮的文本 | String | `取消` |
| cancelColor | `取消`按钮的文本颜色 | String | `#268AF0` |
| onChange  |  值变化回调 | (e?:any) => void |  -  |
| onBlur  |  失去焦点回调 | (e?:any) => void |  -  |
| onFocus  |  获取焦点回调 | (e?:any) => void |  -  |
| onCancel  |  取消按钮的回调 | (e?:any) => void |  -  |

## CSS 变量

| 属性               | 说明     | 默认值                    |
| ------------------ | -------- | ------------------------- |
| --height       | 高度 | `30px`   |