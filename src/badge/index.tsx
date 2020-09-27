import classnames from 'classnames';
import * as React from 'react';
import { BadgePropsTypes } from './PropsType';

export interface BadgeProps extends BadgePropsTypes {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    prefixCls: 'fam-badge',
    overflowCount: 99,
    dot: false,
    corner: false,
  };

  render() {
    // tslint:disable:prefer-const
    let {
      className,
      prefixCls,
      children,
      text,
      overflowCount,
      dot,
      corner,
      ...restProps
    } = this.props;

    overflowCount = overflowCount as number;
    text = (typeof text === 'number' && text > overflowCount) ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classnames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
    });

    const badgeCls = classnames(prefixCls, className, {
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-a-wrapper`]: children,
      [`${prefixCls}-corner-wrapper`]: corner,
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && (
        // tslint:disable-next-line:jsx-no-multiline-js
          <sup className={scrollNumberCls} {...restProps}>
            {text}
          </sup>
        )}
      </span>
    );
  }
}
