import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-radio-group'

export interface RadioGroupProps {
  className?: string
  style?: object
  value?: string | number
  activeColor?: string
  direction?: 'horizontal' | 'vertical'
  disabled?: boolean
  children: React.ReactElement[]
  onChange?: (e: object) => void
}

const Group: React.FC<RadioGroupProps> = props => {

  const [selectedValue, setSelectedValue] = useState<any>()

  const {
    className,
    style,
    value,
    activeColor,
    direction = 'horizontal',
    disabled = false,
    onChange,
    children
  } = props

  useEffect(() => {

    if (value) {
      setSelectedValue(value)
    }

  }, [value])

  let hasRepeatValue = false // 是否存在重复值
  const filterChildren: any[] = []

  if (children && children.length) {
    children.forEach((item: any, index) => {
      if (React.isValidElement(item)) {
        filterChildren.push(item)
      }
    })
  }

  // item点击反馈（Radio只能选中一个）
  const handleRadioChange = (v: any) => {

    setSelectedValue(v)

    if (onChange) {
      onChange(v)
    }
  }

  // 重新加工子节点
  const newChildren = React.Children.map(filterChildren, (item: any, index) => {

    let className = item.props.className || ''

    return React.cloneElement(item, {
      ...item.props,
      className,
      selectedValue,
      activeColor,
      disabled: disabled ? true : item.props.disabled,
      onChange: handleRadioChange,
    })
  })

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-vertical`]: direction === 'vertical'
  })

  // 存在重复值拒绝渲染
  if (hasRepeatValue) return <div></div>

  return (
    <div className={wrapCls} style={style}>
      { newChildren }
    </div>
  )
}

Group.displayName = 'Radio'
Group.defaultProps = {}

export default Group