import * as React from 'react';
import classnames from 'classnames';
import { ListItemPropsTypes } from './PropsType';
import { Icon } from '../index';

const prefixCls = 'fam-list';

const Item: React.FC<ListItemPropsTypes> = props => {

  const {
    className,
    wrap,
    children,
    thumb,
    extra,
    describe,
    arrow,
    onClick
  } = props;

  const wrapCls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-active`]: arrow,
  });

  const lineCls = classnames(`${prefixCls}-line`, {
    [`${prefixCls}-line-wrap`]: wrap,
  });

  const arrowCls = classnames(`${prefixCls}-arrow`, {
    [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
    [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
    [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
  });

  const handleOnClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(ev);
    }
  }

  return (
    <div
      className={wrapCls}
      onClick={ev => handleOnClick(ev)}
    >
      {
        thumb ? (
          <div className={`${prefixCls}-thumb`}>
            { typeof thumb === 'string' ? <Icon type={thumb} /> : thumb }
          </div>
        ) : null
      }
      <div className={lineCls}>
        {
          children !== undefined && (
            <div className={`${prefixCls}-title`}>{children}</div>
          )
        }
        {
          extra !== undefined && (
            <div className={`${prefixCls}-extra`}>{extra}</div>
          )
        }
        {
          describe !== undefined && (
          <div className={`${prefixCls}-describe`}>{describe}</div>
          )
        }
        { arrow && !describe && <Icon type="arrow-right" size="md" className={arrowCls} aria-hidden="true" /> }
      </div>
      { arrow && describe && <Icon type="arrow-right" size="md" className={arrowCls} aria-hidden="true" /> }
    </div>
  )
}

export default Item;