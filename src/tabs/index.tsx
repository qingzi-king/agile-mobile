/**
 * 此模块更多参考了antd的方案实施。
 * https://github.com/react-component/m-tabs
 * https://github.com/ant-design/ant-design-mobile/blob/master/components/tabs/index.tsx
 */
import * as React from 'react';
import {
  DefaultTabBar as RMCDefaultTabBar,
  TabBarPropsType,
  Tabs as RMCTabs,
} from 'rmc-tabs';
import TabsProps from './PropsType';

export class DefaultTabBar extends RMCDefaultTabBar {
  static defaultProps = {
    ...(RMCDefaultTabBar as any).defaultProps,
    prefixCls: 'fam-tabs-bar',
  };
}

export default class Tabs extends React.PureComponent<TabsProps, {}> {
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'fam-tabs',
  };

  renderTabBar = (props: TabBarPropsType) => {
    const { renderTab } = this.props;
    return <DefaultTabBar {...props} renderTab={renderTab} />;
  }

  render() {
    return <RMCTabs renderTabBar={this.renderTabBar} {...this.props} />;
  }
}
