
# NavBar 导航栏

一般位于应用内容区的上方，系统状态栏的下方，并且可提供在一系列页面中的导航能力。

当前支持两种模式风格：浅色`light`、深色`dark`。

可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。

避免用过多的元素填满导航栏。一般情况下，一个『返回』按钮、一个『标题』、一个当前视图的『控件』就足够了。

搭配图标和文字控件，可提供更大的点击热区。

<code src="./demos/index.tsx"></code>

## API

所有属性均为可选。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode   | 模式`light`、`dark` | String |  `dark` |
| title   | 标题 | ReactNode |  - |
| children   | 标题（容器模式，与title同时存在优先） | ReactNode |  - |
| icon   | 出现在最左边的图标占位符  | ReactNode |  - |
| leftContent   | 导航左边内容 | any | - |
| rightContent   | 导航右边内容 | any | - |
| onLeftClick   | 导航左边点击回调 | Function | - |
| fixed   | 是否固定在顶部 | Boolean | `false` |
| placeholder   | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | Boolean | `false` |
| zIndex   | 元素 z-index（fixed下有效） | Number | `9` |

## CSS 变量

| 属性               | 说明     | 默认值                    |
| ------------------ | -------- | ------------------------- |
| --height       | 高度 | `45px`   |
| --border-bottom       | 边框 | `none`   |
| --background-color | 背景颜色 | `var(--fam-color-white)`  |