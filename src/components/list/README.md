# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表、数据属性展示等。

<code src="./demos/index.tsx"></code>

## API

### List

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| renderHeader       | list heder  | () => void |  -  |
| renderFooter       | list footer  | () => void |  -  |

### List.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| thumb | 缩略图(当为 string 类型时作为 `Icon` 的type) | String或React.Element | - |
| extra | 右侧值内容 | String或React.Element | - |
| describe | 下边描述内容 | String或React.Element | - |
| arrow | 箭头方向(右,上,下)，为空时则不显示，可选`horizontal`、`up`、`down` | String | - |
| onClick | 点击事件的回调函数 | () => void | - |

<!-- | wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  | -->