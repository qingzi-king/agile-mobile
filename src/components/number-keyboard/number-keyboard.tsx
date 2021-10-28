import React, { Fragment } from 'react'
import classnames from 'classnames'
import Popup from '../popup'

const prefixCls = 'fam-number-keyboard'

export interface NumberKeyboardProps {
  className?: string
  style?: object
  type?: 'professional' | 'simple'
  defaultValues?: Array<number | string>
  disorder?: boolean
  isHideConfirm?: boolean
  okText?: string
  header?: React.ReactNode
  maxLength?: number
  textRender?: (e?: any) => void
  onDelete?: (e?: any) => void
  onConfirm?: (e?: any) => void
  onChange?: (e?: any) => void
  maskClosable?: boolean
  overlay?: boolean
  transparent?: boolean
}

const NumberKeyboard = (props: NumberKeyboardProps) => {

  const {
    className,
    type = 'professional', // professional、simple
    defaultValues = [],
    disorder = false,
    isHideConfirm = true,
    okText = '确认',
    header,
    maxLength,
    textRender,
    onConfirm,
    onDelete,
    onChange,
    maskClosable = true,
    overlay = true,
    transparent = false,
  } = props

  let res: any
  let selectedValues: any = [...defaultValues] // 已选中的值

  // 加工数字序列
  const baseSpecialStr: any = textRender ? textRender('.') : '.'
  const baseStack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const baseStackTmp = [...baseStack]

  const keyNumberList: any = baseStack.map(item => {
    const val = disorder ? baseStackTmp.splice(parseInt((Math.random() * baseStackTmp.length).toString()), 1)[0] || 0 : item
    return textRender ? textRender(val) : val
  })

  // 删除
  const handleDelete = () => {

    let lastValue = selectedValues[selectedValues.length - 1]

    selectedValues.pop()

    if (onChange) {
      onChange({removeValue: lastValue, values: selectedValues})
    }

    if (onDelete) {
      onDelete({removeValue: lastValue, values: selectedValues})
    }

  }

  // 确认
  const handleConfirm = () => {

    if (onChange) {
      onChange({ values: selectedValues })
    }

    if (onConfirm) {
      onConfirm({ values: selectedValues })
    }

    if (isHideConfirm) {
      handleClosePopup()
    }

  }

  // 选择值
  const handleSelectedValues = (val: any) => {

    if (val || val === 0) {

      if (maxLength && maxLength > 0 && selectedValues.length >= maxLength) {
        return false
      }

      selectedValues.push(val)

      if (onChange) {
        onChange({addValue: val, values: selectedValues })
      }

    }

  }

  const handleClosePopup = () => {
    if (res) {
      res.close()
    }
  }

  const wrapCls = classnames(prefixCls, className)

  res = Popup({
    maskClosable,
    overlay,
    transparent,
    children: (
      <Fragment>
        {
          header && <div className={`${prefixCls}-header`}>{header}</div>
        }
        <div className={wrapCls}>
          <div className={`${prefixCls}-number`}>
            <ul className={`${prefixCls}-list`}>
              {
                keyNumberList.map((val: any, i: number) => {
                  if (i > 8) return false
                  return (
                    <li key={i} className={`${prefixCls}-item`} onClick={() => handleSelectedValues(val)}>
                      <span>{val}</span>
                    </li>
                  )
                })
              }
              {
                type === 'simple' ?
                  <li className={`${prefixCls}-item ${prefixCls}-disabled`}></li>
                :
                  <li className={`${prefixCls}-item`} onClick={() => handleSelectedValues(baseSpecialStr)}>{baseSpecialStr}</li>
              }
              <li className={`${prefixCls}-item`} onClick={() => handleSelectedValues(keyNumberList[9])}>{keyNumberList[9]}</li>
              <li className={`${prefixCls}-item ${prefixCls}-slidedown`} onClick={handleConfirm}></li>
            </ul>
          </div>
          <div className={`${prefixCls}-operate`}>
            <ul className={`${prefixCls}-operate-list`}>
              <li className={`${prefixCls}-operate-item ${prefixCls}-delete`} onClick={handleDelete}></li>
              <li className={`${prefixCls}-operate-item ${prefixCls}-confirm`} onClick={handleConfirm}>{okText}</li>
            </ul>
          </div>
        </div>
      </Fragment>
    ),
  })

  return {...res}
}

export default NumberKeyboard