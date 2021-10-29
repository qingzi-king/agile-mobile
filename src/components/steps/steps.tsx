import React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-steps'

export interface StepsProps {
  style?: object
  className?: string
  direction?: 'vertical' | 'horizontal'
  status?: 'wait' | 'process' | 'finish' | 'error'
  current?: number
  children: any[]
}

const Steps: React.FC<StepsProps> = props => {

  const {
    children,
    style,
    className = '',
    status = 'wait',
    direction = 'vertical',
    current = 0,
    ...restProps
  } = props

  const wrapCls = classnames(
    prefixCls,
    className,
    `${prefixCls}-${direction}`
  )

  return (
    <div className={wrapCls} style={style} {...restProps}>
      {
        React.Children.map(props.children, (child, index) => {

          if (!React.isValidElement(child)) {
            return child
          }

          let childProps = {
            _status: status,
            _index: index,
            _current: current
          }

          return React.cloneElement(child, childProps)
        })
      }
    </div>
  )
}

export default Steps