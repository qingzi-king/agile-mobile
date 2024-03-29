# Dialog 弹窗

弹出弹窗，常用作显示系统的重要信息（eg：消息提示、消息确认）或在当前页面内完成特定的交互操作。

## 规则
- 尽可能少用。Dialog 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

<code src="./demos/index.tsx"></code>

## API

### Dialog.alert
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | 	标题  |   String 或 React.Element   |   -  |
| message    | 	提示信息（必填）  |   String 或 React.Element   |   -  |
| actions    | 按钮组`{text, onPress, color}` | Array | -|
| className |  样式类名 | String | - |
| transparent |  蒙层透明度 | Boolean |  `false` |
| animation |  是否显示动画 | Boolean |  `true` |
| maskClosable |  蒙层是否支持关闭 | Boolean | `true` |
| direction |  按钮组方向`horizontal` `vertical` | String | `horizontal` |

### Dialog.operation
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| actions    | 按钮组`{text, onPress, color}`（必填） | Array | -|
| className |  样式类名 | String | - |
| transparent |  蒙层透明度 | Boolean | `false` |
| animation |  是否显示动画 | Boolean |  `true` |
| maskClosable |  蒙层是否支持关闭 | Boolean | `true` |
| direction |  按钮组方向`horizontal` `vertical` | String | `vertical` |

### action
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| text    | 文本（必填） | String 或 React.Element | - |
| onPress |  回调 | () => void | - |
| color |  文字颜色 | String | `#000` |
| disabled |  是否禁用 | Boolean | `false` |