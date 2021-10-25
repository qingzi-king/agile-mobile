import React, { useState, createRef } from 'react'
import { ElasticBox, CountDown, Button } from 'agile-mobile'

const DemoUnit = () => {

  let targetTimestamp1 = 3 * 60 * 60 * 1000; // 毫秒
  let targetTimestamp2 = 3 * 1000; // 毫秒
  let targetTimestamp3 = 30 * 60 * 60 * 1000; // 毫秒

  const handleFinish = (e: any) => {
    console.log('倒计时终止了', e);
  }

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
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>
      <CountDown time={targetTimestamp1} />

      <h2 className="d-demo-block__title">自定义格式</h2>
      <CountDown time={targetTimestamp3} millisecond format="DD 天 HH 时 mm 分 ss 秒 SSS 毫秒" />

      <h2 className="d-demo-block__title">自定义样式</h2>
      <CountDown className="d-demo-count-down" time={targetTimestamp1} millisecond freeStyle format="HH:mm:ss:SSS" />

      <h2 className="d-demo-block__title">外部控制</h2>
      <CountDown time={targetTimestamp2} autoStart={false} format="mm:ss:SSS" millisecond onFinish={handleFinish} childRef={childRef} />
      <ElasticBox wrap styles={{marginTop: 5}}>
        <Button size="small" onClick={handleStart} style={{marginRight:15}}>开始</Button>
        <Button size="small" onClick={handlePause} style={{marginRight:15}}>暂停</Button>
        <Button size="small" onClick={handleReset}>重置</Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit