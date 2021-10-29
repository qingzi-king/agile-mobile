import React, { Component } from 'react'
import { ShareSheet, Button, Toast, Icon } from 'agile-mobile'

const DemoUnit = () => {

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
          { name: '自定义3', icon: <Icon.OfflineOutline style={{fontSize: 50}} /> },
        ]
      ]
    });
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">单行</h2>
      <Button onClick={handleShareSheet} block>打开分享面板</Button>

      <h2 className="d-demo-block__title">多行</h2>
      <Button onClick={handleMultiLineShareSheet} block>打开分享面板</Button>
    </section>
  );
};

export default DemoUnit;