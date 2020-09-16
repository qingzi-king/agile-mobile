import classnames from 'classnames';
import * as React from 'react';

export interface FlexItemProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    prefixCls: 'fam-flexbox',
  };
  render() {
    const { children, className, prefixCls, style, ...restProps } = this.props;
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}
