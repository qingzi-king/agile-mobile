import React, { useState } from 'react';
import { CheckBox, List } from '../../index';
import '../style/index.less';

const Demo = () => {

  const [values, setValues] = useState([1, 2]);

  const handleChange = (e?: any) => {
    console.log('已选择：', e);
  }

  const handleListChange = (e?: any) => {

    let newSelectedValues = [ ...values ];

    let hasValue = newSelectedValues.findIndex((v: any) => { return v === e });

    if (hasValue != -1) {
      // 移除
      newSelectedValues.splice(hasValue, 1)
    } else {
      // 新增
      newSelectedValues.push(e);
    }
    console.log('已选择：', newSelectedValues);
    setValues(newSelectedValues);
  }

  const datas = [
    { value: 0, label: '这是标题1' },
    { value: 1, label: '这是标题2', describe: '此项已被禁用', disabled: true },
    { value: 2, label: '这是标题3' },
    { value: 3, label: '这是标题4' },
  ];

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">CheckBox</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">横向</h2>
        <h2 className="d-demo-block__subtitle">圆角</h2>
        <div className="d-demo-block">
          <CheckBox.Group onChange={handleChange} values={[3]}>
            <CheckBox.Item value={1}>复选框1</CheckBox.Item>
            <CheckBox.Item value={2}>复选框2</CheckBox.Item>
            <CheckBox.Item value={3} disabled>复选框3</CheckBox.Item>
          </CheckBox.Group>
        </div>
        <h2 className="d-demo-block__subtitle">方块</h2>
        <div className="d-demo-block">
          <CheckBox.Group onChange={handleChange} values={[3]}>
            <CheckBox.Item value={1} shape="square">复选框1</CheckBox.Item>
            <CheckBox.Item value={2} shape="square">复选框2</CheckBox.Item>
            <CheckBox.Item value={3} shape="square">复选框3</CheckBox.Item>
          </CheckBox.Group>
        </div>
        <h2 className="d-demo-block__title">纵向</h2>
        <div className="d-demo-block">
          <CheckBox.Group onChange={handleChange} activeColor="red" values={[2]} direction="vertical">
            <CheckBox.Item value={1} shape="square">复选框1</CheckBox.Item>
            <CheckBox.Item value={2} shape="square">复选框2</CheckBox.Item>
            <CheckBox.Item value={3} shape="square">复选框3</CheckBox.Item>
          </CheckBox.Group>
        </div>
        <h2 className="d-demo-block__title">禁用</h2>
        <h2 className="d-demo-block__subtitle">部分禁用</h2>
        <div className="d-demo-block">
          <CheckBox.Group onChange={handleChange} values={[1]}>
            <CheckBox.Item value={1}>复选框1</CheckBox.Item>
            <CheckBox.Item value={2} disabled>复选框2</CheckBox.Item>
            <CheckBox.Item value={3} shape="square">复选框3</CheckBox.Item>
          </CheckBox.Group>
        </div>
        <h2 className="d-demo-block__subtitle">全部禁用</h2>
        <div className="d-demo-block">
          <CheckBox.Group onChange={handleChange} activeColor="red" disabled values={[2]}>
            <CheckBox.Item value={1}>复选框1</CheckBox.Item>
            <CheckBox.Item value={2} shape="square">复选框2</CheckBox.Item>
            <CheckBox.Item value={3}>复选框3</CheckBox.Item>
          </CheckBox.Group>
        </div>
        <List renderHeader={() => <span>输入项<small>（与List结合）</small></span>}>
          {
            datas.map((data, i) => {
            return (
                <CheckBox.ListItem
                  key={data.value}
                  checked={values.includes(data.value)}
                  describe={data.describe}
                  onChange={() => handleListChange(data.value)}
                  disabled={data.disabled || false}
                >
                  {data.label}
                </CheckBox.ListItem>
              )
            })
          }
        </List>
      </section>
    </div>
  );
};

export default Demo;