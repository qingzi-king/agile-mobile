# Collapse 折叠面板

可以折叠/展开的内容区域。

## 使用建议
- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。

<code src="./demos/index.tsx"></code>

## API

### Collapse

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKeys | 当前激活面板的 | Array | `[]` |
| accordion | 是否为`手风琴`模式 | Boolean | `false`  |
| onChange | 切换面板的回调 | (keys: string): void |  -  |

### Collapse.Panel

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key  | 对应 activeKeys | String | - |
| title | 标题 | React.Element or String | - |
| extra | 右侧值 | React.Element or String | - |
| disabled | 是否禁用面板 | Boolean | `false` |
| showArrow | 是否显示右侧图标 | Boolean | `false` |

注意: 如果嵌套使用则会自动平铺显示，但其作用域是各自独立的（不建议当作树形结构展示）。