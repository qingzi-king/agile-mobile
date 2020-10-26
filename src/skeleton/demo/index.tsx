import React from 'react';
import { Skeleton } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Skeleton</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block d-demo-bg-white">
          <Skeleton row={2} avatar title round />
        </div>
        <h2 className="d-demo-block__title">多实例</h2>
        <div className="d-demo-block d-demo-bg-white">
          <Skeleton row={3} avatar title loops={2} />
        </div>
      </section>
    </div>
  );
};

export default Demo;