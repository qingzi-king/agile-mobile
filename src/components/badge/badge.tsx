import * as React from 'react';
import classnames from 'classnames';

const prefixCls = 'fam-badge';

export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  overflowCount?: number;
  corner?: boolean;
  dot?: boolean;
  text?: any;
}

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    overflowCount: 99,
    dot: false,
    corner: false,
  };

  render() {
    // tslint:disable:prefer-const
    let {
      className,
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
      <div className={badgeCls}>
        {children}
        {(text || dot) && (
        // tslint:disable-next-line:jsx-no-multiline-js
          <div className={scrollNumberCls} {...restProps}>
            {text}
          </div>
        )}
      </div>
    );
  }
}
