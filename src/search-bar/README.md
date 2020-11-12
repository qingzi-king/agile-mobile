
# SearchBar 搜索栏

## 代码示例

### 基本
```tsx
<SearchBar
  defaultValue="重庆"
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
  onCancel={handleCancel}
/>

```
```ts
// 值变更事件
const handleChange = (e?: any) => {
  console.log('change：', e ? e.target.value : '');
}

// 聚焦事件
const handleFocus = (e?: any) => {
  console.log('focus：', e ? e.target.value : '');
}

// 失焦事件
const handleBlur = (e?: any) => {
  console.log('blur：', e ? e.target.value : '');
}

// 取消
const handleCancel = () => {
  console.log('取消');
}
```

### 限制最大字符

最大允许输入6个字符

```tsx
<SearchBar
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
  onCancel={handleCancel}
  maxLength={6}
/>
```

### 取消按钮无隐藏
```tsx
<SearchBar
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
  onCancel={handleCancel}
  showCancelButton
/>
```

### 禁用
```tsx
<SearchBar
  defaultValue="重庆"
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
  onCancel={handleCancel}
  disabled
/>
```

### 自定义样式
```tsx
<SearchBar
  style={{background:'#e05353'}}
  cancelColor="#FFF"
/>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 样式类  | String |  - |
| style | 自定义样式  | React.CSSProperties  | -  |
| disabled | 是否不可用 | Boolean | `false` |
| autoFocus | 是否自动聚焦 | Boolean | `false` |
| maxLength | 最多允许输入的字符个数 | Number | - |
| showCancelButton | 是否一直显示`取消`按钮 | Boolean | `false` |
| defaultValue | 赋值默认值 | String or Number | - |
| value | 外部输入值 | String or Number | - |
| placeholder | 输入框提示文本 | String | `请输入搜索关键词` |
| cancelText | `取消`按钮的文本 | String | `取消` |
| cancelColor | `取消`按钮的文本颜色 | String | `#268AF0` |
| onChange  |  值变化回调 | (e?:any) => void |  -  |
| onBlur  |  失去焦点回调 | (e?:any) => void |  -  |
| onFocus  |  获取焦点回调 | (e?:any) => void |  -  |
| onCancel  |  取消按钮的回调 | (e?:any) => void |  -  |
