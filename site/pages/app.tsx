/*
 * @Descripttion: 
 * @Author: qingzi.wang
 * @Date: 2020-09-01 14:31:16
 */
import React from 'react';

import LayoutHOC from '../components/layout';
import { Button, Popover } from 'antd';
import './common/common.less';

declare var global: any;

const App = (props: any) => {

  const handleMenu = () => {
    props.history.push('/quick-start');
  }

  const content = (
    <div style={{padding:10}}>
      <img src="http://docs.antjob.ink/agile-ui/qr-demo.png" alt="demo-qr" width="200" />
    </div>
  );

  return (
    <div className="d-full">
      <div className="d-welcome">
        {/* <img src="http://docs.antjob.ink/funenc/danger.svg" alt="welcome" /> */}
        <h2 className="d-welcome__title">{ global.G_SYSTEM_TITLE.welcome.name }</h2>
        <div className="d-welcome__describe">{ global.G_SYSTEM_TITLE.welcome.describe }</div>
        <div>
          <Button type="primary" size="large" onClick={handleMenu}>快速开始</Button>
          <Popover content={content} trigger="click" placement="bottom">
            <Button type="dashed" size="large" style={{marginLeft:15}}>扫码预览</Button>
          </Popover>
        </div>
      </div>
    </div>
  )
};

export default LayoutHOC(App);