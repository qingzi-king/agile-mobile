import React from 'react';
import { Stepper } from '../../index';
import '../style/index.less';

const Demo = () => {

  const handleChange = (e?: any) => {
    console.log(e);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Stepper</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">仅支持整数<small>（输入框仅读）</small></h2>
        <div className="d-demo-block" style={{background:'#FFF',padding:15}}>
          <Stepper
            defaultValue={3}
            max={10}
            min={0}
            readOnly
            integer={true}
            onChange={handleChange}
          />
        </div>
        <h2 className="d-demo-block__title">支持浮点数</h2>
        <div className="d-demo-block" style={{background:'#FFF',padding:15}}>
          <Stepper
            defaultValue={2}
            max={9}
            min={1}
            step={0.05}
            decimal={2}
            onChange={handleChange}
          />
        </div>
        <h2 className="d-demo-block__title">无限值</h2>
        <div className="d-demo-block" style={{background:'#FFF',padding:15}}>
          <Stepper
            defaultValue={2}
            step={2}
            onChange={handleChange}
          />
        </div>
        <h2 className="d-demo-block__title">禁用</h2>
        <div className="d-demo-block" style={{background:'#FFF',padding:15}}>
          <Stepper
            defaultValue={2}
            step={2}
            disabled
            onChange={handleChange}
          />
        </div>
        <h2 className="d-demo-block__title">禁用 - 加</h2>
        <div className="d-demo-block" style={{background:'#FFF',padding:15}}>
          <Stepper
            defaultValue={2}
            step={2}
            disablePlus={true}
            onChange={handleChange}
          />
        </div>
      </section>
    </div>
  );
};

export default Demo;