# Carousel 走马灯

这里将走马灯与轮播图统称。

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 卡片容器样式类 | String | - |
| style | 卡片容器样式 | React.CSSProperties | - |
| axis | 卡片滚动方向，`x`、`y` | String | `x` |
| autoplay | 是否自动播放 | Boolean | `false` |
| loop | 是否循环滑动 | Boolean | `false` |
| indicator | 是否显示指示器 | Boolean | `true` |
| indicatorColor | 指示器背景色 | String | `#268AF0` |
| indicatorDirection | 指示器显示位置（indicator为`true`有效），垂直滑动默认为`left`，否则默认为`bottom` | Boolean | `left`或`bottom` |
| duration | 自动播放停留时间（毫秒） | Number | `2000` |
| activeIndex | 激活的卡片，从0开始 | Number | `0` |
| speed | 滑动速度，值越大过渡越快 | Number | `10` |
| afterChange | 滑动后触发后回调 | (e:object) => void | - |

### 注意事项

当卡片垂直滑动时，必须指定明确的`height`。

基于开源方案[embla-carousel](https://github.com/davidcetinkaya/embla-carousel)