import React from 'react';
import { Popup, Button } from '../../index';
import '../style/index.less';

let count = 0;

const Demo = () => {

  const handleVisiblePopup = (
    visible: boolean = true,
    position: string = 'bottom',
    closable: boolean = false,
    overlay: boolean = true,
    radius: boolean = false,
  ) => {

    if (visible) {
      count++;
    } else {
      count--;
    }

    let res = Popup({
      visible,
      position,
      closable,
      overlay,
      radius,
      onClose: handleOncallback,
      children: (
        <div>
          <p style={{paddingTop: 15, textAlign: 'center'}}>你好，Agile</p>
          <p style={{textAlign: 'center'}}>这是第个{ count }弹出层</p>
          <div className="d-demo-block">
            <Button block onClick={() => handleVisiblePopup(true, 'top')}>再弹一个顶部popup</Button>
          </div>
          <div className="d-demo-block">
            <Button type="primary" block onClick={() => handleVisiblePopup(false, position)}>关闭</Button>
          </div>
        </div>
      ),
    });

    const handleClose = () => {
      if (res) {
        res.close();
      }
    }

  }

  const handleOncallback = (e: any) => {
    console.log('关闭了popup：', e);
    if (count < 1) {
      count = 0;
    } else {
      count--;
    }
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Popup</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">弹出方位</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'top')}>顶部弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'bottom', true)}>底部弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'left')}>左边弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'right')}>右边弹出</Button>
        </div>
        <h2 className="d-demo-block__title">扩展</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'bottom', false, false)}>底部弹出<small>（背景透明）</small></Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, 'bottom', false, true, true)}>底部弹出<small>（边缘圆角）</small></Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;