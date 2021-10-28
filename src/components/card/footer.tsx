import * as React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-card'

export interface CardFooterProps {
  content?: React.ReactNode
  extra?: React.ReactNode
  className?: string
  style?: object
}

const CardFooter: React.FC<CardFooterProps> = props => {

  const { content, className, style = {}, extra, ...restProps } = props
  const wrapCls = classnames(`${prefixCls}-footer`, className)

  return (
    <div className={wrapCls} {...restProps} style={style}>
      <div className={`${prefixCls}-footer-content`}>{content}</div>
      {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
    </div>
  )

}

export default CardFooter
