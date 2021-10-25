import React, { Component } from 'react'
import { Tag, ElasticBox, Icon } from 'agile-mobile'

const DemoUnit = () => {

  const handleClose = () => {
    console.log('触发了关闭');
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>
      <ElasticBox wrap>
        <Tag color="default">标签</Tag>
        <Tag color="primary">标签</Tag>
        <Tag color="warning">标签</Tag>
        <Tag color="danger">标签</Tag>
        <Tag color="success">标签</Tag>
        <Tag color="gray">标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">空心</h2>
      <ElasticBox wrap>
        <Tag color="default" fill="outline">标签</Tag>
        <Tag color="primary" fill="outline">标签</Tag>
        <Tag color="warning" fill="outline">标签</Tag>
        <Tag color="danger" fill="outline">标签</Tag>
        <Tag color="success" fill="outline">标签</Tag>
        <Tag color="gray" fill="outline">标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">圆角</h2>
      <ElasticBox wrap>
        <Tag color="primary" round>标签</Tag>
        <Tag color="warning" round>标签</Tag>
        <Tag color="danger" round>标签</Tag>
        <Tag color="success" round>标签</Tag>
        <Tag color="gray" round>标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">关闭</h2>
      <ElasticBox wrap>
        <Tag color="primary" closeable onClose={handleClose}>标签</Tag>
        <Tag color="primary" fill="outline" closeable onClose={handleClose}>标签</Tag>
        <Tag color="primary" fill="outline" round closeable onClose={handleClose}>标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">尺寸</h2>
      <ElasticBox wrap>
        <Tag color="primary" size="lg">大标签</Tag>
        <Tag color="primary" size="md">中标签</Tag>
        <Tag color="primary" size="xs">小标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">自定义图标、颜色</h2>
      <ElasticBox wrap>
        <Tag color="primary" icon={<Icon.StarOutline />}>标签</Tag>
        <Tag color="orange" icon={<Icon.BookFill />}>标签</Tag>
      </ElasticBox>

      <h2 className="d-demo-block__title">禁用</h2>
      <ElasticBox wrap>
        <Tag color="primary" disabled onClose={handleClose}>标签</Tag>
        <Tag color="primary" closeable disabled onClose={handleClose}>标签</Tag>
        <Tag color="primary" fill="outline" round closeable disabled onClose={handleClose}>标签</Tag>
      </ElasticBox>

    </section>
  );
};

export default DemoUnit;