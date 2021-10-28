# Popup 模态框

支持 `top` `bottom` `left` `right` 四个方向和多层的弹出层。

<code src="./demos/index.tsx"></code>

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| visible    |   是否显示   | Boolean   | `true` |
| position    |   弹出方位 top、bottom、left、right | String  | `bottom` |
| className   | 扩展样式类  | String | - |
| style   | 扩展样式  | String | - |
| maskClosable   | 蒙层是否允许关闭  | Boolean | `true` |
| closable   | 是否显示关闭图标  | Boolean | `false` |
| transparent   | 蒙层是否透明  | Boolean | `false` |
| overlay   | 是否显示蒙层  | Boolean | `true` |
| radius   | 是否显示对应方向圆角 | Boolean 或 Number | `false` |
| children   | 内容节点  | React.Element | - |
| onClose   | 点击 x 或 mask 回调  | () => void | - |