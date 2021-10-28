# PasswordInput 密码输入

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| defaultValues | 默认值 | Array | `[]` |
| okText | 确认栏文本 | String | - |
| disorder | 是否数字乱序 | Boolean | `false` |
| mask | 是否隐藏密码内容 | Boolean | `true` |
| underline | 下划线形式格子 | Boolean | `false` |
| autoClose | 是否字符数达到最大数后自动关闭键盘 | Boolean | `true` |
| gutter | 输入框格子之间的间距 | Number或String | `0` |
| maxLength | 允许最大字符长度（大于0有效） | Number | - |
| isHideConfirm | 是否确认后关闭键盘 | Boolean | `true` |
| header | 头部标识 | React.ReactNode | - |
| textRender | 自定义键值处理 | (e?: string) => void | - |
| maskClosable | 蒙层是否允许关闭 | Boolean | `true` |
| overlay | 是否显示蒙层 | Boolean | `true` |
| onChange | 值变更回调 | (e?: object) => void | - |

### 其他

其实`PasswordInput`继承了`Popup`组件的所有定义，若有重复定义会被覆盖。