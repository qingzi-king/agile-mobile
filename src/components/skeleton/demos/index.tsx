import React, { Component } from 'react'
import { ElasticBox, Skeleton } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content" style={{background: '#FFF'}}>
      <h2 className="d-demo-block__title">基本</h2>
      <div className="d-demo-block d-demo-bg-white">
        <Skeleton row={2} title />
      </div>
      <h2 className="d-demo-block__title">圆角</h2>
      <div className="d-demo-block d-demo-bg-white">
        <Skeleton row={2} avatar title round />
      </div>
      <h2 className="d-demo-block__title">多实例</h2>
      <div className="d-demo-block d-demo-bg-white">
        <Skeleton row={3} avatar title loops={2} />
      </div>
    </section>
  );
};

export default DemoUnit;