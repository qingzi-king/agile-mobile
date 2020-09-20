
# Tag 标签

进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。标签内容必须显示完全（不建议定义过长内容）。

## 代码示例
```jsx
<h2 className="d-demo-block__title">基本</h2>
<div className="d-demo-block">
  <Tag type="primary">标签</Tag>
  <Tag type="warning">标签</Tag>
  <Tag type="danger">标签</Tag>
  <Tag type="success">标签</Tag>
</div>

<h2 className="d-demo-block__title">空心</h2>
<div className="d-demo-block">
  <Tag type="primary" hairline>标签</Tag>
  <Tag type="warning" hairline>标签</Tag>
  <Tag type="danger" hairline>标签</Tag>
  <Tag type="success" hairline>标签</Tag>
</div>

<h2 className="d-demo-block__title">圆角</h2>
<div className="d-demo-block">
  <Tag type="primary" round>标签</Tag>
  <Tag type="warning" round>标签</Tag>
  <Tag type="danger" round>标签</Tag>
  <Tag type="success" round>标签</Tag>
</div>

<h2 className="d-demo-block__title">关闭</h2>
<div className="d-demo-block">
  <Tag type="primary" closeable onClose={handleClose}>标签</Tag>
  <Tag type="primary" hairline closeable onClose={handleClose}>标签</Tag>
  <Tag type="primary" hairline round closeable onClose={handleClose}>标签</Tag>
</div>

<h2 className="d-demo-block__title">尺寸</h2>
<div className="d-demo-block">
  <Tag type="primary" size="lg">大标签</Tag>
  <Tag type="primary" size="md">中标签</Tag>
  <Tag type="primary" size="xs">小标签</Tag>
</div>

<h2 className="d-demo-block__title">自定义图标</h2>
<div className="d-demo-block">
  <Tag type="primary" icon={<Icon type="star" size="xxs" />}>标签</Tag>
</div>

<h2 className="d-demo-block__title">禁用</h2>
<div className="d-demo-block">
  <Tag type="primary" disabled onClose={handleClose}>标签</Tag>
  <Tag type="primary" closeable disabled onClose={handleClose}>标签</Tag>
  <Tag type="primary" hairline round closeable disabled onClose={handleClose}>标签</Tag>
</div>
```

## API

以下所有属性均为可选项。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon | 前缀图标 | React.ReactElement | - |
| disabled | 是否不可用 | Boolean | `false` |
| closable | 是否显示关闭按钮 | Boolean | `false` |
| round | 是否大圆角样式 | Boolean | `false` |
| hairline | 是否仅显示线框 | Boolean | `false` |
| onClose | 点关闭时的回调函数（仅closable存在时有效） | Function | - |
| type | 主题类型`primary`、`success`、`danger`、`warning` | String | `primary` |
| size | 标签尺寸`lg`、`md`、`xs` | String | `md` |
| style | 标签自定义样式 | Object | {} |

注：`Tag`与`Button`有些相似的地方，但功能侧重点是不一样的。