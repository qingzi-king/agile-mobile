
# Button 按钮

### 基础按钮

通过 `type` 设置方按钮类型，可选值有 `default` `danger ` `primary ` `success ` `warning ` `link` 默认可不填。

可通过 `inline` 设置行内元素，不设置为块元素。


```html
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="default" inline>Default</Button>
<Button type="link" inline>Link</Button>
```

### 尺寸、边框

通过 `size` 设置方按钮类型，可选值有 `large` `default ` `small ` 默认可不填。

通过 `hairline` 设置细边框。

```html
<Button type="primary" size="large">Primary Large</Button>
<Button type="primary" size="default">Primary Default</Button>
<Button type="primary" size="small">Primary Small</Button>

<Button type="primary" hairline>Primary Hairline</Button>
<Button type="success" hairline>Success Hairline</Button>
<Button type="success" block>Success block</Button>
```

### 禁用

```html
<Button type="primary" disabled>Primary Disabled</Button>
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`default`/`danger`/`primary`/`success`/`warning`/`link`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`default`、`large`、`small` | string | `default`|
| activeStyle  | ~~点击反馈的自定义样式 (设为 false 时表示禁止点击反馈)~~ | {}/false | {} |
| activeClassName  | ~~点击反馈的自定义类名~~ | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline     | 是否设置为行内按钮  | boolean |   false  |
| hairline     | 是否细边框按钮  | boolean |   false  |
| loading	   | ~~设置按钮载入状态~~	  | boolean	 | false |
| icon  | ~~可以是 [Icon]组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: `loading`设置后此项设置失效)~~ | `string`/`React.Element` | -  |
| className |  样式类名 | string | 无 |

### 其他

`activeStyle` `activeClassName` `icon` 将在后期进行完善。
