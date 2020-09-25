import React from 'react';
import { NavBar, Icon } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">NavBar</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">浅色 light</h2>
        <div style={{margin:'15px 0'}}>
          <NavBar
            mode="light"
            icon={<Icon type="arrow-left" />}
            onLeftClick={() => console.log('onLeftClick')}
            leftContent={<span>返回</span>}
            rightContent={[
              <Icon key="1" type="ellipsis" />
            ]}
            title="标题"
          />
        </div>
        <h2 className="d-demo-block__title">深色 dark</h2>
        <div style={{margin:'15px 0'}}>
          <NavBar
            icon={<Icon type="arrow-left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
            title="标题"
          />
        </div>
        <h2 className="d-demo-block__title">浅色 light 容器</h2>
        <div style={{margin:'15px 0'}}>
          <NavBar
            mode="light"
            icon={<Icon type="arrow-left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
            title="标题..."
          >标题</NavBar>
        </div>
        <h2 className="d-demo-block__title">浅色 light fixed</h2>
        <div style={{margin:'15px 0'}}>
          <NavBar
            mode="light"
            title="NavBar"
            fixed
            placeholder
          />
        </div>
      </section>
    </div>
  );
};

export default Demo;