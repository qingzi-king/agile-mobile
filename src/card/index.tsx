import classnames from 'classnames';
import * as React from 'react';
import CardBody from './cardBody';
import CardFooter from './cardFooter';
import CardHeader from './cardHeader';
import { CardPropsType } from './PropsType';

export interface CardProps extends CardPropsType {
  prefixCls?: string;
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    prefixCls: 'fam-card',
    full: false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { prefixCls, full, className, style, ...resetProps } = this.props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-full`]: full,
    });

    return <div className={wrapCls} {...resetProps} style={style} />;
  }
}
