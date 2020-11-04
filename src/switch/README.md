
# Switch 滑动开关

## 代码示例

### 基本
```tsx
<Switch checked />
```

### 自定义文本
```tsx
<Switch checked checkedText="开" uncheckedText="关" />
<Switch checkedText="1" uncheckedText="0" />
```

### 禁用状态
```tsx
<Switch disabled checked checkedText="开" uncheckedText="关" />
```

### 加载状态
```tsx
<Switch loading checked checkedText="开" uncheckedText="关" />
```

### 自定义颜色
```tsx
<Switch
  checked
  checkedText="开"
  uncheckedText="关"
  checkedColor="#FFF"
  uncheckedColor="#FFF"
  checkedBackGround="#07C160"
  uncheckedBackGround="#FF0000"
/>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| style | 标签自定义样式 | React.CSSProperties | {} |
| checked | 是否选中 | Boolean | `false` |
| loading | 是否加载中 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| checkedText | 选中状态文本 | String | - |
| uncheckedText | 未选中状态文本 | String | - |
| checkedColor | 选中状态文本颜色（文本需存在） | String | `#FFF` |
| uncheckedColor | 未选中状态文本颜色（文本需存在） | String | `#CCC` |
| checkedBackGround | 选中状态背景颜色 | String | `#FFF` |
| uncheckedBackGround | 未选中状态背景颜色 | String | `#FFF` |
| onChange | 状态切换回调 | (e?: object) => void | - |
| onClick | 点击回调 | (e?: object) => void | - |