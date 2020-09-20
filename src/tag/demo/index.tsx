import React from 'react';
import { Tag, Toast, Icon } from '../../index';
import '../style/index.less';

const Demo = () => {

  const handleClose = () => {
    Toast.info({ content: '标签已触发关闭', duration: 500 });
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Tag</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <Tag type="primary" style={{marginRight:15}}>标签</Tag>
          <Tag type="warning" style={{marginRight:15}}>标签</Tag>
          <Tag type="danger" style={{marginRight:15}}>标签</Tag>
          <Tag type="success" style={{marginRight:15}}>标签</Tag>
        </div>

        <h2 className="d-demo-block__title">空心</h2>
        <div className="d-demo-block">
          <Tag type="primary" hairline style={{marginRight:15}}>标签</Tag>
          <Tag type="warning" hairline style={{marginRight:15}}>标签</Tag>
          <Tag type="danger" hairline style={{marginRight:15}}>标签</Tag>
          <Tag type="success" hairline style={{marginRight:15}}>标签</Tag>
        </div>

        <h2 className="d-demo-block__title">圆角</h2>
        <div className="d-demo-block">
          <Tag type="primary" round style={{marginRight:15}}>标签</Tag>
          <Tag type="warning" round style={{marginRight:15}}>标签</Tag>
          <Tag type="danger" round style={{marginRight:15}}>标签</Tag>
          <Tag type="success" round style={{marginRight:15}}>标签</Tag>
        </div>

        <h2 className="d-demo-block__title">关闭</h2>
        <div className="d-demo-block">
          <Tag type="primary" closeable onClose={handleClose} style={{marginRight:15}}>标签</Tag>
          <Tag type="primary" hairline closeable onClose={handleClose} style={{marginRight:15}}>标签</Tag>
          <Tag type="primary" hairline round closeable onClose={handleClose} style={{marginRight:15}}>标签</Tag>
        </div>

        <h2 className="d-demo-block__title">尺寸</h2>
        <div className="d-demo-block">
          <Tag type="primary" size="lg" style={{marginRight:15}}>大标签</Tag>
          <Tag type="primary" size="md" style={{marginRight:15}}>中标签</Tag>
          <Tag type="primary" size="xs" style={{marginRight:15}}>小标签</Tag>
        </div>

        <h2 className="d-demo-block__title">自定义图标</h2>
        <div className="d-demo-block">
          <Tag type="primary" icon={<Icon type="star" size="xxs" />} style={{marginRight:15}}>标签</Tag>
        </div>

        <h2 className="d-demo-block__title">禁用</h2>
        <div className="d-demo-block">
          <Tag type="primary" disabled onClose={handleClose} style={{marginRight:15}}>标签</Tag>
          <Tag type="primary" closeable disabled onClose={handleClose} style={{marginRight:15}}>标签</Tag>
          <Tag type="primary" hairline round closeable disabled onClose={handleClose} style={{marginRight:15}}>标签</Tag>
        </div>

      </section>
    </div>
  );
};

export default Demo;