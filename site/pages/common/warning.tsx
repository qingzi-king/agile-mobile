
import * as React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  LoadingOutlined
} from '@ant-design/icons';
import './common.less';

const Warning = (props: any) => {
  const type: string = props.type;

  if (type === 'selectMenu') {
    return (
      <div style={{marginTop:'3rem'}}>
        <embed src="http://docs.antjob.ink/funenc/settings_tab_mgiw.svg" width="500" height="200" type="image/svg+xml" />
        <div className="d-margin-15-0">请选择左侧菜单栏！</div>
      </div>
    )
  }

  if (type === 'card-loading') {
    return (
      <div style={{marginTop:'3rem'}}>
        <embed src="http://docs.antjob.ink/funenc/Ride_till_I_can_no_more_44wq.svg" className="d-opacity-loop" width="500" height="200" type="image/svg+xml" />
        <div className="d-margin-15-0"><LoadingOutlined {...props} /> 数据加载中...</div>
      </div>
    )
  }

  if (type === 'loading') {
    return (
      <div>
        <div className="d-margin-15-0"><LoadingOutlined {...props} /> 数据加载中...</div>
      </div>
    )
  }

  return (
    <div>....</div>
  );
}

export default Warning;