# Card 卡片

一般用于组织信息和操作，通常也作为详细信息的入口。提供更多的是内容的骨架，具体需要根据业务进行补充扩展。

<code src="./demos/index.tsx"></code>

## API

### Card

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| full | 是否通栏 | boolean | `false` |
| className | 自定义样式类 | String | - |
| style | 自定义样式 | Object | - |

### Card.Header

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 卡片标题 | React.Element、String | - |
| extra | 卡片标题辅助内容 | React.Element、String | - |
| className | 自定义样式类 | String | - |
| style | 自定义样式 | Object | - |

### Card.Body

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 自定义样式类 | String | - |
| corner | 多个元素间是否显示缺角 | Boolean | `false` |

### Card.Footer

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| content | 尾部内容 | React.Element、String | - |
| extra | 尾部辅助内容 | React.Element、String | - |
| className | 自定义样式类 | String | - |
| style | 自定义样式 | Object | - |

注：当前卡片功能较单一，后期会有扩展计划。