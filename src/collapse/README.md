
# Collapse 折叠面板

可以折叠/展开的内容区域。

### 使用建议
- 对复杂区域进行分组和隐藏。
- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。

## 代码示例
```jsx
const Demo = () => {

  const handleOnChange = (e: any) => {
    console.log(e);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Collapse</div>
      </div>
      <section className="d-demo-content" style={{paddingTop:15}}>
        <h2 className="d-demo-block__title">基础用法</h2>
        <Collapse
          onChange={handleOnChange}
          activeKeys={['4']}
        >
          <Item key="1" title="标题1" extra="这是值" showArrow>
            <div>这里是描述...</div>
          </Item>
          <Item key="2" title="标题2" extra="已禁用" showArrow disabled>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Item>
          <Item key="3" title="标题3" extra="罗曼.罗兰" showArrow>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Item>
          <Item key="4" title="标题4" extra="这是值" showArrow>默认展开面板，这里是描述...</Item>
        </Collapse>
        <h2 className="d-demo-block__title">手风琴模式</h2>
        <Collapse
          accordion
          activeKeys={['2']}
          onChange={handleOnChange}
        >
          <Item key="1" title="标题1" extra="这是值" showArrow>
            <div>这里是描述...</div>
          </Item>
          <Item key="2" title="标题2" extra="这是值" showArrow>这里是描述...</Item>
          <Item key="3" title="标题3" extra="罗曼.罗兰" showArrow>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Item>
          <Collapse
            accordion
            onChange={handleOnChange}
          >
            <Item key="1" title="标题4-1" extra="这是值" showArrow>
              <div>嵌套面板1，这里是描述...</div>
            </Item>
            <Item key="2" title="标题4-2" extra="这是值" showArrow>嵌套面板1，这里是描述...</Item>
          </Collapse>
        </Collapse>
      </section>
    </div>
  );
};
```

## API

### Collapse

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKeys | 当前激活面板的 | Array | `[]` |
| accordion | 是否为`手风琴`模式 | Boolean | `false`  |
| onChange | 切换面板的回调 | (keys: string): void |  -  |

### Collapse.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key  | 对应 activeKeys | String | - |
| title | 标题 | React.Element or String | - |
| extra | 右侧值 | React.Element or String | - |
| disabled | 是否禁用面板 | Boolean | `false` |
| showArrow | 是否显示右侧图标 | Boolean | `false` |

注意: 如果嵌套使用则会自动平铺显示，但其作用域是各自独立的（不建议当作树形结构展示）。