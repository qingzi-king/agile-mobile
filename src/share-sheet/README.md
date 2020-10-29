
# ShareSheet 分享面板

从底部弹起的分享面板，一般用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑（逻辑通过自定义事件处理）。

## 代码代码

### 单行显示

```tsx
ShareSheet({
  title: "立即分享给好友",
  description: '这里添加描述信息',
  cancelText: '取消分享',
  onCancel: handleOnCancel,
  onSelect: handleOnSelect,
  options: [
    {
      name: '微信',
      src: 'http://docs.antjob.ink/agile-ui/icon/wechat.png'
    },
    {
      name: 'QQ',
      src: 'http://docs.antjob.ink/agile-ui/icon/qq.png'
    },
    {
      name: '微博',
      src: 'http://docs.antjob.ink/agile-ui/icon/weibo.png'
    },
    {
      name: '自定义1',
      src: 'http://docs.antjob.ink/agile-ui/icon/book.png'
    },
    {
      name: '自定义2',
      src: 'http://docs.antjob.ink/agile-ui/icon/structure.png'
    },
    {
      name: '自定义3',
      src: 'http://docs.antjob.ink/agile-ui/icon/target.png'
    },
  ]
});
```
### 多行显示

```tsx
ShareSheet({
  title: "立即分享给好友",
  description: '这里添加描述信息',
  cancelText: '取消分享',
  onCancel: handleOnCancel,
  onSelect: handleOnSelect,
  maskClosable: false,
  overlay: false,
  radius: true,
  options: [
    [
      {
        name: '微信',
        src: 'http://docs.antjob.ink/agile-ui/icon/wechat.png'
      },
      {
        name: 'QQ',
        src: 'http://docs.antjob.ink/agile-ui/icon/qq.png'
      },
      {
        name: '微博',
        src: 'http://docs.antjob.ink/agile-ui/icon/weibo.png'
      },
    ],
    [
      {
        name: '自定义1',
        src: 'http://docs.antjob.ink/agile-ui/icon/book.png'
      },
      {
        name: '自定义2',
        src: 'http://docs.antjob.ink/agile-ui/icon/structure.png'
      },
      {
        name: '自定义3',
        src: 'http://docs.antjob.ink/agile-ui/icon/target.png'
      },
    ]
  ]
});
```

## API

### ShareSheet

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| className   | 扩展样式类  | String | - |
| title   | 标题  | String | - |
| description   | 描述  | String | - |
| cancelText   | 取消按钮文本  | String | `取消` |
| onCancel   | 取消分享回调  | () => void | - |
| onSelect   | 选中分享回调  | (e:object) => void | - |
| maskClosable   | 蒙层是否允许关闭  | Boolean | `true` |
| overlay   | 是否显示蒙层  | Boolean | `true` |
| radius   | 是否显示对应方向圆角 | Boolean 或 Number | `false` |

### options
```ts
options: [
  {
    name: '名称',
    src: '资源地址',
  }
]
```

### 其他

其实`ShareSheet`继承了`Popup`组件的所有定义，若有重复定义会被覆盖。
