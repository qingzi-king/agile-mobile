import * as React from 'react';
import classnames from 'classnames';
import { StepsPropsType } from './PropsType';

const prefixCls = 'fam-steps-item';

const Step: React.FC<StepsPropsType> = props => {

  const {
    className,
    title,
    description,
    icon,
    _index
  } = props;

  const wrapCls = classnames(prefixCls, className, {});

  return (
    <div className={wrapCls}>
      <div className={`${prefixCls}-spread`}>
        <div className={`${prefixCls}-tail`}></div>
        {
          icon ? icon : <div className={`${prefixCls}-icon`}>{_index}</div>
        }
      </div>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-title`}>{ title }</div>
        {
          description && <div className={`${prefixCls}-description`}>{ description }</div>
        }
      </div>
    </div>
  )
}

export default Step;