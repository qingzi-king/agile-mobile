import React from 'react'
import { Collapse } from 'agile-mobile'

const DemoUnit = () => {

  const handleOnChange = (e: any) => {
    console.log(e);
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础用法</h2>
      <Collapse
        onChange={handleOnChange}
        activeKeys={['4']}
      >
        <Collapse.Panel key="1" title="标题1" extra="这是值" showArrow>
          <div>这里是描述...</div>
        </Collapse.Panel>
        <Collapse.Panel key="2" title="标题2" extra="已禁用" showArrow disabled>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Collapse.Panel>
        <Collapse.Panel key="3" title="标题3" extra="罗曼.罗兰" showArrow>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Collapse.Panel>
        <Collapse.Panel key="4" title="标题4" extra="这是值" showArrow>默认展开面板，这里是描述...</Collapse.Panel>
      </Collapse>
      <h2 className="d-demo-block__title">手风琴模式</h2>
      <Collapse
        accordion
        activeKeys={[]}
        onChange={handleOnChange}
      >
        <Collapse.Panel key="1" title="标题1" extra="这是值" showArrow>
          <div>这里是描述...</div>
        </Collapse.Panel>
        <Collapse.Panel key="2" title="标题2" extra="这是值" showArrow>这里是描述...</Collapse.Panel>
        <Collapse.Panel key="3" title="标题3" extra="罗曼.罗兰" showArrow>人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。</Collapse.Panel>
      </Collapse>
    </section>
  );
};

export default DemoUnit;