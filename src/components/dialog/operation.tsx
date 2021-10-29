import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import Button from '../button'

const prefixCls = 'fam-dialog'

export interface OperationProps {
  className?: string
  direction?: 'horizontal' | 'vertical'
  actions?: Array<any>
  transparent?: boolean
  maskClosable?: boolean
  animation?: boolean
}

export interface Action<T> {
  text: string
  onPress?: (...args: any[]) => void | Promise<any>
  loading: Boolean
  style?: T | string
}

export default function alert(props: OperationProps) {

  const {
    className,
    transparent = false,
    maskClosable = true,
    animation = true,
    direction = 'vertical', // horizontal vertical
    actions = [{ text: '确定' }],
  } = props

  let closed = false

  const div = document.createElement('div')
  const maskDiv = document.createElement('div')
  const timestamp = new Date().getTime()

  div.id = `${prefixCls}-${timestamp}`
  document.body.appendChild(div)

  document.body.className = "fam-overfow-hidden" // 针对弹出层滚动击穿，body隐藏处理

  // 蒙层是否显示
  maskDiv.className = transparent ? `${prefixCls}-mask-transparent` : `${prefixCls}-mask`
  document.body.appendChild(maskDiv)

  // 蒙层允许关闭
  if (maskClosable) {
    maskDiv.onclick = () => {
      close()
    }
  }

  // 关闭popup
  function close() {

    ReactDOM.unmountComponentAtNode(div)
    ReactDOM.unmountComponentAtNode(maskDiv)

    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }

    if (maskDiv && maskDiv.parentNode) {
      maskDiv.parentNode.removeChild(maskDiv)
    }

    document.body.className = "" // 取消body溢出隐藏

  }

  let mainWarpClassName = prefixCls

  if (transparent) {
    mainWarpClassName += ` ${prefixCls}-boxshadow`
  }

  // 样式类合并
  const wrapCls = classnames(mainWarpClassName, className, {
    [`${prefixCls}-animation-in`]: animation
  })

  const footer = actions.map((button: Action<React.CSSProperties>) => {

    const orginPress = button.onPress || function() {}
    button.onPress = () => {
      if (closed) {
        return
      }

      const res = orginPress()

      if (res && res.then) {
        // setLoading(true)
        res
          .then(() => {
            closed = true
            // setLoading(false)
            close()
          })
          .catch(() => {})
      } else {
        close()
      }
    }

    return button

  })

  ReactDOM.render(
    <div className={wrapCls}>
      <div className={`${prefixCls}-footer-${direction}`}>
        {
          footer.map((action: any, key: number) => {
            return <FooterButton key={key} {...action} />
          })
        }
      </div>
    </div>,
    div,
  )

  return {
    close
  }

}

// 按钮控制
const FooterButton = (props: any) => {

  const [loading, setLoading] = useState(false)

  const handleButton = () => {
    setLoading(true)
    props.onPress()
  }

  const style: any = {
    '--text-color': props.color || '#333'
  }

  return (
    <Button
      block
      size="large"
      className={`${prefixCls}-footer-button`}
      style={style}
      loading={loading}
      disabled={props.disabled || loading}
      onClick={handleButton}
    >
      { props.text }
    </Button>
  )
}
