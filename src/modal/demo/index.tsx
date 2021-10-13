import React from 'react';
import { Button, Modal } from '../../index';
import "../style/index.less"

const Demo = () => {

  const handleVisiblePopup0 = () => {

    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      maskClosable: false,
      actions: [
        {
          text: '知道了',
          color: 'red',
          onPress: () => {
            console.log('点击了确认');
          }
        }
      ]
    });

  }

  const handleVisiblePopup1 = () => {

    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      actions: [
        {
          text: '取消',
          onPress: () => {
            console.log('点击了取消');
          }
        },
        {
          text: '确认',
          color: 'red',
          onPress: () => {
            console.log('点击了确认');
          }
        }
      ]
    });

  }

  const handleVisiblePopup2 = () => {

    Modal.alert({
      message: '这里是内容区域...',
      actions: [
        {
          text: '取消',
          onPress: () => {
            console.log('点击了取消');
          }
        },
        {
          text: '确认',
          color: 'red',
          onPress: () => {
            console.log('点击了确认');
          }
        }
      ]
    });

  }

  const handleVisiblePopup3 = () => {

    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      direction: 'vertical',
      maskClosable: false,
      actions: [
        {
          text: '按钮1',
          color: 'red',
          onPress: () => {
            console.log('点击了按钮1');
          }
        },
        {
          text: '按钮2',
          color: 'red',
          onPress: () => {
            console.log('点击了按钮2');
          }
        },
        {
          text: '按钮3-异步',
          color: 'red',
          onPress: () => {
            console.log('点击了按钮3');
            return new Promise((resolve) => {
              setTimeout(resolve, 2000);
            })
          }
        }
      ]
    });

  }

  const handleVisiblePopup4 = () => {

    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      maskClosable: false,
      actions: [
        {
          text: '取消',
          onPress: () => {
            console.log('点击了取消');
          }
        },
        {
          text: '确认',
          color: 'red',
          onPress: () => {
            console.log('点击了确认');
            return new Promise((resolve) => {
              setTimeout(resolve, 2000);
            })
          }
        }
      ]
    });

  }

  const handleVisiblePopup5 = () => {

    Modal.operation({
      actions: [
        {
          text: '按钮1',
          color: 'red',
          onPress: () => {
            console.log('点击了按钮1');
          }
        },
        {
          text: <span>按钮2<small>（禁用）</small></span>,
          color: 'black',
          disabled: true,
          onPress: () => {
            console.log('点击了按钮2');
          }
        },
        {
          text: <span style={{color: '#fa541c'}}>按钮3<small>（自定义样式）</small></span>,
          color: 'red',
          onPress: () => {
            console.log('点击了按钮3');
          }
        }
      ]
    });

  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Modal</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup0}>提示弹框<small>（背景不可关闭）</small></Button>
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup1}>确认弹框</Button>
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup2}>提示弹框<small>（无标题）</small></Button>
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup3}>提示弹框<small>（超过2个按钮）</small></Button>
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup4}>异步关闭</Button>
        </div>
        <h2 className="d-demo-block__title">操作</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={handleVisiblePopup5}>操作弹框</Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;