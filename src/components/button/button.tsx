import * as React from 'react'
import classnames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import Icon, { IconProps } from '../icon'

export interface ButtonPropsType {
  type?: 'default' | 'primary' | 'warning' | 'success' | 'danger' | 'dark'
  size?: 'large' | 'default' | 'small'
  fill?: 'solid' | 'outline' | 'none'
  disabled?: boolean
  loading?: boolean
}

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string
  className?: string
  role?: string
  inline?: boolean
  block?: boolean
  hairline?: boolean
  dashed?: boolean
  iconType?: IconProps["type"]
  icon?: React.ReactNode
  activeClassName?: string
  activeStyle?: boolean | React.CSSProperties
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
function isString(str: any) {
  return typeof str === 'string'
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' '),
    )
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ')
    }
    return <span>{child}</span>
  }
  return child
}

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'fam-button',
    type: 'default',
    size: 'default', // small default large
    inline: false,
    block: false,
    fill: 'solid',
    disabled: false,
    loading: false,
    activeStyle: {},
  }

  render() {
    const {
      children,
      className,
      style,
      prefixCls,
      type,
      size = 'default',
      inline,
      block,
      fill,
      disabled,
      icon,
      iconType,
      loading,
      dashed = false,
      activeStyle,
      activeClassName,
      onClick,
      ...restProps
    } = this.props

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-size-${size}`]: size,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-fill-outline`]: fill === 'outline',
      [`${prefixCls}-fill-none`]: fill === 'none',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
    })

    const kids = React.Children.map(children, insertSpace)

    return (
      <button
        className={wrapCls}
        onClick={disabled || loading ? undefined : onClick}
        aria-disabled={disabled}
        style={{ ...style, borderStyle: dashed ? 'dashed' : 'solid'}}
        {...restProps}
      >
        { loading && !icon && <Icon type={iconType || 'loading'} size="xs" style={{marginRight:2}} /> }
        { icon && icon }
        {kids}
      </button>
    )
  }
}

export default Button