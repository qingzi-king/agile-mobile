import React, { useState, useCallback, useEffect } from 'react'
import classnames from 'classnames'
import Icon from '../icon'

const prefixCls = 'fam-collapse'

export interface CollapseItemProps {
  className?: string
  style?: object
  key?: number | string
  fkey?: number | string
  title: React.ReactNode
  extra?: React.ReactNode
  disabled?: boolean
  showArrow?: boolean
  callback?: () => void
  activeKeys?: Array<number | string>
  accordion?: boolean
}

interface styleObj {
  height?: string | number
  overflow?: string
  opacity?: number
}

const Item: React.FC<CollapseItemProps> = props => {

  const {
    fkey = '',
    className,
    title,
    extra,
    children,
    disabled,
    showArrow,
    style = {},
    activeKeys = [],
    callback = (e:any) => {},
  } = props

  const [visible, setVisible] = useState(false)
  const [contentStyle, setContentStyle] = useState<styleObj>({height: 0})
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {

    // 已打开才进行监听更新
    if (visible) {
      if (visible && fkey && activeKeys.includes(fkey)) {
        setContentStyle({ height: contentHeight })
        setVisible(true)
      } else {
        setVisible(false)
        setContentStyle({ height: 0, overflow: 'hidden' })
      }
    }

    // eslint-disable-next-line
  }, [activeKeys])

  // 获取内容高度，便于切换时过渡效果呈现
  const measuredRef = useCallback(node => {

    if (node !== null) {

      let nodeHeight = node.getBoundingClientRect().height

      setContentHeight(nodeHeight)

      if (!visible && activeKeys.includes(fkey)) {
        setContentStyle({ height: nodeHeight })
        setVisible(true)
      }

    }

    // eslint-disable-next-line
  }, [])

  const wrapCls = classnames(`${prefixCls}-panel`, className, {
    [`${prefixCls}-panel-disabled`]: disabled,
  })

  const headerCls = classnames(`${prefixCls}-panel-header`, {
    [`${prefixCls}-icon-up`]: !visible,
    [`${prefixCls}-icon-down`]: visible,
  })

  const contentCls = classnames(`${prefixCls}-content-wrap`, className, {
    [`${prefixCls}-panel-inactive`]: !visible,
    [`${prefixCls}-panel-active`]: visible,
  })

  // 当前子组件状态切换控制
  const handleVisible = () => {
    if (disabled) return
    setVisible(!visible)
    callback(fkey)
    if (!visible) {
      setContentStyle({ height: contentHeight })
    } else {
      setContentStyle({ height: 0, overflow: 'hidden' })
    }
  }

  return (
    <div className={wrapCls} style={style} key={fkey}>
      <div className={headerCls} onClick={handleVisible}>
        {
          title !== undefined && (
            <div className={`${prefixCls}-panel-header-title`}>{ title }</div>
          )
        }
        {
          extra !== undefined && (
            <div className={`${prefixCls}-panel-header-extra`}>{ extra }</div>
          )
        }
        {
          showArrow && (
            <div className={`${prefixCls}-panel-header-icon`}>
              <Icon.DownOutline />
            </div>
          )
        }
      </div>
      {
        children && children !== undefined && (
          <div className={contentCls} style={contentStyle}>
            <div ref={measuredRef} className={`${prefixCls}-content`}>{ children }</div>
          </div>
        )
      }
    </div>
  )
}

export default Item