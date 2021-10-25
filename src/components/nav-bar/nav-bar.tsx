import React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-navbar'

export interface NavBarProps {
  className?: string
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  children?: React.ReactNode
  icon?: React.ReactNode
  onLeftClick?: React.MouseEventHandler<HTMLDivElement>
  mode?: 'dark' | 'light'
  title?: React.ReactNode
  fixed?: boolean
  placeholder?: boolean
  zIndex?: number
}

export default (props: NavBarProps) => {
  const {
    title,
    onLeftClick,
    leftContent,
    rightContent,
    icon,
    children,
    mode = 'dark',
    fixed = false,
    placeholder = false,
    zIndex = 9,
  } = props

  const wrapCls = classnames(prefixCls, `${prefixCls}-${mode}`, {
    [`${prefixCls}-fixed`]: fixed
  })

  return (
    <div
      className={(fixed && placeholder) ? `${prefixCls}-placeholder` : ''}
    >
      <div
        className={wrapCls}
        style={{zIndex: fixed ? zIndex : 0}}
      >
        <div
          className={`${prefixCls}-left`}
          role="button"
          onClick={onLeftClick}
        >
          {
            icon ?
              (
                // tslint:disable-next-line:jsx-no-multiline-js
                <span className={`${prefixCls}-left-icon`} aria-hidden="true">
                  { icon }
                </span>
              )
            :
              null
          }
          { leftContent }
        </div>
        <div className={`${prefixCls}-title`}>{ children || title }</div>
        <div className={`${prefixCls}-right`}>{ rightContent }</div>
      </div>
    </div>
  )

}