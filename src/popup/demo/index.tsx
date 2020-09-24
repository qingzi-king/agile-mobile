import React from 'react';
import { Popup, Button } from '../../index';
import '../style/index.less';

let count = 0;

const Demo = () => {

  const handleVisiblePopup = (visible: boolean = true, closable: boolean = false, position: string = 'bottom') => {

    if (visible) {
      count++;
    } else {
      count--;
    }

    Popup({
      visible,
      position,
      closable,
      overlay: true,
      onClose: handleOncallback,
      children: (
        <div>
          <p style={{paddingTop: 15, textAlign: 'center'}}>你好，Agile</p>
          <p style={{textAlign: 'center'}}>这是第个{ count }弹出层</p>
          <div className="d-demo-block">
            <Button block onClick={() => handleVisiblePopup(true, false, 'top')}>再弹一个顶部popup</Button>
          </div>
          <div className="d-demo-block">
            <Button type="primary" block onClick={() => handleVisiblePopup(false)}>关闭</Button>
          </div>
        </div>
      ),
    });

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
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, false, 'top')}>顶部弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, true, 'bottom')}>底部弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, false, 'left')}>左边弹出</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleVisiblePopup(true, false, 'right')}>右边弹出</Button>
          {/* <Popup position="bottom" visible={visible} onClose={handleVisiblePopup}><div><span>你好，重庆</span><span>你好，北京</span></div></Popup> */}
        </div>
      </section>
    </div>
  );
};

export default Demo;