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

interface IState {
  activeKey: string | number | undefined,
}

export class DefaultTabBar extends RMCDefaultTabBar {
  static defaultProps = {
    ...(RMCDefaultTabBar as any).defaultProps,
    prefixCls: 'fam-tabs-bar',
  };
}

export default class Tabs extends React.PureComponent<TabsProps, IState> {
  public static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
    prefixCls: 'fam-tabs',
    tintColor: '#268AF0',
  };

  constructor(props: TabsProps) {
    super(props);
    this.state = {
      activeKey: props.initialPage,
    };
  }

  renderTabBar = (props: TabBarPropsType) => {
    const { renderTab } = this.props;
    return <DefaultTabBar {...props} renderTab={renderTab} />;
  }

  handleActiveItem = (tab: any, activeKey: number) => {
    this.setState({ activeKey });
    const { onTabClick } = this.props;
    if (onTabClick) {
      onTabClick({ title: '', key: activeKey, ...tab }, activeKey);
    }
  }

  render() {
    const { mode, tintColor } = this.props;

    if (mode === 'segmentedControl') {

      let newProps = {
        ...this.props
      };

      const { activeKey } = this.state;
      const prefixCardCls = 'fam-tabs-card';

      return (
        <div className={prefixCardCls}>
          {
            newProps.tabs.map((tab, index) => {
              let cls = `${prefixCardCls}-item`;
              let cardStyle: any = {
                borderColor: tintColor
              };

              if (activeKey === index) {
                cls += ` ${prefixCardCls}-item-active`;
                cardStyle.backgroundColor = tintColor;
              }

              return (
                <div key={index} className={cls} style={cardStyle} onClick={this.handleActiveItem.bind(this, tab, index)}>{ tab.title || '*' }</div>
              )
            })
          }
        </div>
      );

    } else {

      return <RMCTabs renderTabBar={this.renderTabBar} {...this.props} />;

    }
  }
}
