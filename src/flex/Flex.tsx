import classnames from 'classnames';
import * as React from 'react';

export interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignItem?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;

  static defaultProps = {
    prefixCls: 'fam-flexbox',
    align: 'center',
  };

  render() {
    const {
      direction,
      wrap,
      justify,
      align,
      alignItem,
      className,
      children,
      prefixCls,
      style,
      ...restProps
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-start`]: align === 'start',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-end`]: align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignItem === 'start',
      [`${prefixCls}-align-content-end`]: alignItem === 'end',
      [`${prefixCls}-align-content-center`]: alignItem === 'center',
      [`${prefixCls}-align-content-between`]: alignItem === 'between',
      [`${prefixCls}-align-content-around`]: alignItem === 'around',
      [`${prefixCls}-align-content-stretch`]: alignItem === 'stretch',
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}