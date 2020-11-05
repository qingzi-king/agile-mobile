import React from 'react';
import { PasswordInput } from '../../index';
import '../style/index.less';

const Demo = () => {

  const handleChange = (e: any) => {
    console.log(e);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">PasswordInput</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本<small>（含默认值）</small></h2>
        <div className="d-demo-block">
          <PasswordInput defaultValues={[1,2]} onChange={handleChange} />
        </div>
        <h2 className="d-demo-block__title">明文显示</h2>
        <div className="d-demo-block">
          <PasswordInput mask={false} onChange={handleChange} />
        </div>
        <h2 className="d-demo-block__title">自定义长度<small>（含下划线模式）</small></h2>
        <div className="d-demo-block">
          <PasswordInput maxLength={4} type="simple" underline onChange={handleChange} />
        </div>
      </section>
    </div>
  );
};

export default Demo;