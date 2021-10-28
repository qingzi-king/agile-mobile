import React, { Component } from 'react'
import { ElasticBox, Button, Icon } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础类型</h2>
      <ElasticBox wrap>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="dark">Dark</Button>
        <Button color="default">Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">尺寸</h2>
      <ElasticBox wrap align='center'>
        <Button color="primary" size="large">Large</Button>
        <Button color="primary" size="default">Default</Button>
        <Button color="primary" size="small">Small</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">填充</h2>
      <ElasticBox wrap align='center'>
        <Button color="primary" fill="solid">Solid</Button>
        <Button color="primary" fill="outline">Outline</Button>
        <Button color="primary" fill="none">None</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">按钮块</h2>
      <Button color="primary" block size="large">block</Button>

      <h2 className="d-demo-block__title">细边框</h2>
      <ElasticBox wrap>
        <Button color="primary" fill="outline">Primary</Button>
        <Button color="success" fill="outline">Success</Button>
        <Button color="warning" fill="outline">Warning</Button>
        <Button color="danger" fill="outline">Danger</Button>
        <Button color="dark" fill="outline">Dark</Button>
        <Button color="default" fill="outline" dashed>Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">禁用</h2>
      <ElasticBox wrap>
        <Button color="primary" disabled>Primary</Button>
        <Button color="success" disabled>Success</Button>
        <Button color="warning" disabled>Warning</Button>
        <Button color="danger" disabled >Danger</Button>
        <Button color="dark" disabled >Dark</Button>
        <Button color="default" disabled>Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">按钮块</h2>
      <ElasticBox wrap>
        <Button color="danger" size="default" disabled loading>加载中</Button>
        <Button color="primary" icon={<Icon.HomeOutline style={{marginRight: 2}} />}>首页</Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit;