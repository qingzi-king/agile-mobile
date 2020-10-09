import classnames from 'classnames';
import * as React from 'react';
import { CardBodyPropsType } from './PropsType';

const prefixCls = 'fam-card';

const CardBody: React.FC<CardBodyPropsType> = props => {

  const { className, children, corner, ...restProps } = props;
  const wrapCls = classnames(className, {
    [`${prefixCls}-body-corner`]: corner,
    [`${prefixCls}-body`]: !corner,
  });

  return (
    <div className={wrapCls} {...restProps}>
      {
        /* 多个子节点时强制转入div处理成块节点 */
        children instanceof Array ?
        (
          children.map((n: any, i ) => {
            return <div key={i} className={`${prefixCls}-body-item`}>{n}</div>;
          })
        )
        : children
      }
    </div>
  );

}

export default CardBody;
