
# CountDown 倒计时

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 扩展样式类  | String | - |
| time | 时间差（毫秒级） | Number | `0` |
| format | 时间格式化 | String | `HH:mm:ss` |
| millisecond | 时间是否精确到毫秒 | Boolean | `false`  |
| autoStart | 时间是否自动倒数 | Boolean | `true`  |
| freeStyle | 是否支持格式自定义样式 | Boolean | `false`  |
| childRef | 子元素Ref句柄（用于外部控制） | Object |  -  |
| start | 外部控制，开始（childRef必须存在） | () => void |  -  |
| pause | 外部控制，暂停（childRef必须存在） | () => void |  -  |
| reset | 外部控制，重置（childRef必须存在） | () => void |  -  |
| onChange | 值变更回调 | (e?: object) => void |  -  |
| onFinish | 倒数完成回调 | (e?: object) => void |  -  |

## format 参数格式化说明

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| DD | 天数  | String | - |
| HH | 小时  | String | - |
| mm | 分钟  | String | - |
| ss | 秒数  | String | - |
| S | 毫秒（最多支持3位，如：SSS） | String | - |

## 注意

 - 使用`onChange`时建议采用防抖节流处理。

 - 在`freeStyle`模式下分隔符会自动提取`format`中的分隔符。