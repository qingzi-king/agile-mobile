import React, { useState } from 'react'
import { Progress, Button, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {

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
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础类型</h2>
      <ElasticBox wrap direction="vertical">
        <Progress percent={percent} unfilled={false} />
        <Progress percent={percent} info />
        <Progress percent={percent} sliderWidth={5} />
        <Progress percent={percent} sliderWidth={5} sliderColor="#6FC643" textColor="#6FC643" info />
        <Progress percent={percent} inactive sliderWidth={5} sliderColor="#6FC643" textColor="#6FC643" info />
        <Button block onClick={handleAdd}>+ 增加</Button>
        <Button block onClick={handleSubtract} style={{marginTop:5}}>- 减少</Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit;