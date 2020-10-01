import classnames from 'classnames';
import * as React from 'react';
import { CardHeaderPropsType } from './PropsType';

const prefixCls = 'fam-card';

const CardFooter: React.FC<CardHeaderPropsType> = props => {

  const {
    className,
    title,
    extra,
    ...restProps
  } = props;
  const wrapCls = classnames(`${prefixCls}-header`, className);

  return (
    <div className={wrapCls} {...restProps}>
      <div className={`${prefixCls}-header-content`}>
        {title}
      </div>
      {extra ? (
      // tslint:disable-next-line:jsx-no-multiline-js
        <div className={`${prefixCls}-header-extra`}>{extra}</div>
      ) : null}
    </div>
  );

}

export default CardFooter;
