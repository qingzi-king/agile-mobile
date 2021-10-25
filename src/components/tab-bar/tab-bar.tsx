import React from 'react';
import classnames from 'classnames';
import Item from './item';

const prefixCls = 'fam-tabbar';

export interface TabBarProps {
  className?: string;
  style?: object;
  selectedColor?: string;
  onClick?: (e: any) => void;
  activeKey?: string;
  barBgColor?: string;
}

export default class TabBar extends React.Component<TabBarProps, any> {

  constructor(props: TabBarProps) {
    super(props);

    const { activeKey, selectedColor } = props;

    this.state = {
      activeKey,
      selectedColor
    };
  }

  static Item = Item;

  static getDerivedStateFromProps(nextProps: any, prevState: any) {

    if (nextProps.activeKey !== prevState.activeKey) {
      return {
        activeKey: nextProps.activeKey
      }
    }

    return null
  }

  handleActiveKeyChange = (k: string) => {
    const { onClick } = this.props;
    this.setState({ activeKey: k });
    if (onClick) onClick(k);
  }

  // 克隆子元素
  renderChildren = () => {
    const { children, selectedColor } = this.props;
    return React.Children.map(children, (child: any) => {
      return React.cloneElement(child, {
        onClick: this.handleActiveKeyChange,
        fkey: child.key,
        selectedColor: selectedColor,
        activeKey: this.state.activeKey,
      })
    })
  }

  render() {
    const {
      style,
      className,
      barBgColor,
    } = this.props;

    const wrapCls = classnames(prefixCls, className);

    let newStyle: any = { ...style };

    if (barBgColor) {
      newStyle.background = barBgColor;
    } else {
      newStyle.background = '#FFF';
    }

    return (
      <div className={wrapCls} style={newStyle}>
        {
          this.renderChildren()
        }
      </div>
    )
  }
}