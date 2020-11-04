import React from 'react';
import { Switch } from '../../index';
import '../style/index.less';

const Demo = () => {

  const handleClick = (e:any) => {
    console.log('click：', e);
  }

  const handleChange = (e:any) => {
    console.log('change：', e);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Switch</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <Switch checked onChange={handleChange} />
        </div>
        <h2 className="d-demo-block__title">自定义文本</h2>
        <div className="d-demo-block">
          <Switch checked checkedText="开" uncheckedText="关" />
        </div>
        <div className="d-demo-block">
          <Switch checkedText="1" uncheckedText="0" />
        </div>
        <h2 className="d-demo-block__title">禁用状态</h2>
        <div className="d-demo-block">
          <Switch disabled checked checkedText="开" uncheckedText="关" />
        </div>
        <div className="d-demo-block">
          <Switch disabled checkedText="开" uncheckedText="关" />
        </div>
        <h2 className="d-demo-block__title">加载状态</h2>
        <div className="d-demo-block">
          <Switch loading checked checkedText="开" uncheckedText="关" onClick={handleClick} />
        </div>
        <h2 className="d-demo-block__title">自定义颜色</h2>
        <div className="d-demo-block">
          <Switch
            checked
            checkedText="开"
            uncheckedText="关"
            checkedColor="#FFF"
            uncheckedColor="#FFF"
            checkedBackGround="#07C160"
            uncheckedBackGround="#FF0000"
          />
        </div>
      </section>
    </div>
  );
};

export default Demo;