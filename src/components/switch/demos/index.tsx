import React, { Component } from 'react'
import { Switch, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {

  const handleClick = (e:any) => {
    console.log('click：', e);
  }

  const handleChange = (e:any) => {
    console.log('change：', e);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>
      <Switch checked onChange={handleChange} />

      <h2 className="d-demo-block__title">自定义文本</h2>
      <ElasticBox wrap>
        <Switch checked checkedText="开" uncheckedText="关" />
        <Switch checkedText="1" uncheckedText="0" />
      </ElasticBox>

      <h2 className="d-demo-block__title">禁用状态</h2>
      <ElasticBox wrap>
        <Switch disabled checked checkedText="开" uncheckedText="关" />
        <Switch disabled checkedText="开" uncheckedText="关" />
      </ElasticBox>

      <h2 className="d-demo-block__title">加载状态</h2>
      <Switch loading checked checkedText="开" uncheckedText="关" onClick={handleClick} />

      <h2 className="d-demo-block__title">自定义颜色</h2>
      <Switch
        checked
        checkedText="开"
        uncheckedText="关"
        checkedColor="#FFF"
        uncheckedColor="#FFF"
        checkedBackGround="#07C160"
        uncheckedBackGround="#FF0000"
      />
    </section>
  );
};

export default DemoUnit;