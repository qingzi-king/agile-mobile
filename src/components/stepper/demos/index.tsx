import React, { Component } from 'react'
import { ElasticBox, Stepper } from 'agile-mobile'

const DemoUnit = () => {

  const handleChange = (e?: any) => {
    console.log(e);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">仅支持整数<small>（输入框仅读）</small></h2>
      <Stepper
        defaultValue={3}
        max={10}
        min={0}
        readOnly
        integer={true}
        onChange={handleChange}
      />
      <h2 className="d-demo-block__title">支持浮点数</h2>
      <Stepper
        defaultValue={2}
        max={999}
        min={0}
        step={0.05}
        decimal={2}
        onChange={handleChange}
      />
      <h2 className="d-demo-block__title">无限值</h2>
      <Stepper
        defaultValue={2}
        step={2}
        onChange={handleChange}
      />
      <h2 className="d-demo-block__title">禁用</h2>
      <Stepper
        defaultValue={2}
        step={2}
        disabled
        onChange={handleChange}
      />
      <h2 className="d-demo-block__title">禁用 - 加</h2>
      <Stepper
        defaultValue={2}
        step={2}
        disablePlus={true}
        onChange={handleChange}
      />
    </section>
  );
};

export default DemoUnit;