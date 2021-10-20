import React, { Component } from 'react'
import { Button, Icon, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础类型</h2>
      <ElasticBox wrap>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="dark">Dark</Button>
        <Button type="default">Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">尺寸</h2>
      <ElasticBox wrap align='center'>
        <Button type="primary" size="large">Large</Button>
        <Button type="primary" size="default">Default</Button>
        <Button type="primary" size="small">Small</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">填充</h2>
      <ElasticBox wrap align='center'>
        <Button type="primary" fill="solid">Solid</Button>
        <Button type="primary" fill="outline">Outline</Button>
        <Button type="primary" fill="none">None</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">按钮块</h2>
      <Button type="primary" block size="large">block</Button>

      <h2 className="d-demo-block__title">细边框</h2>
      <ElasticBox wrap>
        <Button type="primary" fill="outline">Primary</Button>
        <Button type="success" fill="outline">Success</Button>
        <Button type="warning" fill="outline">Warning</Button>
        <Button type="danger" fill="outline">Danger</Button>
        <Button type="dark" fill="outline">Dark</Button>
        <Button type="default" fill="outline" dashed>Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">禁用</h2>
      <ElasticBox wrap>
        <Button type="primary" disabled>Primary</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="danger" disabled >Danger</Button>
        <Button type="dark" disabled >Dark</Button>
        <Button type="default" disabled>Default</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">按钮块</h2>
      <ElasticBox wrap>
        <Button size="default" type="danger" loading>Default</Button>
        <Button type="success" icon={<Icon type="loading" size="xxs" />}>Default</Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit;