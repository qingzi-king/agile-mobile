import React, { Component } from 'react'
import { Badge, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content">
      <ElasticBox wrap direction="vertical">
      实心微标
      <Badge dot><div style={{ width: '30px', height: '30px', background: '#ddd' }} /></Badge>
      右上角微标
      <Badge text={7}><div style={{ width: '30px', height: '30px', background: '#ddd' }} /></Badge>
      数字
      <Badge text={797} />
      文本1
      <Badge text={'new'} />
      文本2
      <Badge text={'减'} />
      样式自定义1
      <Badge text="券" style={{ padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
      样式自定义2
      <Badge text="有机" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      样式自定义3
      <Badge text="自动升级"
        style={{
          marginLeft: 12,
          padding: '0 3px',
          backgroundColor: '#fff',
          borderRadius: 2,
          color: '#f19736',
          border: '1px solid #f19736',
        }}
      />
      </ElasticBox>

      <h2 className="d-demo-block__title">扩展</h2>
      <Badge text={'促'} corner>
        <div style={{width:120,height:40,lineHeight:'40px'}}>新产品上新啦</div>
      </Badge>
    </section>
  );
};

export default DemoUnit;