import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { SwitchPropsType } from './PropsType';
import { Icon } from '../index';

const prefixCls = 'fam-switch';

const SwitchSheet: React.FC<SwitchPropsType> = props => {

  const {
    className,
    style = {},
    checked = false,
    disabled = false,
    loading = false,
    checkedText,
    uncheckedText,
    checkedColor,
    uncheckedColor,
    checkedBackGround,
    uncheckedBackGround,
    onChange,
    onClick
  } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {

    if (isMount && onChange) {
      onChange({ isChecked, disabled, loading });
    }

    setIsMount(true);

    // eslint-disable-next-line
  }, [isChecked])

  const handleClick = () => {

    if (onClick) onClick({ isChecked, disabled, loading });

    if (disabled || loading) return;

    setIsChecked(!isChecked);
  }

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-on`]: isChecked,
    [`${prefixCls}-disabled`]: disabled || loading,
    [`${prefixCls}-loading`]: loading,
  });

  const newStyle: any = { ...style };
  const innerStyle: any = {};

  if (isChecked) {

    if (checkedBackGround) {
      newStyle.background = checkedBackGround;
      newStyle.backgroundColor = checkedBackGround;
    }
  
    if (checkedColor) {
      innerStyle.color = checkedColor;
    }

  } else {

    if (uncheckedBackGround) {
      newStyle.background = uncheckedBackGround;
      newStyle.backgroundColor = uncheckedBackGround;
    }
  
    if (uncheckedColor) {
      innerStyle.color = uncheckedColor;
    }

  }

  return (
    <div className={wrapCls} onClick={handleClick} aria-checked={isChecked} style={newStyle}>
      <div className={`${prefixCls}-inner`} style={innerStyle}>{isChecked ? checkedText : uncheckedText}</div>
      <div className={`${prefixCls}-node`}>
        {
          loading && <Icon type="loading" size="xs" />
        }
      </div>
    </div>
  )
}

export default SwitchSheet;