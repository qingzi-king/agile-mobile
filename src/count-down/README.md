
# CountDown 倒计时

## 示例代码

### 基本
```tsx
let targetTimestamp = 3 * 60 * 60 * 1000; // 毫秒

<CountDown
  time={targetTimestamp}
  millisecond
/>
```

### 自定义格式
```tsx
let targetTimestamp = 30 * 60 * 60 * 1000; // 毫秒

<CountDown
  time={targetTimestamp}
  millisecond
  format="DD:HH:mm:ss:SSS"
/>

<CountDown
  time={targetTimestamp}
  millisecond
  format="DD 天 HH 时 mm 分 ss 秒 SSS 毫秒"
/>
```

### 外部控制
```tsx
let targetTimestamp = 30 * 1000; // 毫秒

<CountDown
  time={targetTimestamp}
  autoStart={false}
  format="mm:ss:SSS"
  millisecond
  onChange={handleChange}
  onFinish={handleFinish}
  childRef={childRef}
/>

<Button inline onClick={handleStart}>开始</Button>
<Button inline onClick={handlePause}>暂停</Button>
<Button inline onClick={handleReset}>重置</Button>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 扩展样式类  | String | - |
| time | 时间差（毫秒级） | Number | `0` |
| format | 时间格式化 | String | -  |
| millisecond | 时间是否显示毫秒 | Boolean | `false`  |
| autoStart | 时间是否自动倒数 | Boolean | `true`  |
| childRef | 子元素Ref句柄 | Object |  -  |
| start | 外部控制，开始 | () => void |  -  |
| pause | 外部控制，暂停 | () => void |  -  |
| reset | 外部控制，重置 | () => void |  -  |
| onChange |倒数值变更回调 | (e?: object) => void |  -  |
| onFinish |倒数完成回调 | (e?: object) => void |  -  |

### format 参数格式化说明

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| DD | 天数  | String | - |
| HH | 小时  | String | - |
| mm | 分钟  | String | - |
| ss | 秒速  | String | - |
| S | 毫秒（最多支持3位，如：SSS） | String | - |