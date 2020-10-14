import React, { useState } from 'react';
import { Steps, Icon, Button } from '../../index';
import '../style/index.less';

const Step = Steps.Step;

const Demo = () => {

  const [current, setCurrent] = useState(1);

  const handleStep = () => {
    let newCurrent = current;

    ++newCurrent

    if (newCurrent > 4) newCurrent = 0;

    setCurrent(newCurrent);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Steps</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">纵向</h2>
        <div className="d-demo-block">
          <Steps current={current}>
            <Step title="步骤1" description="这里是步骤1描述..." />
            <Step title="步骤2" description="这里是步骤2描述..." />
            <Step title="步骤3" description="这里是步骤3描述..." />
          </Steps>
          <Button block onClick={handleStep} style={{marginTop:15}}>下一步</Button>
        </div>
        <h2 className="d-demo-block__title">横向</h2>
        <div className="d-demo-block">
          <Steps current={current} direction="horizontal">
            <Step title="步骤1" description="这里是步骤1描述这里是步骤1描述这里是步骤1描述..." />
            <Step title="步骤2" description="这里是步骤2描述..." />
            <Step title="步骤3" description="这里是步骤3描述..." />
          </Steps>
        </div>
        <h2 className="d-demo-block__title">横向-异常终止</h2>
        <div className="d-demo-block">
          <Steps current={3} direction="horizontal" status="error">
            <Step title="步骤1" description="这里是步骤1描述..." />
            <Step title="步骤2" description="这里是步骤2描述..." />
            <Step title="步骤3" description="这里是步骤3描述..." />
          </Steps>
        </div>
        <h2 className="d-demo-block__title">纵向-异常终止</h2>
        <div className="d-demo-block">
          <Steps current={3} status="error">
            <Step title="步骤1" description="这里是步骤1描述..." />
            <Step title="步骤2" description="这里是步骤1描述..." />
            <Step title="步骤3" description="这里是步骤3描述..." />
            <Step title="步骤4" description="这里是步骤4描述..." icon={<Icon type="star" size="sm" />} />
          </Steps>
        </div>
      </section>
    </div>
  );
};

export default Demo;