import React, { Component } from 'react'
import { Dialog, Button, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {
  const handleVisiblePopup0 = () => {

    Dialog.alert({
      title: '标题',
      message: (
        <div>
          <p>这里是内容区域1...</p>
          <p>这里是内容区域2...</p>
        </div>
      ),
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

    Dialog.alert({
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

    Dialog.alert({
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

    Dialog.alert({
      title: '标题',
      message: (
        <div>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...</p>
          <p>这里是内容区域...2</p>
        </div>
      ),
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

    Dialog.alert({
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

    Dialog.operation({
      actions: [
        {
          text: '按钮1',
          color: 'var(--fam-color-primary)',
          onPress: () => {
            console.log('点击了按钮1');
          }
        },
        {
          text: '异步',
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

  const handleVisiblePopup6 = () => {

    Dialog.operation({
      actions: [
        {
          text: '按钮1',
          color: 'var(--fam-color-primary)',
          onPress: () => {
            console.log('点击了按钮1');
          }
        },
        {
          text: <span>按钮2<small>（禁用）</small></span>,
          color: 'red',
          disabled: true,
          onPress: () => {
            console.log('点击了按钮2');
          }
        },
        {
          text: <span style={{color: '#fa541c'}}>按钮3<small>（自定义样式）</small></span>,
          onPress: () => {
            console.log('点击了按钮3');
          }
        }
      ]
    });

  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础</h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={handleVisiblePopup0}>提示弹框<small>（背景不可关闭）</small></Button>
        <Button block onClick={handleVisiblePopup1}>确认弹框</Button>
        <Button block onClick={handleVisiblePopup2}>提示弹框<small>（无标题）</small></Button>
        <Button block onClick={handleVisiblePopup3}>提示弹框<small>（超过2个按钮）</small></Button>
        <Button block onClick={handleVisiblePopup4}>异步关闭</Button>
      </ElasticBox>
      <h2 className="d-demo-block__title">操作<small>（自定义样式）</small></h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={handleVisiblePopup6}>操作弹框</Button>
      </ElasticBox>
    </section>
  );
};

export default DemoUnit;