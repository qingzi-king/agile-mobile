import * as React from "react";
import { Component } from "react";
import { Layout } from 'antd';
import HeaderUnit from './header';
import './common.less';

const { Header, Content } = Layout;
declare var global: any;

const LayoutUnit = (WrappedComponent: any) => {

  return class HOC extends Component {
    render() {
      return (
        <Layout className="d-layout">
          <Header className="d-layout-header-container">
            <HeaderUnit {...this.props} />
          </Header>
          <Content className="d-layout-body-container">
            <div className="d-content-container">
              {/* 内容体 */
                WrappedComponent && <WrappedComponent {...this.props} />
              }
            </div>
          </Content>
        </Layout>
      )
    }
  }
}

export default LayoutUnit;