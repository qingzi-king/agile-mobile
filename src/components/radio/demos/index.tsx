import React from 'react'
import { Radio, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {

  const handleChange = (e?: any) => {
    console.log('已选择：', e);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">横向</h2>
      <h2 className="d-demo-block__subtitle">圆角</h2>
      <Radio.Group onChange={handleChange} value={3}>
        <Radio value={1}>单选框1</Radio>
        <Radio value={2}>单选框2</Radio>
        <Radio value={3}>单选框3</Radio>
      </Radio.Group>

      <h2 className="d-demo-block__subtitle">方块</h2>
      <Radio.Group onChange={handleChange} value={3}>
        <Radio value={1} shape="square">单选框1</Radio>
        <Radio value={2} shape="square">单选框2</Radio>
        <Radio value={3} shape="square">单选框3</Radio>
      </Radio.Group>

      <h2 className="d-demo-block__title">纵向</h2>
      <Radio.Group onChange={handleChange} activeColor="red" value={2} direction="vertical">
        <Radio value={1}>单选框1</Radio>
        <Radio value={2}>单选框2</Radio>
        <Radio value={3}>单选框3</Radio>
      </Radio.Group>

      <h2 className="d-demo-block__title">禁用</h2>
      <h2 className="d-demo-block__subtitle">部分禁用</h2>
      <Radio.Group onChange={handleChange} value={2}>
        <Radio value={1}>单选框1</Radio>
        <Radio value={2} disabled>单选框2</Radio>
        <Radio value={3}>单选框3</Radio>
      </Radio.Group>

      <h2 className="d-demo-block__subtitle">全部禁用</h2>
      <Radio.Group onChange={handleChange} activeColor="red" value={3} disabled>
        <Radio value={1}>单选框1</Radio>
        <Radio value={2}>单选框2</Radio>
        <Radio value={3}>单选框3</Radio>
      </Radio.Group>

    </section>
  );
};

export default DemoUnit;