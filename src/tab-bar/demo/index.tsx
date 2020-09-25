import React, { useState } from 'react';
import { TabBar, Button, Icon } from '../../index';
import '../style/index.less';

const Item = TabBar.Item;

const Demo = () => {

  const [activeKey, setActiveKey] = useState('');

  const handleChange = (e: any) => {
    if (activeKey !== e) {
      console.log('触发了key：', e)
      setActiveKey(e);
    } else {
      console.log('重复触发了key：', e)
    }
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">TabBar</div>
      </div>

      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>

        <TabBar onClick={handleChange} activeKey={activeKey} selectedColor="red">
          <Item key="1-1" title="标签" icon="home" />
          <Item key="1-2" title="标签" icon="persons" />
          <Item key="1-3" title="标签" icon="department" />
          <Item key="1-4" title="标签" icon={<Icon type="star-o" size="sm" />} />
        </TabBar>

        <Button block onClick={() => handleChange('1-4')} style={{marginTop:15}}>激活第4个tab</Button>

        <h2 className="d-demo-block__title">与Badge结合</h2>
        <TabBar onClick={handleChange} activeKey={activeKey} selectedColor="red">
          <Item key="3-1" title="标签" icon="home" dot />
          <Item key="3-2" title="标签" icon="persons" badge={2} />
          <Item key="3-3" title="标签" icon="department" badge={66} />
          <Item key="3-4" title="标签" icon={<Icon type="star-o" size="sm" />} badge={120} />
        </TabBar>

        <h2 className="d-demo-block__title">旋转激活</h2>
        <TabBar onClick={handleChange} activeKey={activeKey} selectedColor="red" rotate>
          <Item key="4-1" title="标签" icon="home" />
          <Item key="4-2" title="标签" icon="persons" />
          <Item key="4-3" title="标签" icon="department" />
          <Item key="4-4" title="标签" icon={<Icon type="star-o" size="sm" />} />
        </TabBar>

        <h2 className="d-demo-block__title">自定义图标</h2>
        <TabBar onClick={handleChange} activeKey={activeKey}>
          <Item key="2-1" title="标签" icon={<img width="20" src="https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg" alt="w" />} />
          <Item key="2-2" title="标签" icon={<img width="20" src="https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg" alt="w" />} />
          <Item key="2-3" title="标签" icon={<img width="20" src="https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg" alt="w" />} />
        </TabBar>

      </section>
    </div>
  );
};

export default Demo;