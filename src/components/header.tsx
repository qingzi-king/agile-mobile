import * as React from "react";
import { Component } from "react";
// import { Link } from 'react-router-dom';
// import { Menu } from 'antd';
import './common.less';

export interface IProps {
  history?: any;
}

declare var global: any;

class Home extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  handleJumpToRoot = () => {
    this.props.history.push('/');
  }
  render() {

    // let realKeys = global.G_SPLIT_URL_PARAMS();
    // let defaultSelectedKeys = realKeys[0];

    return (
      <div className="d-header">
        <div className="d-header-left" onClick={this.handleJumpToRoot}>
          <div className="d-logo">
            <img src="http://docs.antjob.ink/agile-ui/agile-logo.svg" alt="logo" />
          </div>
          <div className="d-header-title">{ global.G_SYSTEM_TITLE.name }</div>
          <div className="d-header-company">{ global.G_SYSTEM_TITLE.subName }</div>
        </div>
        {/*
        <div className="d-header-right">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={defaultSelectedKeys}
            className="d-header-nav"
          >
            <Menu.Item key="quick-start">
              <Link to="/quick-start">文档</Link>
            </Menu.Item>
            <Menu.Item key="demo" disabled>
              <Link to="/demo">组件</Link>
            </Menu.Item>
          </Menu>
        </div>
        */}
      </div>
    );
  }
}

export default Home;