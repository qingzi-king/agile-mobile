import * as React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-card'

export interface CardBodyProps {
  className?: string
  corner?: boolean
}

const CardBody: React.FC<CardBodyProps> = props => {

  const { className, children, corner, ...restProps } = props
  const wrapCls = classnames(className, {
    [`${prefixCls}-body-corner`]: corner,
    [`${prefixCls}-body`]: !corner,
  })

  return (
    <div className={wrapCls} {...restProps}>
      {
        /* 多个子节点时强制转入div处理成块节点 */
        children instanceof Array ?
        (
          children.map((n: any, i ) => {
            return <div key={i} className={`${prefixCls}-body-item`}>{n}</div>
          })
        )
        : children
      }
    </div>
  )

}

export default CardBody
