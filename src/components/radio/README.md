
# Radio 单选框

<code src="./demos/index.tsx"></code>

## API

### Radio.Group

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| value |   初始值   | String or Number  | -  |
| direction | 方向，可选值：`horizontal`、`vertical`   | String  | `horizontal`  |
| activeColor    |   选中时颜色  | String  | `#268AF0` |
| disabled      |  禁用  | Boolean |  `false`  |
| onChange    | change 事件触发的回调函数 | (e: Object): void |   -  |

### Radio.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| value |   定义值   | String or Number  | -  |
| checked    |   是否选中，仅List模式有效与value不冲突  | Boolean  | `false` |
| disabled      |  禁用  | Boolean |  `false`  |
| shape      |  形状，可选`round `、`square` | String |  `round`  |
| onChange    | change 事件触发的回调函数 | (e: Object): void |   -  |