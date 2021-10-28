import React, { useState, Fragment } from 'react'
import classnames from 'classnames'
import { NumberKeyboardProps } from '../number-keyboard'
import NumberKeyboard from '../number-keyboard'

const prefixCls = 'fam-password-input'

export interface PasswordInputProps extends NumberKeyboardProps {
  className?: string
  defaultValues?: Array<number | string>
  maxLength?: number
  gutter?: string | number
  mask?: boolean
  focused?: boolean
  autofocus?: boolean
  autoClose?: boolean
  closable?: boolean
  underline?: boolean
  onClose?: () => void
}

const PasswordInput: React.FC<PasswordInputProps> = props => {

  const {
    className,
    type,
    defaultValues = [],
    maxLength = 6,
    gutter = 15,
    mask = true,
    focused = false,
    autofocus = false,
    // closable = true,
    underline = false,
    autoClose = true,
    overlay = true, // 以下为数字键盘属性
    maskClosable = false,
    transparent = true,
    onChange,
    ...restProps
  } = props

  const thisRef = React.createRef()

  const [nodeRef] = useState<any>(thisRef)
  const [currentValues, setCurrentValues] = useState([...defaultValues])
  const [isFocus, setIsFocus] = useState(focused || autofocus)

  const wrapCls = classnames(prefixCls, className)
  const itemCls = classnames({
    [`${prefixCls}-item`]: !underline,
    [`${prefixCls}-underline-item`]: underline,
  })

  let res: any
  let rows = new Array(maxLength).fill(0)

  // 变更情况
  const handleChange = (e: any) => {

    let currentValuesTmp = [...e.values]
    setCurrentValues(currentValuesTmp)

    // 字符到达指定长度自动关闭数字键盘
    if (res && res.close && autoClose && maxLength > 0 && currentValuesTmp.length >= maxLength) {
      res.close()
    }

    if (onChange) {
      onChange({ values: currentValuesTmp })
    }

  }

  const handleDelete = (e: any) => {
    setCurrentValues([...e.values])
  }

  const handleConfirm = (e: any) => {
    setIsFocus(false)
  }

  // 点击可输入区域
  const handleClickItem = (e: any) => {

    setIsFocus(true)

    if (!res || (res && !res.close)) {
      // 返回的是Popup的内容
      res = NumberKeyboard(
        {
          ...restProps,
          type,
          defaultValues: [...currentValues],
          maxLength,
          maskClosable,
          transparent,
          overlay,
          onDelete: handleDelete,
          onConfirm: handleConfirm,
          onChange: handleChange
        }
      )

    }
    
  }

  // 光标
  let focusIndexTmp = currentValues.length

  if (focusIndexTmp < 1) focusIndexTmp = 0

  return (
    <Fragment>
      <div className={wrapCls} ref={nodeRef}>
        <ul className={`${prefixCls}-list`}>
          {
            rows.map((v, i) => {

              let hasValue = currentValues[i]

              if (hasValue === 0) hasValue = '0'

              let valueDOM = (hasValue && mask) ? <i className={`${prefixCls}-maskicon`} /> : (hasValue || '')

              let marginLeftTmp: any = 0

              if (gutter && i > 0 && i < maxLength) {
                marginLeftTmp = gutter
              }

              return (
                <li
                  key={i}
                  className={itemCls}
                  style={{marginLeft: marginLeftTmp}}
                  onClick={() => handleClickItem(i)}
                >
                  { valueDOM }
                  {
                    isFocus && focusIndexTmp === i && <div className={`${prefixCls}-focus`}/>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default PasswordInput