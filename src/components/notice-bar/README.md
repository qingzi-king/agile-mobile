
# NoticeBar 通知栏

一般在导航栏下方用作系统提醒、活动提醒等重要信息提醒。

需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode    | 提示类型，可选 `closable`,`link`   | String |  -  |
| icon    | 在开始位置设置图标  |  ReactNode | `<Icon type="close-o" size="xs" />`|
| onClick | 点击关闭或者操作区域的回调函数        | () => void | -  |
| action | 用于替换操作 icon 的文案 | ReactElement | - |
| multiLine | 是否支持多行显示 | Boolean | `false` |
| animateLoop | 是否允许文本溢出滚动 | Boolean | `false` |
| animateSpeed | 滚动速度`fast`、`normal`、`slow`、number（仅`animateLoop`存在有效） | String或Number | `normal` |

## CSS 变量

| 属性               | 说明     | 默认值                    |
| ------------------ | -------- | ------------------------- |
| --height       | 高度 | `36px`   |
| --fill      | 填充色 | `#FEFCEC`   |
| --color | 颜色 | `#F76A24`  |