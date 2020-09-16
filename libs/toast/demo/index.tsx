import React from 'react';
import { Toast, Button, Icon } from '../../index';
import '../index.less';
import './index.less';

const Demo = () => {

  const handleToast = (type: string, content: any, duration?: number, position?: string) => {

    switch (type) {
      case 'success':
        Toast.success({ content, duration, onClose: cb });
        break;
      case 'fail':
        Toast.fail({ content, duration, onClose: cb });
        break;
      case 'offline':
        Toast.offline({ content, duration, onClose: cb });
        break;
      case 'customIcon':
        Toast.offline({ content, duration, onClose: cb, icon: <Icon type="star" size="lg" /> });
        break;
      case 'loading':
        Toast.loading({ content, duration, onClose: cb });
        break;
      default:
        Toast.info({ content, duration, position, onClose: cb });
        // setTimeout(() => {
        //   Toast.info('二次加载...', 1000, position, cb);
        // }, 500)
        break;
    }

  }

  const cb = () => {
    console.log('这是回调')
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Toast</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础类型</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是纯文本提示！', 500)}>仅文本</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleToast('loading', '数据加载中', 500)}>加载</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleToast('success', '处理成功', 500)}>成功</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleToast('fail', '处理失败', 500)}>失败</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleToast('offline', '网络异常', 500)}>网络异常</Button>
        </div>

        <h2 className="d-demo-block__title">自定义图标</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={() => handleToast('customIcon', '自定义图标', 500)}>自定义图标</Button>
        </div>

        <h2 className="d-demo-block__title">自定义位置</h2>
        <div className="d-demo-block">
          <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是顶部展示！', 500, 'top')}>顶部</Button>
          <Button block className="d-demo-margin-block" onClick={() => handleToast('', '这是底部展示！', 500, 'bottom')}>底部</Button>
        </div>

      </section>
    </div>
  );
};

export default Demo;