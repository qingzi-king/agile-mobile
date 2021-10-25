
# CheckBox 复选框

<code src="./demos/index.tsx"></code>

## API

### CheckBox.Group

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| values |   初始值   | Array(String or Number)  | -  |
| selectedValues |   选中值   | Array(String or Number)  | -  |
| activeColor    |   选中时颜色  | String  | `#268AF0` |
| disabled      |  禁用  | Boolean |  `false`  |
| onChange    | change 事件触发的回调函数 | (e: Object) => void |   -  |

### CheckBox.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| values |   初始值   | Array(String or Number)  | -  |
| selectedValues |   选中值   | Array(String or Number)  | -  |
| checked    |   是否选中，仅List模式有效与value不冲突  | Boolean  | `false` |
| disabled      |  禁用  | Boolean |  `false`  |
| shape      |  形状，可选`round `、`square` | String |  `round`  |
| onChange    | change 事件触发的回调函数 | (e: Object) => void |   -  |