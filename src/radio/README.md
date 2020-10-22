
# Radio 单选框

## 代码示例

### 基本

```tsx
<Radio.Group onChange={handleChange} value={3}>
  <Radio.Item value={1}>单选框1</Radio.Item>
  <Radio.Item value={2}>单选框2</Radio.Item>
  <Radio.Item value={3}>单选框3</Radio.Item>
</Radio.Group>
```

### 纵向、禁用、自定义颜色

```tsx
<Radio.Group
  onChange={handleChange}
  activeColor="red"
  value={2}
  direction="vertical"
>
  <Radio.Item value={1}>单选框1</Radio.Item>
  <Radio.Item value={2} disabled>单选框2</Radio.Item>
  <Radio.Item value={3}>单选框3</Radio.Item>
</Radio.Group>
```

### 与List结合

```tsx
<List renderHeader={() => <span>输入项<small>（与List结合）</small></span>}>
  {
    datas.map((data, i) => {
    return (
        <Radio.ListItem
          key={data.value}
          checked={value === data.value} describe={data.describe}
          onChange={() => handleListChange(data.value)}
        >
          {data.label}
        </Radio.ListItem>
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

### Radio.Group

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| value |   初始值   | String or Number  | -  |
| selectedValue |   选中值   | String or Number  | -  |
| activeColor    |   选中时颜色  | String  | `#268AF0` |
| disabled      |  禁用  | Boolean |  `false`  |
| onChange    | change 事件触发的回调函数 | (e: Object): void |   -  |

### Radio.ListItem

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name  |   name  | String |   -  |
| checked |   是否选中  | Boolean  | `false` |
| disabled  |  禁用  | Boolean |  `false`  |
| describe  |  描述  | React.ReactNode |  -  |
| onChange  | change 事件触发的回调函数 | (e: Object): void |   -  |

基于`List.Item`对`Radio`进行封装,`List.Item`的`extra`属性固定传入`Radio`,其他属性和`List.Item`一致。

### Radio

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    |   name  | String |   -  |
| value |   初始值   | String or Number  | -  |
| selectedValue |   选中值   | String or Number  | -  |
| checked    |   是否选中，仅List模式有效与value不冲突  | Boolean  | `false` |
| disabled      |  禁用  | Boolean |  `false`  |
| onChange    | change 事件触发的回调函数 | (e: Object): void |   -  |

<!-- 
transparent?: boolean;
mode?: 'list';
-->