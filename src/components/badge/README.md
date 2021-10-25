# Badge 微标数

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | String或Number | -
corner | 置于角落（右上角） | Boolean | `false`
dot | 不展示数字，只有一个小红点 | Boolean | `false`
overflowCount | 展示封顶的数字值 | Number | `99`
style | 自定义样式 | Object |  `{}`
