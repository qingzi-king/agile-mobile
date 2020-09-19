
# Flex 布局

弹性盒子是 CSS3 的一种新的布局模式，Flex 是 CSS3 flex 布局的一个封装。

由于移动端对于容器自适应变化的操作不会太频繁，因此并没有引入栅格化的方式，建议在业务中自己按需实现。

## 代码示例
```jsx

<h2 className="d-demo-block__title">基础类型</h2>
<div className="d-demo-block">
  <Flex>
    <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">1</PlaceHolderWarp></Flex.Item>
    <Flex.Item><PlaceHolderWarp>2</PlaceHolderWarp></Flex.Item>
    <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">3</PlaceHolderWarp></Flex.Item>
    <Flex.Item><PlaceHolderWarp>4</PlaceHolderWarp></Flex.Item>
    <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">5</PlaceHolderWarp></Flex.Item>
  </Flex>
</div>

  <h2 className="d-demo-block__title">wrap</h2>
  <Flex wrap="wrap">
    <div className="d-inline">1</div>
    <div className="d-inline">2</div>
    <div className="d-inline">3</div>
    <div className="d-inline">4</div>
    <div className="d-inline">5</div>
  </Flex>

  <h2 className="d-demo-block__title">wrap justify：between</h2>
  <Flex wrap="wrap" justify="between">
    <div className="d-inline">1</div>
    <div className="d-inline">2</div>
    <div className="d-inline">3</div>
    <div className="d-inline">4</div>
    <div className="d-inline">5</div>
  </Flex>

  <h2 className="d-demo-block__title">wrap align： center</h2>
  <Flex wrap="wrap" align="center">
    <div className="d-inline">1</div>
    <div className="d-small">2</div>
    <div className="d-inline">3</div>
    <div className="d-small">4</div>
    <div className="d-inline">5</div>
  </Flex>

  <h2 className="d-demo-block__title">wrap align-content： end</h2>
  <Flex wrap="wrap" alignItem="end" style={{height: 120,border: '1px solid #E5E5E5'}}>
    <div className="d-inline">1</div>
    <div className="d-small">2</div>
    <div className="d-inline">3</div>
    <div className="d-small">4</div>
    <div className="d-inline">5</div>
  </Flex>

```
```jsx

// 占位组件
const PlaceHolderWarp = (props: any) => {
  return (
    <div className="d-placeholder" style={{backgroundColor: props.bgcolor || '#EBEBEF'}}
    >{ props.children }</div>
  )
}

.d-placeholder {
  color: #FFF;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

```

## API

### Flex

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction | 定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`  | String  | row |
| wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`  | String  | nowrap |
| justify  | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    | String   | start |
| align    | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch` | String   | center |
| alignItem | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch`    | String  | stretch |

### Flex.Item

Flex.Item 组件默认会加上`flex:1`，保证所有 item 平均分宽度，Flex 容器的 children 可以用其他的HTML标签不一定是 Flex.Item。