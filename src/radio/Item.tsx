import classnames from 'classnames';
import * as React from 'react';
import { RadioGroupPropsType } from './PropsType';
import { Icon } from '../index';

const prefixCls = 'fam-radio';

const Radio: React.FC<RadioGroupPropsType> = props => {

  const {
    className,
    style,
    value,
    onChange,
    children
  } = props;

  const wrapCls = classnames(prefixCls, className);

  return (
    <div className={wrapCls}>
      <Icon type="check" size="sm" />
      <label className={`${prefixCls}-label`}>
        {/* <input type="radio" /> */}
        { children }
      </label>
    </div>
  )
}

export default Radio;