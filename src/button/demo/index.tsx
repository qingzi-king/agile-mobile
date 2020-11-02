import React from 'react';
import { Button } from '../../index';
import '../style/index.less';

const LogContent = () => {
  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Button</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础类型</h2>
        <div className="d-demo-block">
          <Button className="d-demo-margin" type="primary" inline>Primary</Button>
          <Button className="d-demo-margin" type="success" inline>Success</Button>
          <Button className="d-demo-margin" type="warning" inline>Warning</Button>
          <Button className="d-demo-margin" type="danger" inline>Danger</Button>
          <Button className="d-demo-margin" type="dark" inline>Dark</Button>
          <Button className="d-demo-margin" type="default" inline>Default</Button>
          <Button className="d-demo-margin" type="link" inline>Link</Button>
        </div>

        <h2 className="d-demo-block__title">尺寸</h2>
        <div className="d-demo-block">
          <Button className="d-demo-margin" type="primary" size="large" inline>Primary Large</Button>
          <Button className="d-demo-margin" type="primary" size="default" inline>Primary Default</Button>
          <Button className="d-demo-margin" type="primary" size="small" inline>Primary Small</Button>
          <Button className="d-demo-margin" type="primary" block>Primary block</Button>
        </div>

        <h2 className="d-demo-block__title">细边框</h2>
        <div className="d-demo-block">
          <Button className="d-demo-margin" type="primary" inline hairline>Primary Hairline</Button>
          <Button className="d-demo-margin" type="success" inline hairline>Success Hairline</Button>
          <Button className="d-demo-margin" type="warning" inline hairline>Warning Hairline</Button>
          <Button className="d-demo-margin" type="danger" inline hairline>Danger Hairline</Button>
          <Button className="d-demo-margin" type="dark" inline hairline>Dark Hairline</Button>
          <Button className="d-demo-margin" type="default" inline hairline dashed>Default Hairline</Button>
          <Button className="d-demo-margin" type="link" inline hairline>Link Hairline</Button>
        </div>

        <h2 className="d-demo-block__title">禁用</h2>
        <div className="d-demo-block">
          <Button className="d-demo-margin" type="primary" inline disabled>Primary</Button>
          <Button className="d-demo-margin" type="success" inline disabled>Success</Button>
          <Button className="d-demo-margin" type="warning" inline disabled>Warning</Button>
          <Button className="d-demo-margin" type="danger" inline disabled >Danger</Button>
          <Button className="d-demo-margin" type="dark" inline disabled >Dark</Button>
          <Button className="d-demo-margin" type="default" inline disabled>Default</Button>
          <Button className="d-demo-margin" inline loading>Default</Button>
        </div>
      </section>
    </div>
  );
};

export default LogContent;