import React from 'react';
import { ShareSheet, Button, Toast } from '../../index';
import '../style/index.less';

const Demo = () => {

  const handleOnCancel = () => {
    console.log('已关闭');
  }

  const handleOnSelect = (e: any) => {
    Toast.info({ content: e.name, duration: 500 });
  }

  const handleShareSheet = () => {

    ShareSheet({
      title: "立即分享给好友",
      description: '这里添加描述信息',
      cancelText: '取消分享',
      onCancel: handleOnCancel,
      onSelect: handleOnSelect,
      options: [
        { name: '微信', src: 'http://docs.antjob.ink/agile-ui/icon/wechat.png' },
        { name: 'QQ', src: 'http://docs.antjob.ink/agile-ui/icon/qq.png' },
        { name: '微博', src: 'http://docs.antjob.ink/agile-ui/icon/weibo.png' },
        { name: '自定义1', src: 'http://docs.antjob.ink/agile-ui/icon/book.png' },
        { name: '自定义2', src: 'http://docs.antjob.ink/agile-ui/icon/structure.png' },
        { name: '自定义3', src: 'http://docs.antjob.ink/agile-ui/icon/target.png' },
      ]
    });
  }

  const handleMultiLineShareSheet = () => {

    ShareSheet({
      title: "立即分享给好友",
      description: '这里添加描述信息',
      cancelText: '取消分享',
      onCancel: handleOnCancel,
      onSelect: handleOnSelect,
      maskClosable: false,
      transparent: true,
      radius: true,
      options: [
        [
          { name: '微信', src: 'http://docs.antjob.ink/agile-ui/icon/wechat.png' },
          { name: 'QQ', src: 'http://docs.antjob.ink/agile-ui/icon/qq.png' },
          { name: '微博', src: 'http://docs.antjob.ink/agile-ui/icon/weibo.png' },
        ],
        [
          { name: '自定义1', src: 'http://docs.antjob.ink/agile-ui/icon/book.png' },
          { name: '自定义2', src: 'http://docs.antjob.ink/agile-ui/icon/structure.png' },
          { name: '自定义3', src: 'http://docs.antjob.ink/agile-ui/icon/target.png' },
        ]
      ]
    });
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">ShareSheet</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">单行</h2>
        <div className="d-demo-block">
          <Button onClick={handleShareSheet} block>打开分享面板</Button>
        </div>
        <h2 className="d-demo-block__title">多行</h2>
        <div className="d-demo-block">
          <Button onClick={handleMultiLineShareSheet} block>打开分享面板</Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;