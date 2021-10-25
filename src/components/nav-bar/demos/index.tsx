import React, { Component } from 'react'
import { ElasticBox, NavBar, Button, Icon } from 'agile-mobile'

const DemoUnit = () => {

  const handleCallBack = (content: string) => {
    console.log(content)
  }

  return (
    <section style={{paddingTop: 45}}>

      <h2 className="d-demo-block__title">浅色 light</h2>
      <NavBar
        mode="light"
        icon={<Icon.LeftOutline type="arrow-left" />}
        onLeftClick={() => handleCallBack('点击了返回按钮！')}
        leftContent={<span>返回</span>}
        rightContent={[
          <Icon.EllipsisOutline key="1" type="ellipsis" />
        ]}
        title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
      />

      <h2 className="d-demo-block__title">深色 dark</h2>
      <NavBar
        icon={<Icon.LeftOutline type="arrow-left" />}
        onLeftClick={() => handleCallBack('点击了返回按钮！')}
        rightContent={[
          <Icon.EllipsisOutline key="1" type="ellipsis" />,
        ]}
        title="标题"
      />

      <h2 className="d-demo-block__title">浅色 light 容器</h2>
      <NavBar
        mode="light"
        icon={<Icon.LeftOutline type="arrow-left" />}
        onLeftClick={() => handleCallBack('点击了返回按钮！')}
        rightContent={[
          <Icon.EllipsisOutline key="1" type="ellipsis" />,
        ]}
      >标题</NavBar>

      <h2 className="d-demo-block__title">浅色 light fixed</h2>
      <NavBar
        mode="light"
        title="Fixed NavBar"
        fixed
        placeholder
      />
    </section>
  );
};

export default DemoUnit;