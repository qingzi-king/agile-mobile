import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { StepperPropsType } from './PropsType';
import { Button, Icon } from '../index';
import { formatNumber } from '../utils/format/number';

const prefixCls = 'fam-stepper';

const Stepper: React.FC<StepperPropsType> = props => {

  const {
    className,
    style = {},
    readOnly = false,
    disabled = false,
    disablePlus = false,
    disableMinus = false,
    value,
    defaultValue,
    step = 1,
    min = 'infinity',
    max = 'infinity',
    integer = false,
    onChange
  } = props;

  const newReadOnly = readOnly || disabled;

  const [isMount, setIsMount] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<any>(defaultValue);
  const [minusDisabled, setMinusDisabled] = useState<boolean>(disableMinus || disabled);
  const [plusDisabled, setPlusDisabled] = useState<boolean>(disablePlus || disabled);

  useEffect(() => {

    setIsMount(true);

    if (isMount && onChange) {
      onChange({ minusDisabled, plusDisabled, currentValue });
    }

    // eslint-disable-next-line
  }, [currentValue, minusDisabled, plusDisabled])

  useEffect(() => {

    if (value) handleChangeInput(value);

    // eslint-disable-next-line
  }, [value])

  // 减
  const handleMinus = () => {

    if (minusDisabled) return;

    let newCurrentValue = Number(currentValue) - step;

    let res: any = handleDisableButton(newCurrentValue);

    if (res.isMinusDisabled) return;

    if (min !== 'infinity' && newCurrentValue < min) {
      return;
    }

    setCurrentValue(newCurrentValue);

  }

  // 加
  const handlePlus = () => {

    if (plusDisabled) return;

    let newCurrentValue = Number(currentValue) + step;

    let res: any = handleDisableButton(newCurrentValue);

    if (res.isPlusDisabled) return;

    if (max !== 'infinity' && newCurrentValue > max) {
      return;
    }

    setCurrentValue(newCurrentValue);

  }

  // 按钮是否禁用
  const handleDisableButton = (_value: number) => {

    let isMinuxDisabled = false;
    let isPlusDisabled = false;

    if ((max !== 'infinity' && _value > max) || disabled || disablePlus) {
      setPlusDisabled(true);
      isPlusDisabled = true;
    } else if (plusDisabled) {
      setPlusDisabled(false);
    }

    if ((min !== 'infinity' && _value < min) || disabled || disableMinus) {
      setMinusDisabled(true);
      isMinuxDisabled = true;
    } else if (minusDisabled) {
      setMinusDisabled(false);
    }

    return {
      isMinuxDisabled,
      isPlusDisabled
    };

  }

  // 输入值
  const handleChangeInput = (v: any) => {

    let inputValue = v ? v : v.target.value;
    let formatValue: string | number = formatNumber(String(inputValue), !integer);

    if (formatValue) {

      if (max !== 'infinity' && formatValue > max) {
        formatValue = max;
      }

      if (min !== 'infinity' && formatValue < min) {
        formatValue = min;
      }

    }

    setCurrentValue(formatValue);

  }

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  });
  const minusWrapCls = classnames(`${prefixCls}-minus`, {
    [`${prefixCls}-minus-disabled`]: minusDisabled
  });
  const plusWrapCls = classnames(`${prefixCls}-plus`, {
    [`${prefixCls}-plus-disabled`]: plusDisabled
  });
  const inputWrapCls = classnames(`${prefixCls}-input`);

  return (
    <div className={wrapCls} style={{ ...style }}>
      <Button
        className={minusWrapCls}
        size="small"
        onClick={handleMinus}
      >
        <Icon type="reduce" size="xs" />
      </Button>
      <input
        className={inputWrapCls}
        type={integer ? 'tel' : 'text'}
        role="spinbutton"
        inputMode={integer ? 'numeric' : 'decimal'}
        readOnly={newReadOnly}
        value={currentValue}
        onChange={handleChangeInput}
      />
      <Button
        className={plusWrapCls}
        size="small"
        onClick={handlePlus}
      >
        <Icon type="plus" size="xs" />
      </Button>
    </div>
  )
}

export default Stepper;