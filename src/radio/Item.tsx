import classnames from 'classnames';
import * as React from 'react';
import { RadioPropsType } from './PropsType';
import { Icon } from '../index';

const prefixCls = 'fam-radio';

const RadioItem: React.FC<RadioPropsType> = props => {

  const {
    className,
    value,
    selectedValue,
    activeColor,
    mode,
    disabled = false,
    transparent = false,
    checked = false, // 仅List模式有效与value不冲突
    onChange,
    children
  } = props;

  const handleChange = () => {

    if (!disabled && onChange) {
      onChange(value);
    }

  }

  const isChecked = ((mode === 'list' && checked) || (value && selectedValue === value)) ? true : false;

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-checked`]: isChecked,
    [`${prefixCls}-unchecked`]: !isChecked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-icon-transparent`]: transparent,
  });

  let newStyle: any = {};

  if (!disabled && isChecked && activeColor) {
    newStyle.color = activeColor;
  }

  let iconDOM;

  if (mode && mode === 'list') {
    iconDOM = <Icon type="success" size="sm" style={newStyle} />
  } else {
    iconDOM = <Icon type={isChecked ? "check" : "circle"} size="sm" style={newStyle} />
  }

  return (
    <div className={wrapCls} onClick={handleChange}>
      { iconDOM }
      <label className={`${prefixCls}-label`}>
        {/* <input type="radio" /> */}
        { children }
      </label>
    </div>
  )
}

export default RadioItem;