
# Stepper 步进器

## 示例代码

### 整数
```tsx
<Stepper
  defaultValue={3}
  max={10}
  min={0}
  integer={true}
/>
```

### 浮点数
```tsx
<Stepper
  defaultValue={2}
  max={9}
  min={1}
  step={2}
/>
```

### 无限值
```tsx
<Stepper
  defaultValue={2}
  step={2}
  readOnly
/>
```

### 禁用
```tsx
<Stepper
  defaultValue={2}
  step={2}
  disabled
/>
```

### 禁用 - 加
```tsx
<Stepper
  defaultValue={2}
  step={2}
  disablePlus={true}
/>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| style | 标签自定义样式 | React.CSSProperties | {} |
| disabled | 是否禁用 | Boolean | `false` |
| disablePlus | 是否禁用`+`按钮 | Boolean | `false` |
| disableMinus | 是否禁用`-`按钮 | Boolean | `false` |
| defaultValue | 初始值 | Number | - |
| value | 实时值 | Number | - |
| step | 步长 | Number | - |
| min | 最小值 | Number | - |
| max | 最大值 | Number | - |
| integer | 是否整形数 | Boolean | `false` |
| onChange | 值变化回调 | (e: object) => void | - |