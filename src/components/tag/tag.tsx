import React, { CSSProperties, FC, useState } from 'react'
import classnames from 'classnames'
import Icon from '../icon'

const colorRecord: Record<string, string> = {
  default: 'var(--fam-color-default, #333)',
  primary: 'var(--fam-color-primary, #268AF0)',
  success: 'var(--fam-color-success, #6FC643)',
  warning: 'var(--fam-color-warning, #F59A23)',
  danger: 'var(--fam-color-danger, #FF3141)',
  gray: 'var(--fam-color-gray, #DCDEE0)',
}

const prefixCls = 'fam-tag'

export interface TagProps {
  className?: string
  icon?: React.ReactElement<any> | null
  color?: 'default' | 'primary' | 'warning' | 'danger' | 'success' | 'gray' | string
  fill?: 'solid' | 'outline'
  round?: boolean
  closeable?: boolean
  size?: 'lg' | 'md' | 'xs'
  disabled?: boolean
  style?: object
  onClick?: () => void
  onClose?: () => void
}

const Tag: FC<TagProps> = props => {
  const {
    icon,
    children,
    className,
    fill = 'solid',
    color = 'primary',
    round = false,
    closeable = false,
    disabled = false,
    size,
    style = {},
    onClose,
    ...restProps
  } = props

  const [isShow, setIsShow] = useState(true)

  const handleOnTagClose = () => {
    if (disabled) return false
    if (closeable) {
      if (onClose) {
        onClose()
      }
      setIsShow(false)
    }
  }

  const tagColor = colorRecord[color] ?? color

  const tagStyle: CSSProperties & {
    '--color'?: string,
    '--border-color'?: string,
    '--background-color'?: string
  } = {
    '--color': tagColor,
  }

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-outline`]: fill === 'outline',
    [`${prefixCls}-round`]: round,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-${size}`]: size,
  })

  return isShow ? (
    <span className={wrapCls} style={{...style, ...tagStyle}} {...restProps}>
      {
        icon && (
          <span className={`${prefixCls}-icon`}>
            { icon }
          </span>
        )
      }
      { children }
      {
        closeable && (
          <span
            className={`${prefixCls}-icon-close`}
            onClick={handleOnTagClose}
          >
            <Icon.CloseOutline />
          </span>
        )
      }
    </span>
  ) : null

}

export default Tag