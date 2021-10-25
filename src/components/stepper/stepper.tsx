import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import Button from '../button'
import Icon from '../icon'
import { formatNumber, formatNumberPrecision } from '../../utils/number'

const prefixCls = 'fam-stepper'

export interface StepperProps {
  className?: string
  style?: object
  readOnly?: boolean
  disabled?: boolean
  disablePlus?: boolean
  disableMinus?: boolean
  value?: number
  defaultValue?: number
  step?: number
  min?: number | string
  max?: number | string
  decimal?: number
  integer?: boolean
  onChange?: (e: object) => void
}

const Stepper: React.FC<StepperProps> = props => {

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
    decimal,
    onChange
  } = props

  const newReadOnly = readOnly || disabled
  let newDefaultValue: number | string | undefined = formatNumberPrecision(defaultValue, decimal)

  const [isMount, setIsMount] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<any>(newDefaultValue)
  const [minusDisabled, setMinusDisabled] = useState<boolean>(disableMinus || disabled)
  const [plusDisabled, setPlusDisabled] = useState<boolean>(disablePlus || disabled)

  useEffect(() => {

    if (isMount && onChange) {
      onChange({ minusDisabled, plusDisabled, currentValue: Number(currentValue) })
    }

    setIsMount(true)

    // eslint-disable-next-line
  }, [currentValue, minusDisabled, plusDisabled])

  useEffect(() => {

    if (value) handleChangeInput(value) // 实时获取外部控制值的变化

    // eslint-disable-next-line
  }, [value])

  // 减
  const handleMinus = () => {

    if (minusDisabled) return

    let newCurrentValue: number | string | undefined = Math.round((Number(currentValue) - step) * 100) / 100

    let res: any = handleDisableButton(newCurrentValue)

    if (res.isMinusDisabled) return

    if (min !== 'infinity' && newCurrentValue < min) return

    newCurrentValue = formatNumberPrecision(newCurrentValue, decimal)

    setCurrentValue(newCurrentValue)

  }

  // 加
  const handlePlus = () => {

    if (plusDisabled) return

    let newCurrentValue: number | string | undefined = Math.round((Number(currentValue) + step) * 100) / 100

    let res: any = handleDisableButton(newCurrentValue)

    if (res.isPlusDisabled) return

    if (max !== 'infinity' && newCurrentValue > max) return

    newCurrentValue = formatNumberPrecision(newCurrentValue, decimal)

    setCurrentValue(newCurrentValue)

  }

  // 按钮是否禁用
  const handleDisableButton = (_value: number) => {

    let isMinuxDisabled = false
    let isPlusDisabled = false

    if ((max !== 'infinity' && _value > max) || disabled || disablePlus) {
      setPlusDisabled(true)
      isPlusDisabled = true
    } else if (plusDisabled) {
      setPlusDisabled(false)
    }

    if ((min !== 'infinity' && _value < min) || disabled || disableMinus) {
      setMinusDisabled(true)
      isMinuxDisabled = true
    } else if (minusDisabled) {
      setMinusDisabled(false)
    }

    return {
      isMinuxDisabled,
      isPlusDisabled
    }

  }

  // 输入值
  const handleChangeInput = (v: any) => {

    let inputValue = v ? v.target.value : v
    let formatValue: string | number = formatNumber(String(inputValue), !integer)

    if (formatValue) {

      if (max !== 'infinity' && formatValue > max) {
        formatValue = max
      }

      if (min !== 'infinity' && formatValue < min) {
        formatValue = min
      }

    }

    setCurrentValue(formatValue)

  }

  // 焦点失去时，重新格式化（浮点数情况，保留位数，change中处理会导致无法录入小数部分）
  const handleBlurInput = (v: any) => {

    let inputValue = v ? v.target.value : v
    let formatValue: string | number | undefined = formatNumber(String(inputValue), !integer)

    formatValue = formatNumberPrecision(formatValue, decimal)

    setCurrentValue(formatValue)

  }

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  })
  const minusWrapCls = classnames(`${prefixCls}-minus`, {
    [`${prefixCls}-minus-disabled`]: minusDisabled
  })
  const plusWrapCls = classnames(`${prefixCls}-plus`, {
    [`${prefixCls}-plus-disabled`]: plusDisabled
  })
  const inputWrapCls = classnames(`${prefixCls}-input`)

  return (
    <div className={wrapCls} style={{ ...style }}>
      <Button
        className={minusWrapCls}
        size="small"
        onClick={handleMinus}
      >
        <Icon.ReduceOutline />
      </Button>
      <input
        className={inputWrapCls}
        type={integer ? 'tel' : 'text'}
        role="spinbutton"
        inputMode={integer ? 'numeric' : 'decimal'}
        readOnly={newReadOnly}
        value={currentValue}
        onChange={handleChangeInput}
        onBlur={handleBlurInput}
      />
      <Button
        className={plusWrapCls}
        size="small"
        onClick={handlePlus}
      >
        <Icon.PlusOutline />
      </Button>
    </div>
  )
}

export default Stepper