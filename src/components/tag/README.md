# Tag 标签

进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。标签内容必须显示完全（不建议定义过长内容）。

<code src="./demos/index.tsx"></code>

## API

以下所有属性均为可选项。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon | 前缀图标 | React.ReactElement | - |
| disabled | 是否不可用 | Boolean | `false` |
| closable | 是否显示关闭按钮 | Boolean | `false` |
| round | 是否大圆角样式 | Boolean | `false` |
| fill | 填充样式，可选`solid`、`outline` | string | `solid` |
| onClose | 点关闭时的回调函数（仅closable存在时有效） | Function | - |
| color | 主题类型`primary`、`success`、`danger`、`warning`、`gray` | String | `primary` |
| size | 标签尺寸`lg`、`md`、`xs` | String | `-` |
| style | 标签自定义样式 | Object | {} |

注：`Tag`与`Button`有些相似的地方，但功能侧重点是不一样的。