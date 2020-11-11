
# Sticky 粘性布局

## 代码示例
### 基本

```tsx
<Sticky>
  <div style={{width:'100%',padding:'0 15px'}}>
    <Button type="primary" size="small">基础使用</Button>
  </div>
</Sticky>
```

### 吸顶距离

```tsx
<Sticky offsetTop={30}>
  <div style={{width:'100%',textAlign:'center',padding:'0 15px'}}>
    <Button type="primary" size="small">吸顶距离</Button>
  </div>
</Sticky>
```

### 指定容器

```tsx
const thisRef = React.createRef();

<div style={{height:100,background:'#FFF'}} ref={thisRef}>
  <Sticky container={thisRef}>
    <div style={{width:'100%',textAlign:'right',padding:'0 15px'}}>
      <Button type="primary" size="small">指定容器</Button>
    </div>
  </Sticky>
</div>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| className | 样式类  | String |  - |
| style | 自定义样式  | React.CSSProperties  | -  |
| zIndex | 定位层级   | Number  | `99`  |
| offsetTop |   吸顶时与顶部的距离，支持 `px`、`vw`、`rem` 单位，默认 `px`（最终都会转为`px`）  | Number or String  | `0` |
| container  |  容器对应的 HTML 节点 | Element |  -  |
| onScroll  |  滚动回调 | (e) => void |  -  |

### onScroll 回调说明

 - isFixed: 是否吸顶

 - rect: 返回元素的大小及其相对于视口的位置

```json
{
  isFixed: false
  rect: {
    bottom: 126
    height: 30
    left: 0
    right: 369
    top: 96
    width: 369
    x: 0
    y: 96
  }
}
```