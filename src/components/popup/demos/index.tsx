import React, { Component } from 'react'
import { Popup, Button, ElasticBox } from 'agile-mobile'

let count = 0;

const DemoUnit = () => {

  const handleVisiblePopup = (
    visible: boolean = true,
    position: any = 'bottom',
    closable: boolean = false,
    transparent: boolean = false,
    radius: boolean = false,
    maskClosable: boolean = true,
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
      transparent,
      radius,
      maskClosable,
      onClose: handleOncallback,
      children: (
        <div style={{padding: 5}}>
          <p style={{paddingTop: 15, textAlign: 'center'}}>你好，Agile</p>
          <p style={{textAlign: 'center'}}>这是第个{ count }弹出层</p>
          <ElasticBox wrap direction="vertical">
            <Button block color="default" fill="none" onClick={() => handleVisiblePopup(true, 'top')}>再弹一个顶部popup</Button>
            <Button color="primary" block onClick={() => handleClose()}>关闭</Button>
          </ElasticBox>
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
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">弹出方位</h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={() => handleVisiblePopup(true, 'top')}>顶部弹出</Button>
        <Button block onClick={() => handleVisiblePopup(true, 'bottom', true)}>底部弹出</Button>
        <Button block onClick={() => handleVisiblePopup(true, 'left')}>左边弹出</Button>
        <Button block onClick={() => handleVisiblePopup(true, 'right')}>右边弹出</Button>
      </ElasticBox>
      <h2 className="d-demo-block__title">扩展</h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={() => handleVisiblePopup(true, 'bottom', true, true)}>底部弹出<small>（蒙层透明）</small></Button>
        <Button block onClick={() => handleVisiblePopup(true, 'bottom', true, true, true)}>底部弹出<small>（边缘圆角）</small></Button>
        <Button block onClick={() => handleVisiblePopup(true, 'bottom', true, true, true, false)}>底部弹出<small>（蒙层不可关闭）</small></Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit;