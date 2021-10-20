
# ElasticBox 弹性盒子

弹性盒子是 CSS3 的一种新的布局模式，ElasticBox 是 CSS3 flex 布局的一个封装。

由于移动端对于容器自适应变化的操作不会太频繁，因此并没有引入栅格化的方式，建议在业务中自己按需实现。

<code src="./demos/index.tsx"></code>

## 属性

| 属性             | 说明               | 类型       | 默认值       |
| ---------------- | ------------------ | ------------ | ------------ |
| justify   | 主轴对齐方式                           | `'start' \| 'end' \| 'center' \| 'baseline' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | -              |
| align     | 交叉轴对齐方式                         | `'start' \| 'end' \| 'center' \| 'baseline'`                                                   | -              |
| direction | 间距方向                               | `'vertical' \| 'horizontal'`                                                                   | `'horizontal'` |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | `boolean`                                                                                      | `false`        |
| block     | 是否渲染为块级元素                     | `boolean`                                                                                      | `false`        |

## CSS 变量

| 属性             | 说明               | 默认值       |
| ---------------- | ------------------ | ------------ |
| --gap            | 间距大小           | `8px`        |
| --vertical-gap   | 垂直方向的间距大小 | `var(--gap)` |
| --horizontal-gap | 水平方向的间距大小 | `var(--gap)` |