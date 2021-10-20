import * as React from 'react'
import classnames from 'classnames'

export interface ElasticBoxProps {
  prefixCls?: string
  className?: string
  styles?: any
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'baseline'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
}

class ElasticBox extends React.Component<ElasticBoxProps, any> {
  static defaultProps = {
    prefixCls: 'fam-elastic-box',
    direction: 'horizontal',
    styles: {},
    inline: false,
    block: false,
    hairline: false,
    disabled: false,
    loading: false,
    activeStyle: {},
  }

  render() {
    const {
      prefixCls,
      styles,
      children,
      className,
      direction,
      align,
      justify,
      wrap,
      block,
      ...restProps
    } = this.props

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-wrap`]: wrap,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-align-${align}`]: !!align,
      [`${prefixCls}-justify-${justify}`]: !!justify,
    })

    return (
      <div
        className={wrapCls}
        style={styles}
      >
        {React.Children.map(children, child => {
          return (
            child !== null &&
            child !== undefined && (
              <div className={`${prefixCls}-item`}>{child}</div>
            )
          )
        })}
      </div>
    )
  }
}

export default ElasticBox