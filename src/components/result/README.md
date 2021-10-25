# Result 结果反馈

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果，以及空状态时的占位提示。

## 规则

- 用作非常重要的操作反馈，如处理结果（成功、失败）、无网络、无数据、搜索状态。
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行为触发点，eg：重新加载。

<code src="./demos/index.tsx"></code>

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
className | 样式类 | string  | -
style | 自定义样式 | React.CSSProperties  | -
imgUrl | 插图 url | string / Image Source(rn)  | -
img | 插图元素（会覆盖 imgUrl 设置）  | ReactNode | -
imgType | 默认提供的插图元素  | String | -
title | title 文案 | ReactNode | -
message | message 文案 | ReactNode | -
expandNode | 扩展节点（按钮文案） | ReactNode | -
empty | 空白占位 | Boolean | `false`

### imgType

提供占位：

`EmptyError`、`EmptySignal`、`EmptyText`、`EmptySearch`

结果反馈：

`ResultBan`、`ResultError`、`ResultQuestion`、`ResultWarn`、`ResultSuccess`