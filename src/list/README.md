
# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表、数据属性展示等。

## 代码示例
```jsx
<List renderHeader={() => '基础样式'}>
  <Item extra={'这是值内容'}>这是标题</Item>
  <Item extra={'这是值内容'} arrow="horizontal" onClick={() => Toast.info({ content: '这是列表链接', duration: 500 })}>这是标题</Item>
  <Item extra={'这是值内容'} describe={'这里是描述内容区域....'}>这是标题</Item>
  <Item thumb={<Icon type="check" style={{color:'#65b63c'}} />} extra={'这是值内容'} describe={'这里是描述内容区域....这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容'}>Title</Item>
</List>

<List renderHeader={() => '案例'}>
  <Item
    arrow="horizontal"
    extra={<span>2020-09-22 12:12:12</span>}
    onClick={() => Toast.info({ content: '点击了李白', duration: 500 })}
    describe={(
      <div>
        <div><b>行程：</b>重庆 -> 峨眉山</div>
        <div><b>特殊需求：</b>建议当天晚上18:30 国航CU2345</div>
      </div>
    )}
  >李白</Item>
</List>
```

## API

### List

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| renderHeader       | list heder  | (): void |  无  |
| renderFooter       | list footer  | (): void |  无  |

### List.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| thumb | 缩略图(当为 string 类型时作为 `Icon` type) | String/React.Element | 无 |
| extra | 右侧值内容 | String/React.Element | 无 |
| describe | 下边描述内容 | String/React.Element | 无 |
| arrow | 箭头方向(右,上,下)，可选`horizontal`、`up`、`down`，为空时则不显示 | String | 无 |
| onClick | 点击事件的回调函数 | (): void | 无 |

<!-- | wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  | -->