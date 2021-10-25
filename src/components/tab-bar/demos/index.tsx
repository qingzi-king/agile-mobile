import React, { useState } from 'react'
import { TabBar, Icon, Button } from 'agile-mobile'

const Item = TabBar.Item;

const DemoUnit = () => {

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
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>

      <TabBar onClick={handleChange} activeKey={activeKey} selectedColor="red">
        <Item key="1-1" title="标签" icon={<Icon.HomeOutline />} />
        <Item key="1-2" title="标签" icon={<Icon.PersonOutline />} />
        <Item key="1-3" title="标签" icon={<Icon.DepartmentOutline />} />
        <Item key="1-4" title="标签" icon={<Icon.StarOutline />} />
      </TabBar>

      <Button block onClick={() => handleChange('1-4')} style={{marginTop:15}}>激活第4个tab</Button>

      <h2 className="d-demo-block__title">与Badge结合</h2>
      <TabBar onClick={handleChange} activeKey={activeKey} selectedColor="red">
        <Item key="3-1" title="标签" icon={<Icon.HomeOutline />} dot />
        <Item key="3-2" title="标签" icon={<Icon.PersonOutline />} badge={2} />
        <Item key="3-3" title="标签" icon={<Icon.DepartmentOutline />} badge={66} />
        <Item key="3-4" title="标签" icon={<Icon.StarOutline />} badge={120} />
      </TabBar>

      <h2 className="d-demo-block__title">自定义图标</h2>
      <TabBar onClick={handleChange} activeKey={activeKey}>
        <Item key="2-1" title="标签" icon={<img width="20" src="https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg" alt="w" />} />
        <Item key="2-2" title="标签" icon={<img width="20" src="https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg" alt="w" />} />
        <Item key="2-3" title="标签" icon={<img width="20" src="https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg" alt="w" />} />
      </TabBar>

    </section>
  );
};

export default DemoUnit;