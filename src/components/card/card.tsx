import * as React from 'react'
import classnames from 'classnames'

export interface CardPropsType {
  full?: boolean
  style?: object
  className?: string
}

export interface CardProps extends CardPropsType {
  prefixCls?: string
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    prefixCls: 'fam-card',
    full: false,
  }

  render() {
    const { prefixCls, full, className, style, ...resetProps } = this.props
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-full`]: full,
    })

    return <div className={wrapCls} {...resetProps} style={style} />
  }
}
