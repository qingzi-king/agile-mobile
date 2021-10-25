import React from 'react'
import classnames from 'classnames'
import Icon from '../icon'

const prefixCls = 'fam-radio'

export interface RadioProps {
  className?: string
  style?: object
  value?: string | number
  selectedValue?: string | number
  checked?: boolean // 仅List模式有效与value不冲突
  activeColor?: string
  disabled?: boolean
  transparent?: boolean
  mode?: 'list'
  shape?: 'round' | 'square'
  onChange?: (e: any) => void
}

const RadioItem: React.FC<RadioProps> = props => {

  const {
    className,
    value,
    selectedValue,
    activeColor,
    mode,
    disabled = false,
    transparent = false,
    checked = false, // 仅List模式有效与value不冲突
    shape = 'round',
    onChange,
    children
  } = props

  const handleChange = () => {

    if (!disabled && onChange) {
      onChange(value)
    }

  }

  // TODO：List组件完成后对接list模式
  const isChecked = ((mode === 'list' && checked) || (value && selectedValue === value)) ? true : false

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-checked`]: isChecked,
    [`${prefixCls}-unchecked`]: !isChecked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-icon-transparent`]: transparent,
  })

  let newStyle: any = {}

  if (!disabled && isChecked && activeColor) {
    newStyle.background = activeColor
    newStyle.borderColor = activeColor
  }

  let iconDOM

  if (mode && mode === 'list') {
    iconDOM = <Icon.SuccessOutline style={newStyle} />
  } else {
    iconDOM = (
      <div className={`${prefixCls}-icon-${shape}`} style={newStyle}>
        <Icon.SuccessOutline />
      </div>
    )
    // iconDOM = <Icon type={isChecked ? "check" : "circle"} size="sm" style={newStyle} />
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

export default RadioItem