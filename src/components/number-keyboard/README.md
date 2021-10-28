# NumberKeyboard 数字键盘

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| type | 类型，值：`professional`、`simple` | String | `professional` |
| defaultValues | 默认值 | Array | `[]` |
| disorder | 是否数字乱序 | Boolean | `false` |
| isHideConfirm | 是否确认后关闭键盘 | Boolean | `true` |
| okText | 确认栏文本 | String | - |
| header | 头部标识 | React.ReactNode | - |
| textRender | 自定义键值处理 | (e?: string) => void | - |
| maxLength | 允许最大字符长度（大于0有效） | Number | - |
| maskClosable | 蒙层是否允许关闭 | Boolean | `true` |
| overlay | 是否显示蒙层 | Boolean | `true` |
| onChange | 值变更回调 | (e?: object) => void | - |
| onDelete | 值删除回调 | (e?: object) => void | - |
| onConfirm | 点击确认回调 | (e?: object) => void | - |