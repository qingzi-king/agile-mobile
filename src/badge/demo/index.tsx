import React from 'react';
import { Badge } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Badge</div>
      </div>
      <section className="d-demo-content">
        <div className="d-demo-block">
          <Badge dot>
            <div style={{ width: '30px', height: '30px', background: '#ddd' }} />
          </Badge>
        </div>
        <div className="d-demo-block">
          <Badge text={77} overflowCount={55} />
        </div>
        <div className="d-demo-block">
          <Badge text={'new'} />
        </div>
        <div className="d-demo-block">
          <Badge text="减" />
          <Badge text="惠" style={{ marginLeft: 12 }} />
          <Badge text="免" style={{ marginLeft: 12 }} />
          <Badge text="反" style={{ marginLeft: 12 }} />
          <Badge text="hot" style={{ marginLeft: 12 }} />
        </div>
        <div className="d-demo-block">
          <Badge text="券" style={{ padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
          <Badge text="有机" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
          <Badge text="自动升级"
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736',
            }}
          />
        </div>
        <div className="d-demo-block">
          <Badge text={'促'} corner>
            <div style={{width:120,height:50,lineHeight:'50px'}}>新产品上新啦</div>
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default Demo;