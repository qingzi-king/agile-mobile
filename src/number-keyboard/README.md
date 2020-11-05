
# NumberKeyboard 数字键盘

## 示例代码

### 基本
```tsx
<Button
  type="default"
  block
  onClick={
    () => NumberKeyboard(
      {
        maxLength: 6,
        maskClosable: false,
        overlay: false,
        onDelete: handleDelete,
        onConfirm: handleConfirm,
        onChange: handleChange
      }
    )
  }
>唤起键盘</Button>
```

### 数字乱序
```tsx
<Button
  type="default"
  block
  onClick={
    () => NumberKeyboard(
      {
        disorder: true,
        onDelete: handleDelete,
        onConfirm: handleConfirm,
        onChange: handleChange
      }
    )
  }
>唤起键盘</Button>
```

### 简洁类型
```tsx
<Button
  type="default"
  block
  onClick={
    () => NumberKeyboard(
      {
        type: 'simple',
        disorder: true,
        onDelete: handleDelete,
        onConfirm: handleConfirm,
        onChange: handleChange
      }
    )
  }
>唤起键盘</Button>
```

### 替换值
```tsx
<Button
  type="default"
  block
  onClick={
    () => NumberKeyboard(
      {
        disorder: true,
        textRender: keyFormatter,
        onDelete: handleDelete,
        onConfirm: handleConfirm,
        onChange: handleChange
      }
    )
  }
>唤起键盘</Button>
```

### 自定义头部标识
```tsx
<Button
  type="default"
  block
  onClick={
    () => NumberKeyboard(
      {
        type: 'simple',
        disorder: true,
        header: (
          <Fragment>
            <img src="http://docs.antjob.ink/agile-ui/icon/safety.svg" style={{width:16}} alt="icon" />
            安全支付
          </Fragment>
        ),
        onDelete: handleDelete,
        onConfirm: handleConfirm,
        onChange: handleChange
      }
    )
  }
>唤起键盘</Button>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className   | 扩展样式类  | String | - |
| type | 类型，值：`professional`、`simple` | String | `professional` |
| defaultValues | 默认值 | Array | `[]` |
| disorder | 是否数字乱序 | Boolean | `false` |
| isHideConfirm | 是否确认后关闭键盘 | Boolean | `true` |
| okText | 确认栏文本 | String | - |
| header | 头部标识 | React.ReactNode | - |
| textRender | 自定义键值处理 | (e?: string) => void | - |
| maxLength | 允许最大字符长度（大于0有效） | Number | - |
| maskClosable | 蒙层是否允许关闭 | Boolean | `true` |
| overlay | 是否显示蒙层 | Boolean | `true` |
| onChange | 值变更回调 | (e?: object) => void | - |
| onDelete | 值删除回调 | (e?: object) => void | - |
| onConfirm | 点击确认回调 | (e?: object) => void | - |