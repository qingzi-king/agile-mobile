import React from 'react';
import { Radio, Toast, Icon } from '../../index';
import '../style/index.less';
console.log(Radio);

const Demo = () => {

  const handleClose = () => {
    Toast.info({ content: '标签已触发关闭', duration: 500 });
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Radio</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <Radio.Group>
            <Radio.Item>斤斤计较所多扩军女死多</Radio.Item>
            <Radio.Item>斤斤计较所多扩军女死多</Radio.Item>
            <Radio.Item>斤斤计较所多扩军女死多</Radio.Item>
            <Radio.Item>斤斤计较所多扩军女死多</Radio.Item>
          </Radio.Group>
        </div>
      </section>
    </div>
  );
};

export default Demo;