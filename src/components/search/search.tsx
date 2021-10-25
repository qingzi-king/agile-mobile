import React, { useState, createRef, useEffect } from 'react'
import classnames from 'classnames'
import Icon from '../icon'

const prefixCls = 'fam-search'

export interface SearchBarProps {
  className?: string
  style?: object
  defaultValue?: string | number
  value?: string | number
  placeholder?: string
  cancelColor?: string
  showCancelButton?: boolean
  disabled?: boolean
  autoFocus?: boolean
  maxLength?: number
  cancelText?: React.ReactNode
  onClear?: (e?:any) => void
  onSubmit?: (e?:any) => void
  onBlur?: (e?:any) => void
  onChange?: (e?:any) => void
  onFocus?: (e?:any) => void
  onCancel?: (e?:any) => void
}

const SearchBar: React.FC<SearchBarProps> = props => {

  const {
    className,
    style = {},
    defaultValue,
    value,
    autoFocus = false,
    placeholder = '请输入搜索关键词',
    showCancelButton = false,
    disabled = false,
    maxLength,
    cancelColor,
    cancelText = '取消',
    onChange,
    onBlur,
    onFocus,
    onCancel,
    // onClear,
    // onSubmit,
  } = props

  const thisInputRef = createRef()
  const thisSyntheticRef = createRef()

  const [inputRef] = useState<any>(thisInputRef)
  const [syntheticRef] = useState<any>(thisSyntheticRef)
  const [syntheticWidth, setSyntheticWidth] = useState<any>('100%')
  const [isFocus, setIsFocus] = useState(autoFocus)
  const [currentValue, setCurrentValue] = useState<any>(defaultValue)

  useEffect(() => {

    // 检测外部控制值变化，实时同步
    setCurrentValue(value)

    // eslint-disable-next-line
  }, [value])

  useEffect(() => {

    // 存在初始化值时需要状态保持一致（defaultValue 应放在 value 之后）

    if (defaultValue) {
      handleFocus()
      setCurrentValue(defaultValue)
    }

    if (autoFocus) {
      handleFocus()
    }

    // eslint-disable-next-line
  }, [])

  // 值变更事件
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    let targetValue = e.target.value

    setCurrentValue(targetValue)

    if (onChange) onChange(e)

  }

  // 聚焦事件
  const handleFocus = (e?: React.ChangeEvent<HTMLInputElement>) => {

    setIsFocus(true)

    if (onFocus) onFocus(e)

    inputRef.current.focus() // 自动聚焦

    handlePlaceholderSize() // placeholder宽度

  }

  // 失焦事件
  const handleBlur = (e?: React.ChangeEvent<HTMLInputElement>) => {

    if (!currentValue) {
      setIsFocus(false)
    }

    if (onBlur) onBlur(e)

    // 失去焦点且存在值时保持不变
    if (!currentValue) {
      setSyntheticWidth('100%')
    }

  }

  // 取消
  const handleCancel = () => {
    if (disabled) return
    setCurrentValue('')
    setIsFocus(false)
    setSyntheticWidth('100%')
    if (onCancel) onCancel()
  }

  // placeholder宽度
  const handlePlaceholderSize = () => {
    const placeholderWidth = syntheticRef.current.getBoundingClientRect().width + 30 // 30为搜索图标的宽度，固定的
    setSyntheticWidth(placeholderWidth)
  }

  const wrapCls = classnames(prefixCls, className)
  const contentWrapCls = classnames(`${prefixCls}-content`, {
    [`${prefixCls}-synthetic`]: isFocus,
    [`${prefixCls}-disabled`]: disabled,
  })
  const cancelWrapCls = classnames(`${prefixCls}-cancel`, {
    [`${prefixCls}-cancel-show`]: isFocus || showCancelButton,
    [`${prefixCls}-disabled`]: disabled,
  })

  return (
    <div className={wrapCls} style={style}>
      <div className={contentWrapCls}>
        <div className={`${prefixCls}-synthetic-icon`} style={{width: syntheticWidth}}>
          <Icon.SearchOutline />
          <span ref={syntheticRef} className={`${prefixCls}-synthetic-placeholder`} style={{visibility: currentValue ? 'hidden' : 'visible'}}>{placeholder}</span>
        </div>
        <div className={`${prefixCls}-value`}>
          <input
            ref={inputRef}
            className={`${prefixCls}-input`}
            type="search"
            value={currentValue || ''}
            disabled={disabled}
            maxLength={maxLength}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className={cancelWrapCls} style={{color:cancelColor}} onClick={handleCancel}>{cancelText}</div>
    </div>
  )
}

export default SearchBar