import React from 'react';
import { Badge, List, Icon, Toast } from '../../index';
import '../style/index.less';

const Item = List.Item;

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Badge</div>
      </div>
      <section className="d-demo-content">

        <List renderHeader={() => '基础样式'}>
          <Item extra={<Badge dot><div style={{ width: '30px', height: '30px', background: '#ddd' }} /></Badge>}>实心微标</Item>
          <Item extra={<Badge text={77} />} arrow="horizontal" onClick={() => Toast.info({ content: '这是列表链接', duration: 500 })}>数字</Item>
          <Item extra={<Badge text={'new'} />}>文本1</Item>
          <Item extra={<Badge text={'减'} />}>文本2</Item>
          <Item extra={<Badge text="券" style={{ padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />}>样式自定义1</Item>
          <Item extra={<Badge text="有机" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />}>样式自定义2</Item>
          <Item extra={<Badge text="自动升级"
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736',
            }}
          />}>样式自定义3</Item>
        </List>
        <h2 className="d-demo-block__title">扩展</h2>
        <div className="d-demo-block">
          <Badge text={'促'} corner>
            <div style={{width:120,height:40,lineHeight:'40px'}}>新产品上新啦</div>
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default Demo;