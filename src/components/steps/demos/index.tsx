import React, { Component, useState } from 'react'
import { ElasticBox, Button, Icon, Steps } from 'agile-mobile'

const Step = Steps.Step;

const DemoUnit = () => {

  const [current, setCurrent] = useState(0);

  const handleStep = () => {
    let newCurrent = current;

    ++newCurrent

    if (newCurrent > 3) newCurrent = 0;

    setCurrent(newCurrent);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">纵向</h2>
      <Steps current={current} status="process">
        <Step title="步骤1" description="这里是步骤1描述..." />
        <Step title="步骤2" description="这里是步骤2描述..." />
        <Step title="步骤3" description="这里是步骤3描述..." />
      </Steps>
      <Button block onClick={handleStep} style={{marginTop:15}}>下一步</Button>

      <h2 className="d-demo-block__title">横向</h2>
      <Steps current={current} direction="horizontal" status="process">
        <Step title="步骤1" description="这里是步骤1描述这里是步骤1描述这里是步骤1描述..." />
        <Step title="步骤2" description="这里是步骤2描述..." />
        <Step title="步骤3" description="这里是步骤3描述..." />
      </Steps>

      <h2 className="d-demo-block__title">横向-异常终止</h2>
      <Steps current={1} direction="horizontal" status="error">
        <Step title="步骤1" description="这里是步骤1描述..." />
        <Step title="步骤2" description="这里是步骤2描述..." />
        <Step title="步骤3" description="这里是步骤3描述..." />
      </Steps>

      <h2 className="d-demo-block__title">纵向-异常终止</h2>
      <Steps current={2} status="error">
        <Step title="步骤1" description="这里是步骤1描述..." />
        <Step title="步骤2" description="这里是步骤1描述..." />
        <Step title="步骤3" description="这里是步骤3描述..." />
        <Step title="步骤4" description="这里是步骤4描述..." icon={<Icon.CheckCircleFill />} />
      </Steps>

    </section>
  );
};

export default DemoUnit;