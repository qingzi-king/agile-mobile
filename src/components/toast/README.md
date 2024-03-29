# Toast 轻提示

一种轻量级反馈/提示，在页面弹出黑色半透明提示，可以用来显示不会打断用户操作的内容，适合消息通知、加载提示、操作交互等场景中。

建议一次只显示一个 Toast，有 Icon 的 Toast，字数为 5 个左右；没有 Icon 的 Toast，字数不宜超过 14 个。

<code src="./demos/index.tsx"></code>

## API

组件提供了五个静态方法，参数如下：

- `Toast.info({ content, duration, onClose, position })`

- `Toast.success({ content, duration, onClose, position, icon })`

- `Toast.fail({ content, duration, onClose, position, icon })`

- `Toast.loading({ content, duration, onClose, position, icon })`

- `Toast.offline({ content, duration, onClose, position, icon })`

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| content    | 提示内容 | React.Element or String    | - |
| duration   | 自动关闭的延时，单位毫秒 | number | `2000` |
| onClose    | 关闭后回调 |  () => void | - |
| mask    | 是否显示蒙层 |  Boolean | `false` |
| position    | 消息显示的位置，`center` `top` `bottom` |  String  | `center` |
| icon    | 图标，`info`模式除外 |  React.Element  | - |

> **注：**  duration = 0 时，toast 不会消失；隐藏 toast 需要手动调用 hide方法。`loading`方法下自动添加`mask`。

还提供了全局配置和全局销毁方法：

- `Toast.config({ duration, position })`

- `Toast.hide()`

## 其他

当存在多个事件交叉存在时，后一个事件行为会优先呈现，旧事件行为会被注销。