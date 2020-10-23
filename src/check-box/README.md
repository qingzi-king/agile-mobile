
# CheckBox 复选框

## 代码示例

### 基本

```tsx
<CheckBox.Group onChange={handleChange} values={[3]}>
  <CheckBox.Item value={1}>单选框1</CheckBox.Item>
  <CheckBox.Item value={2}>单选框2</CheckBox.Item>
  <CheckBox.Item value={3}>单选框3</CheckBox.Item>
</CheckBox.Group>
```

### 纵向、禁用、自定义颜色

```tsx
<CheckBox.Group
  onChange={handleChange}
  activeColor="red"
  values={[2]}
  direction="vertical"
>
  <CheckBox.Item value={1}>单选框1</CheckBox.Item>
  <CheckBox.Item value={2} disabled>单选框2</CheckBox.Item>
  <CheckBox.Item value={3}>单选框3</CheckBox.Item>
</CheckBox.Group>
```

### 与List结合

```tsx
<List renderHeader={() => <span>输入项<small>（与List结合）</small></span>}>
  {
    datas.map((data, i) => {
    return (
        <CheckBox.ListItem
          key={data.value}
          checked={values.includes(data.value)}
          describe={data.describe}
          onChange={() => handleListChange(data.value)}
          disabled={data.disabled || false}
        >
          {data.label}
        </CheckBox.ListItem>
      )
    })
  }
</List>
```
```tsx
const datas = [
  { value: 0, label: '这是标题1' },
  { value: 1, label: '这是标题2', describe: '这是内容2的描述...' },
  { value: 2, label: '这是标题3' },
];
const handleListChange = (e?: any) => {
  console.log('已选择：', e);
  setValue(e);
}
```

## API

### CheckBox.Group

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| values |   初始值   | Array(String or Number)  | -  |
| selectedValues |   选中值   | Array(String or Number)  | -  |
| activeColor    |   选中时颜色  | String  | `#268AF0` |
| disabled      |  禁用  | Boolean |  `false`  |
| onChange    | change 事件触发的回调函数 | (e: Object) => void |   -  |

### CheckBox.ListItem

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name  |   name  | String |   -  |
| checked |   是否选中  | Boolean  | `false` |
| disabled  |  禁用  | Boolean |  `false`  |
| describe  |  描述  | React.ReactNode |  -  |
| onChange  | change 事件触发的回调函数 | (e: Object) => void |   -  |

基于`List.Item`对`CheckBox`进行封装,`List.Item`的`extra`属性固定传入`CheckBox`,其他属性和`List.Item`一致。

### CheckBox.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| values |   初始值   | Array(String or Number)  | -  |
| selectedValues |   选中值   | Array(String or Number)  | -  |
| checked    |   是否选中，仅List模式有效与value不冲突  | Boolean  | `false` |
| disabled      |  禁用  | Boolean |  `false`  |
| shape      |  形状，可选`round `、`square` | String |  `round`  |
| onChange    | change 事件触发的回调函数 | (e: Object) => void |   -  |

<!-- 
transparent?: boolean;
mode?: 'list';
-->