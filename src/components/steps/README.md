# Steps 步骤条

显示一个任务的进度；或者引导用户完成某个复杂任务。

对于步骤数量过多情况，不建议横排展示。

<code src="./demos/index.tsx"></code>

## API
### Steps

整体步骤条。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| current | 指定当前步骤，从 1 开始记数，`status`为`error`时优先处理。 | Number | `0` |
| direction | 步骤条方向，`vertical`、`horizontal`  |  String | `vertical`  |
| status | 指定当前步骤的状态，可选 `wait`、`process`、`finish`、`error` | String | `wait` |

### Steps.Step

步骤条内的每一个步骤。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 标题 | React.Element | - |
| description | 步骤的详情描述，可选 | React.Element | -  |
| icon | 步骤图标，为String时将配合`Icon`中`type`属性使用 | String/React.Element | - |