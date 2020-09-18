import React, { useState } from 'react';
import { Progress, Button } from '../../index';
import '../style/index.less';

const Demo = () => {

  const [ percent, setPercent ] = useState(10);

  const handleAdd = () => {
    let count = percent + 10;
    if (count > 100) count = 100;
    setPercent(count);
  }

  const handleSubtract = () => {
    let count = percent - 10;
    if (count < 0) count = 0;
    setPercent(count);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Progress</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础类型</h2>
        <div className="d-demo-block-lg">
          <Progress percent={percent} unfilled={false} />
        </div>
        <div className="d-demo-block-lg">
          <Progress percent={percent} info />
        </div>
        <div className="d-demo-block-lg">
          <Progress percent={percent} sliderWidth={5} />
        </div>
        <div className="d-demo-block-lg">
          <Progress percent={percent} sliderWidth={5} sliderColor="#6FC643" textColor="#6FC643" info />
        </div>
        <div className="d-demo-block-lg">
          <Progress percent={percent} inactive sliderWidth={5} sliderColor="#6FC643" textColor="#6FC643" info />
        </div>
        <div className="d-demo-block-lg">
          <Button block onClick={handleAdd}>+ 增加</Button>
          <Button block onClick={handleSubtract} style={{marginTop:5}}>- 减少</Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;