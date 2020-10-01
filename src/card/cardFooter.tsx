import classnames from 'classnames';
import * as React from 'react';
import { CardFooterPropsType } from './PropsType';

const prefixCls = 'fam-card';

const CardFooter: React.FC<CardFooterPropsType> = props => {

  const { content, className, style = {}, extra, ...restProps } = props;
  const wrapCls = classnames(`${prefixCls}-footer`, className);

  return (
    <div className={wrapCls} {...restProps} style={style}>
      <div className={`${prefixCls}-footer-content`}>{content}</div>
      {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
    </div>
  );

}

export default CardFooter;
