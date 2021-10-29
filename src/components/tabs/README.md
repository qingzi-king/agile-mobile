# Tabs 标签页

一般用于在不同的视图中进行切换，标签数量一般在 2 ~ 4 个，文字数量一般在 2 ~ 4 个。

<code src="./demos/index.tsx"></code>

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

### Tabs segmentedControl 分段模式

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs| tab数据 | array | | true
mode| 模式 | string | `segmentedControl` | false
tintColor| 主题色 | string | `#268AF0` | false
initialPage  | 初始化Tab, index or key | number \| string |  | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false