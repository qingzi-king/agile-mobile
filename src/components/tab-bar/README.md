# TabBar 标签栏

<code src="./demos/index.tsx"></code>

## API

### TabBar

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKey | 当前激活面板的 | String | - |
| selectedColor | 选中状态的颜色 | String | `#268AF0`  |
| barBgColor | 背景颜色 | String | `#FFF`  |
| onClick | 切换面板的回调 | (keys: string): void |  -  |

### TabBar.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key  | 对应 activeKey | String | - |
| title | 标题 | React.Element or String | - |
| icon | 图标 | React.Element or String | - |
| badge | 微标信息 | Number or String | - |
| dot | 图标 | Boolean | `false` |