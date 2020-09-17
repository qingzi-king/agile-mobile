import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './common.less';

const NoMatch = () => {
  return (
    <div className="d-error">
      <div className="d-error-404-icon"></div>
      <div className="d-error-content">
        <div className="d-error-code">404</div>
        <div className="d-error-desc">抱歉，你访问的页面不存在</div>
        <Link to="/"><Button type="dashed" style={{marginTop:15}}>返回首页</Button></Link>
      </div>
    </div>
  );
}

export default NoMatch;