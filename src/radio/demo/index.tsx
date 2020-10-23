import React, { useState } from 'react';
import { Radio, List } from '../../index';
import '../style/index.less';

const Demo = () => {

  const [value, setValue] = useState(0);

  const handleChange = (e?: any) => {
    console.log('已选择：', e);
  }

  const handleListChange = (e?: any) => {
    console.log('已选择：', e);
    setValue(e);
  }

  const datas = [
    { value: 0, label: '这是标题1' },
    { value: 1, label: '这是标题2', describe: '此项已被禁用', disabled: true },
    { value: 2, label: '这是标题3' },
  ];

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Radio</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">横向</h2>
        <h2 className="d-demo-block__subtitle">圆角</h2>
        <div className="d-demo-block">
          <Radio.Group onChange={handleChange} value={3}>
            <Radio.Item value={1}>单选框1</Radio.Item>
            <Radio.Item value={2}>单选框2</Radio.Item>
            <Radio.Item value={3}>单选框3</Radio.Item>
          </Radio.Group>
        </div>
        <h2 className="d-demo-block__subtitle">方块</h2>
        <div className="d-demo-block">
          <Radio.Group onChange={handleChange} value={3}>
            <Radio.Item value={1} shape="square">复选框1</Radio.Item>
            <Radio.Item value={2} shape="square">复选框2</Radio.Item>
            <Radio.Item value={3} shape="square">复选框3</Radio.Item>
          </Radio.Group>
        </div>
        <h2 className="d-demo-block__title">纵向</h2>
        <div className="d-demo-block">
          <Radio.Group onChange={handleChange} activeColor="red" value={2} direction="vertical">
            <Radio.Item value={1}>单选框1</Radio.Item>
            <Radio.Item value={2}>单选框2</Radio.Item>
            <Radio.Item value={3}>单选框3</Radio.Item>
          </Radio.Group>
        </div>
        <h2 className="d-demo-block__title">禁用</h2>
        <h2 className="d-demo-block__subtitle">部分禁用</h2>
        <div className="d-demo-block">
          <Radio.Group onChange={handleChange} value={2}>
            <Radio.Item value={1}>单选框1</Radio.Item>
            <Radio.Item value={2} disabled>单选框2</Radio.Item>
            <Radio.Item value={3}>单选框3</Radio.Item>
          </Radio.Group>
        </div>
        <h2 className="d-demo-block__subtitle">全部禁用</h2>
        <div className="d-demo-block">
          <Radio.Group onChange={handleChange} activeColor="red" value={3} disabled>
            <Radio.Item value={1}>单选框1</Radio.Item>
            <Radio.Item value={2}>单选框2</Radio.Item>
            <Radio.Item value={3} shape="square">单选框3</Radio.Item>
          </Radio.Group>
        </div>

        <List renderHeader={() => <span>输入项<small>（与List结合）</small></span>}>
          {
            datas.map((data, i) => {
            return (
                <Radio.ListItem
                  key={data.value}
                  checked={value === data.value} describe={data.describe}
                  onChange={() => handleListChange(data.value)}
                  disabled={data.disabled || false}
                >
                  {data.label}
                </Radio.ListItem>
              )
            })
          }
        </List>

      </section>
    </div>
  );
};

export default Demo;