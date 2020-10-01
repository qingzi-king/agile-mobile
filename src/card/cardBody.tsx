import classnames from 'classnames';
import * as React from 'react';

export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
}

const prefixCls = 'fam-card';

const CardBody: React.FC<CardBodyProps> = props => {

  const { className, ...restProps } = props;
  const wrapCls = classnames(`${prefixCls}-body`, className);

  return <div className={wrapCls} {...restProps} />;

}

export default CardBody;
