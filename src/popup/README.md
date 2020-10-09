
# Popup 模态框

支持 `top` `bottom` `left` `right` 四个方向和多层的弹出层。

## 代码示例
```jsx
const handleVisiblePopup = (
  visible: boolean = true,
  position: string = 'bottom',
  closable: boolean = false,
  radius: boolean = false,
  overlay: boolean = true,
) => {

  let res = Popup({
    visible,
    position,
    closable,
    radius,
    overlay,
    onClose: handleOncallback,
    children: (
      <div>
        <p style={{padding: 15, textAlign: 'center'}}>你好，Agile</p>
        <div className="d-demo-block">
          <Button block onClick={() => handleVisiblePopup(true, 'top')}>再弹一个顶部popup</Button>
        </div>
        <div className="d-demo-block">
          <Button type="warning" block onClick={() => handleClose()}>关闭</Button>
        </div>
      </div>
    ),
  });

  const handleClose = () => {
    if (res) {
      res.close();
    }
  }

}
```

```css
.d-demo-block {
  padding: 0 16px;
}
```

## API

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| visible    |   是否显示   | Boolean   | `true` |
| position    |   图标大小    | top、bottom、left、right  | `bottom` |
| className   | 扩展样式类  | String | - |
| style   | 扩展样式  | String | - |
| maskClosable   | 蒙层是否允许关闭  | Boolean | `true` |
| overlay   | 是否显示蒙层  | Boolean | `true` |
| radius   | 是否显示对应方向圆角 | Boolean 或 Number | `false` |
| children   | 内容节点  | React.Element | - |
| onClose   | 点击 x 或 mask 回调  | () => void | - |