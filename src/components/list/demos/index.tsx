import React, { Component } from 'react'
import { List, Toast, Icon } from 'agile-mobile'

const Item = List.Item;

const DemoUnit = () => {

  const handleToast = (content: string) => {
    Toast.info({ content, duration: 500, position: 'top' })
  }

  return (
    <section className="d-demo-content" style={{padding: 0}}>
      <List renderHeader={() => '基础样式'}>
        <Item extra={'这是值内容这是值内容这是值内容这是值内容这是值内容'}>这是标题</Item>
        <Item arrow="horizontal">这是标题这是标题这是标题这是标题这是标题这是标题</Item>
        <Item extra={'这是值内容'} arrow="horizontal" onClick={() => handleToast('这是列表链接')}>这是标题这是标题这是标题这是标题这是标题这是标题</Item>
        <Item extra={'这是值内容'} describe={'这里是描述内容区域....'}>这是标题</Item>
        <Item disabled extra={'已禁用'}>这是标题</Item>
        <Item thumb={<Icon.CheckCircleFill style={{color:'#f3f3f3', fontSize: 24}} />} extra={'这是值内容'}>Title</Item>
        <Item thumb={<Icon.CheckCircleFill style={{color:'var(--fam-color-primary)', fontSize: 24}} />} extra={'这是值内容'} describe={'这里是描述内容区域....'}>Title</Item>
        <Item thumb={<Icon.CheckCircleFill style={{color:'#f3f3f3', fontSize: 24}} />} extra={'这是值内容'} describe={'这里是描述内容区域....这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容这里是描述内容'}>Title</Item>
      </List>
      <List renderHeader={() => '案例'}>
        <Item
          arrow="horizontal"
          extra={<span>2020-09-22 12:12:12</span>}
          onClick={() => handleToast('点击了李白')}
          describe={(
            <div>
              <div><b>行程：</b>重庆 -&gt; 峨眉山</div>
              <div><b>特殊需求：</b>建议当天晚上18:30 国航CU2345</div>
            </div>
          )}
        >李白</Item>
      </List>
    </section>
  );
};

export default DemoUnit;