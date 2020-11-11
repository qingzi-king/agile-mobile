import React, { useState, createRef } from 'react';
import Button from '../../button';
import { CountDown } from '../../index';
import '../style/index.less';

const Demo = () => {

  let targetTimestamp1 = 3 * 60 * 60 * 1000; // 毫秒
  let targetTimestamp2 = 30 * 1000; // 毫秒
  let targetTimestamp3 = 30 * 60 * 60 * 1000; // 毫秒

  const handleFinish = (e: any) => {
    console.log('倒计时终止了', e);
  }

  // const handleChange = (e: any) => {
  //   console.log('变更', e);
  // }

  const [childRef] = useState<any>(createRef());

  const handleStart = () => {
    if (childRef && childRef.current && childRef.current.start) {
      childRef.current.start();
    }
  }

  const handlePause = () => {
    if (childRef && childRef.current && childRef.current.pause) {
      childRef.current.pause();
    }
  }

  const handleReset = () => {
    if (childRef && childRef.current && childRef.current.reset) {
      childRef.current.reset();
    }
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">CountDown</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <CountDown time={targetTimestamp1} />
        </div>
        <h2 className="d-demo-block__title">自定义格式</h2>
        <div className="d-demo-block">
          <CountDown time={targetTimestamp3} millisecond format="DD 天 HH 时 mm 分 ss 秒 SSS 毫秒" />
        </div>
        <h2 className="d-demo-block__title">自定义样式</h2>
        <div className="d-demo-block">
          <CountDown className="d-demo-count-down" time={targetTimestamp1} millisecond freeStyle format="HH:mm:ss:SSS" />
        </div>
        <h2 className="d-demo-block__title">外部控制</h2>
        <div className="d-demo-block">
          <CountDown time={targetTimestamp2} autoStart={false} format="mm:ss:SSS" millisecond onFinish={handleFinish} childRef={childRef} />
        </div>
        <div className="d-demo-block">
          <Button inline onClick={handleStart} style={{marginRight:15}}>开始</Button>
          <Button inline onClick={handlePause} style={{marginRight:15}}>暂停</Button>
          <Button inline onClick={handleReset}>重置</Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;