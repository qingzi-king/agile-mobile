import React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-collapse'

export interface CollapseProps {
  className?: string
  style?: object
  accordion?: boolean
  bordered?: boolean
  onChange?: (e: any) => void
  activeKeys?: Array<number | string>
  defaultActiveKey?: Array<number | string> | string | number
  expandIcon?: React.ReactNode
}

export default class Collapse extends React.Component<CollapseProps, any> {

  constructor(props: CollapseProps) {
    super(props)

    const { accordion, activeKeys } = props

    let initActiveKeys:Array<number | string> = []

    // 对于外部初始化时，手风琴模式下仅取第一个元素，其他情况全部
    if (activeKeys) {
      if (accordion) {
        initActiveKeys.push(activeKeys[0])
      } else {
        initActiveKeys = activeKeys.filter(Boolean)
      }
    }

    this.state = {
      activeKeys: initActiveKeys
    }
  }

  handleActiveKeyChange = (k: string) => {
    const { onChange, accordion } = this.props
    let activeKeys = this.state.activeKeys

    if (accordion) {
      activeKeys = [k]
    } else {
      !activeKeys.includes(k) && activeKeys.push(k)
    }

    this.setState({ activeKeys: activeKeys })

    if (onChange) onChange(activeKeys)
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, {
        callback: this.handleActiveKeyChange,
        fkey: child.key,
        activeKeys: this.state.activeKeys,
        accordion: this.props.accordion
      })
    })
  }

  render() {
    const {
      style,
      className,
      bordered,
    } = this.props

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-border`]: bordered,
    })

    return (
      <div className={wrapCls} style={style}>
        {
          this.renderChildren()
        }
      </div>
    )
  }
}