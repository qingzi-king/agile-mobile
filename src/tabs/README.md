
# Tabs 标签页

一般用于在不同的视图中进行切换，标签数量一般在 2~4 个，文字数量一般在 2~4 个。

## 代码示例
```jsx
const tabs1 = [
  { title: <Badge text={3}>标签1</Badge> },
  { title: <Badge text={220}>标签2</Badge> },
  { title: <Badge dot>标签3</Badge> },
];

const tabs2 = [
  { title: '标签1' },
  { title: '标签2' },
  { title: '标签3' },
];

const tabs3 = [
  { title: '标签1' },
  { title: '标签2' },
  { title: '标签3' },
  { title: '标签4' },
  { title: '标签5' },
  { title: '标签6' },
  { title: '标签7' },
  { title: '标签8' },
  { title: '标签9' },
];

const itemStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '160px', backgroundColor: '#fff' };

const renderTabBar = (props: object) => {
  return (
    <Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>
  );
}
```
### 顶部标签
```jsx
<Tabs tabs={tabs1}
  initialPage={1}
  onChange={(tab: any) => { console.log('onChange', tab); }}
  onTabClick={(tab: any) => { console.log('onTabClick', tab); }}
>
  <div style={itemStyle}>标签1的内容...</div>
  <div style={itemStyle}>标签2的内容...</div>
  <div style={itemStyle}>标签3的内容...</div>
</Tabs>
```
### 底部标签
```jsx
<Tabs tabs={tabs2}
  initialPage={1}
  tabBarPosition="bottom"
  renderTab={tab => <span>{tab.title}</span>}
>
  <div style={itemStyle}>标签1的内容...</div>
  <div style={itemStyle}>标签2的内容...</div>
  <div style={itemStyle}>标签3的内容...</div>
</Tabs>
```

### 粘性布局
结合react-sticky实现
```jsx
<StickyContainer>
  <Tabs tabs={tabs2}
    initialPage={0}
    renderTabBar={renderTabBar}
  >
    <div style={itemStyle}>标签1的内容...</div>
    <div style={itemStyle}>标签2的内容...</div>
    <div style={itemStyle}>标签3的内容...</div>
  </Tabs>
</StickyContainer>
```
### 垂直标签
```jsx
<Tabs tabs={tabs2}
  tabBarPosition="left"
  tabDirection="vertical"
>
  <div style={itemStyle}>标签1的内容...</div>
  <div style={itemStyle}>标签2的内容...</div>
  <div style={itemStyle}>标签3的内容...</div>
</Tabs>
```
### 切换无动画
```jsx
<Tabs tabs={tabs2} initialPage={2} animated={false} useOnPan={false}>
  <div style={itemStyle}>标签1的内容...</div>
  <div style={itemStyle}>标签2的内容...</div>
  <div style={itemStyle}>标签3的内容...</div>
</Tabs>
```
### 自定义标签个数
```jsx
const renderContent = (tab: any) => (<div style={itemStyle}>{tab.title}的内容...</div>);
<Tabs tabs={tabs3} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
  { renderContent }
</Tabs>
```
### 分段器模式
```jsx
<div style={{padding:5}}>
  <Tabs tabs={tabs2}
    initialPage={1}
    onTabClick={(tab, index) => { console.log('onTabClick', tab, index); }}
    mode="segmentedControl"
  />
</div>
```
### 分段器模式 - 自定义主题颜色
```jsx
<div style={{padding:5}}>
  <Tabs tabs={tabs2}
    initialPage={0}
    onTabClick={(tab, index) => { console.log('onTabClick', tab, index); }}
    tintColor="red"
    mode="segmentedControl"
  />
</div>
```

## API

本模块基于社区方案`m-tabs`实现。

### Tabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs | tab数据 | array |  | true
tabBarPosition  | TabBar位置 | `top`、`bottom`、`left`、`right` |  `top` | false
renderTabBar  | 替换TabBar | ((props: TabBarPropsType) => React.ReactNode) \| `false` |  | false
initialPage  | 初始化Tab, index or key | number \| string |  | false
page  | 当前Tab, index or key | number \| string |  | false
swipeable  | 是否可以滑动内容切换 | boolean |  `true` | false
useOnPan  | 使用跟手滚动 | boolean |  `true` | false
prerenderingSiblingsNumber  | 预加载两侧Tab数量 | number | `1` | false
animated  | 是否开启切换动画 | boolean |  `true` | false
onChange  | tab变化时触发 | (tab: Models.TabData, index: number) => void |  | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false
destroyInactiveTab | 销毁超出范围Tab | boolean | `false` | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number | `0.3` | false
usePaged | 是否启用分页模式 | boolean | `true` | false
tabDirection | Tab方向 | `horizontal`、`vertical` |  `horizontal` | false
tabBarUnderlineStyle  | tabBar下划线样式 | React.CSSProperties \| any |  | false
tabBarBackgroundColor  | tabBar背景色 | string |  | false
tabBarActiveTextColor  | tabBar激活Tab文字颜色 | string |  | false
tabBarInactiveTextColor  | tabBar非激活Tab文字颜色 | string |  | false
tabBarTextStyle  | tabBar文字样式 | React.CSSProperties \| any |  | false
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => React.ReactNode | | false

### Tabs.DefaultTabBar

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab | 跳转Tab | (index: number) => boolean | | true
tabs|tab数据 | array | | true
activeTab | 当前激活Tab索引 | number | | true
animated | 是否使用动画 | boolean | | true
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => React.ReactNode | | false
page | Tab分页尺寸 | number | `5` | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false

### segmentedControl 分段模式

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
mode| 模式 | string | `egmentedControl` | true
tabs| tab数据 | array | | true
tintColor| 主题色 | string | `#268AF0` | false
initialPage  | 初始化Tab, index or key | number \| string |  | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false