
# Steps 步骤条

显示一个任务的进度；或者引导用户完成某个复杂任务。

对于步骤数量过多情况，不建议横排展示。

## 代码示例

### 纵向
```tsx
<Steps current={1}>
  <Step title="步骤1" description="这里是步骤1描述..." />
  <Step title="步骤2" description="这里是步骤2描述..." />
  <Step title="步骤3" description="这里是步骤3描述..." />
</Steps>
```

### 横向
```tsx
<Steps current={1} direction="horizontal">
  <Step title="步骤1" description="这里是步骤1描述这里是步骤1描述这里是步骤1描述..." />
  <Step title="步骤2" description="这里是步骤2描述..." />
  <Step title="步骤3" description="这里是步骤3描述..." />
</Steps>
```

### 横向-异常终止
```tsx
<Steps current={3} direction="horizontal" status="error">
  <Step title="步骤1" description="这里是步骤1描述..." />
  <Step title="步骤2" description="这里是步骤2描述..." />
  <Step title="步骤3" description="这里是步骤3描述..." />
</Steps>
```

### 纵向-异常终止
```tsx
<Steps current={3} status="error">
  <Step title="步骤1" description="这里是步骤1描述..." />
  <Step title="步骤2" description="这里是步骤1描述..." />
  <Step title="步骤3" description="这里是步骤3描述..." />
  <Step title="步骤4" description="这里是步骤4描述..." icon={<Icon type="star" size="sm" />} />
</Steps>
```

## API
### Steps

整体步骤条。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| current | 指定当前步骤，从 1 开始记数，`status`为`error`时优先处理。 | Number | `0` |
| status | 指定当前步骤的状态，可选 `wait`、`process`、`finish`、`error` | String | `wait` |
| direction | 步骤条方向，`vertical`、`horizontal`  |  String | `vertical`  |

### Steps.Step

步骤条内的每一个步骤。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| status | 指定当前步骤的状态，可选 `wait`、`process`、`finish`、`error` | String | `wait` |
| title | 标题 | React.Element | - |
| description | 步骤的详情描述，可选 | React.Element | -  |
| icon | 步骤图标，为String时将配合`Icon`中`type`属性使用 | String/React.Element | - |