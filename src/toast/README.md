
# Toast 轻提示

一种轻量级反馈/提示，在页面弹出黑色半透明提示，可以用来显示不会打断用户操作的内容，适合消息通知、加载提示、操作交互等场景中。

建议一次只显示一个 Toast，有 Icon 的 Toast，字数为 5 个左右；没有 Icon 的 Toast，字数不宜超过 14 个。

## 代码示例

### TS方法
```ts
const handleShowToast = (type: string, content: any, duration?: number, position?: string) => {

  switch (type) {
    case 'success':
      Toast.success({ content, duration, onClose: cb });
      break;
    case 'fail':
      Toast.fail({ content, duration, onClose: cb });
      break;
    case 'offline':
      Toast.offline({ content, duration, onClose: cb });
      break;
    case 'customIcon':
      Toast.offline({ content, duration, onClose: cb, icon: <Icon type="star" size="lg" /> });
      break;
    case 'loading':
      Toast.loading({ content, duration, onClose: cb });
      break;
    default:
      Toast.info({ content, duration, position, onClose: cb });
      break;
  }

}
```

### JSX
```jsx
<section className="d-demo-content">
  <h2 className="d-demo-block__title">基础类型</h2>
  <div className="d-demo-block">
    <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是纯文本提示！', 1000)}>仅文本</Button>
    <Button block className="d-demo-margin-block" onClick={() => handleToast('loading', '数据加载中', 1000)}>加载</Button>
    <Button block className="d-demo-margin-block" onClick={() => handleToast('success', '处理成功', 1000)}>成功</Button>
    <Button block className="d-demo-margin-block" onClick={() => handleToast('fail', '处理失败', 1000)}>失败</Button>
    <Button block className="d-demo-margin-block" onClick={() => handleToast('offline', '网络异常', 1000)}>网络异常</Button>
  </div>

  <h2 className="d-demo-block__title">自定义图标</h2>
  <div className="d-demo-block">
    <Button block className="d-demo-margin-block" onClick={() => handleToast('customIcon', '自定义图标', 500)}>自定义图标</Button>
  </div>

  <h2 className="d-demo-block__title">自定义位置</h2>
  <div className="d-demo-block">
    <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是顶部展示！', 500, 'top')}>顶部</Button>
    <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是底部展示！', 500, 'bottom')}>底部</Button>
  </div>
</section>
```

## API

组件提供了五个静态方法，参数如下：

- `Toast.info({ content, duration, onClose, position })`

- `Toast.success({ content, duration, onClose, position, icon })`

- `Toast.fail({ content, duration, onClose, position, icon })`

- `Toast.loading({ content, duration, onClose, position, icon })`

- `Toast.offline({ content, duration, onClose, position, icon })`

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| content    | 提示内容 | React.Element or String    | - |
| duration   | 自动关闭的延时，单位毫秒 | number | `2000` |
| onClose    | 关闭后回调 |  () => void | - |
| mask    | 是否显示蒙层 |  Boolean | `false` |
| position    | 消息显示的位置，`center` `top` `bottom` |  String  | `center` |
| icon    | 图标，`info`模式除外 |  React.Element  | - |

> **注：**  duration = 0 时，toast 不会消失；隐藏 toast 需要手动调用 hide方法。`loading`方法下自动添加`mask`。

还提供了全局配置和全局销毁方法：

- `Toast.config({ duration, position })`

- `Toast.hide()`

## 其他

当存在多个事件交叉存在时，后一个事件行为会优先呈现，旧事件行为会被注销，另外后续会采用队列优化多事件情况。