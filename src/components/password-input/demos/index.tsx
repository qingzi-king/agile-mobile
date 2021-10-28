import React, { Component } from 'react'
import { PasswordInput } from 'agile-mobile'

const DemoUnit = () => {

  const handleChange = (e: any) => {
    console.log(e);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本<small>（含默认值）</small></h2>
      <PasswordInput defaultValues={[1,2]} onChange={handleChange} />

      <h2 className="d-demo-block__title">明文显示</h2>
      <PasswordInput mask={false} onChange={handleChange} />

      <h2 className="d-demo-block__title">自定义长度<small>（含下划线模式）</small></h2>
      <PasswordInput maxLength={4} type="simple" underline onChange={handleChange} />
    </section>
  );
};

export default DemoUnit;