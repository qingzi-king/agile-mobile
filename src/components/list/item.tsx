import * as React from 'react'
import classnames from 'classnames'
import Icon from '../icon'

const prefixCls = 'fam-list'

export interface ListItemProps {
  className?: string
  extra?: React.ReactNode
  describe?: React.ReactNode
  title?: React.ReactNode
  disabled?: boolean
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  onClick?: (e: React.SyntheticEvent) => void
  thumb?: React.ReactNode | null
}

const Item: React.FC<ListItemProps> = props => {

  const {
    className,
    wrap,
    children,
    title,
    thumb,
    extra,
    describe,
    arrow,
    disabled = false,
    onClick
  } = props

  const wrapCls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-active`]: arrow,
    [`${prefixCls}-item-disabled`]: disabled,
  })

  const lineCls = classnames(`${prefixCls}-line`, {
    [`${prefixCls}-line-wrap`]: wrap,
  })

  const arrowCls = classnames(`${prefixCls}-arrow`, {
    [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
    [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
    [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
  })

  const handleOnClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(ev)
    }
  }

  return (
    <div
      className={wrapCls}
      onClick={ev => handleOnClick(ev)}
    >
      {
        thumb ? (
          <div className={`${prefixCls}-thumb`}>
            { thumb }
          </div>
        ) : null
      }
      <div className={lineCls}>
        <div className={`${prefixCls}-title`}>{children !== undefined ? children : title}</div>
        {
          extra !== undefined && (
            <div className={`${prefixCls}-extra`}>{extra}</div>
          )
        }
        {
          describe !== undefined && (
          <div className={`${prefixCls}-describe`}>{describe}</div>
          )
        }
        { arrow && !describe && <Icon.RightOutline className={arrowCls} aria-hidden="true" /> }
      </div>
      { arrow && describe && <Icon.RightOutline className={arrowCls} aria-hidden="true" /> }
    </div>
  )
}

export default Item