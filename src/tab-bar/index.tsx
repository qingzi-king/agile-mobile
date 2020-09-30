import React from 'react';
import classnames from 'classnames';
import { TabBarPropsTypes } from './PropsType';
import Item from './Item';

const prefixCls = 'fam-tab-bar';

export default class TabBar extends React.Component<TabBarPropsTypes, any> {

  constructor(props: TabBarPropsTypes) {
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
      rotate,
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-rotate`]: rotate
    });

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