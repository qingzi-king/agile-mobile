import React from 'react';
import { Card } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Card</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div style={{padding: '0 10px'}}>
          <Card>
            <Card.Header
              title="这是标题"
              extra={<span>这是值</span>}
            />
            <Card.Body>
              <div>这是卡片内容...</div>
              <div>这是卡片内容...</div>
              <div>这是卡片内容...</div>
            </Card.Body>
            <Card.Footer content="这是底部内容" extra={<div>这是底部值</div>} />
          </Card>
        </div>
        <h2 className="d-demo-block__title">多内容圆角</h2>
        <div style={{padding: '0 10px'}}>
          <Card>
            <Card.Header
              title="这是标题"
              extra={<span>这是值</span>}
            />
            <Card.Body corner>
              <div>这是卡片内容1...</div>
              <div>这是卡片内容2...</div>
              <div>这是卡片内容3...</div>
              <div>这是卡片内容4...</div>
            </Card.Body>
            <Card.Footer content="这是底部内容" extra={<div>这是底部值</div>} />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Demo;