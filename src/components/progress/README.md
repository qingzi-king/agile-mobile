# Progress 进度条

进度条一般用于表明某个任务的当前进度。

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
percent | 进度百分比（%） | Number | `0`
unfilled | 是否显示未填充的轨道 | Boolean | `true`
textColor | 文字颜色 | String | `#000`
sliderColor | 进度条颜色 | String | `#268AF0`
inactive | 是否未激活 | Boolean | `true`
info | 是否显示进度文本 | Boolean | `false`
sliderWidth | 进度条宽度（px） | Number | `2`
style | 进度条样式 | Object | `{}`
barStyle | 进度样式 | Object | `{}`

`textColor`、`sliderColor` 相对于 `style`、`barStyle` 更便捷直观。