import React from 'react'
import * as ReactDOM from 'react-dom'
import classnames from 'classnames'
import Icon from '../icon'

export interface ToastProps {
  content: React.ReactNode
  duration?: number
  position?: any
  onClose?: () => void
  mask?: boolean
  icon?: React.ReactNode
}

export interface ToastConfig {
  duration: number
  mask: boolean
  position: string
}

const SHORT = 2000
let timer: any

const config: ToastConfig = {
  duration: SHORT,
  position: 'center',
  mask: false,
}

const prefixCls = 'fam-toast'
let warpDOM: any

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 处理提示
function notice(props: any) {

  const {
    type,
    content,
    duration = config.duration,
    position = config.position,
    onClose,
    mask = config.mask,
    icon
  } = props

  handleDestroyDOM()

  const iconElements: { [key: string]: React.ReactNode } = {
    info: null,
    success: <Icon.CheckCircleOutline />,
    fail: <Icon.CloseCircleOutline />,
    offline: <Icon.OfflineOutline />,
    loading: <Icon.SpinOutline />,
  }

  const iconElement = iconElements[type]

  warpDOM = document.createElement('div')

  let wrapCls = classnames(prefixCls, {
    [`${prefixCls}-top`]: position === 'top',
    [`${prefixCls}-bottom`]: position === 'bottom',
  })

  let wrapTextCls = classnames(prefixCls, `${prefixCls}-text`, {
    [`${prefixCls}-top`]: position === 'top',
    [`${prefixCls}-bottom`]: position === 'bottom',
  })

  let isShowMask = (mask || type === 'loading') ? true : false

  ReactDOM.render(
    (
      <>
        {
          !!iconElement ? (
            <>
              <div className={wrapCls}>
                <div className={`${prefixCls}-text ${prefixCls}-card`}>
                  <div className={`${prefixCls}-icon`}>
                    {/* 允许自定义图标 */
                      icon || iconElement
                    }
                  </div>
                  <div className={`${prefixCls}-desc`}>{content}</div>
                </div>
              </div>
            </>
          ) : (
            <div className={wrapTextCls}>
              {content}
            </div>)
        }
        {
          isShowMask && <div className={`${prefixCls}-mask`}></div>
        }
      </>
    ),
    warpDOM
  )

  document.body.appendChild(warpDOM)

  if (duration > 0) {

    timer = setTimeout(async () => {
      warpDOM.classList.add(`${prefixCls}-remove`)
      if (onClose) onClose()
      await sleep(100)
      await handleDestroyDOM() // ReactDOM.unmountComponentAtNode(div) // 组件可使用
    }, duration)

  }

}

// 销毁
const handleDestroyDOM = () => {
  if (timer) clearTimeout(timer)
  if (warpDOM) {
    document.body.removeChild(warpDOM)
    warpDOM = null
  }
}

export default {
  SHORT,
  info(props: ToastProps) {
    return notice({ ...props, type: 'info' })
  },
  success(props: ToastProps) {
    return notice({ ...props, type: 'success' })
  },
  fail(props: ToastProps) {
    return notice({ ...props, type: 'fail' })
  },
  offline(props: ToastProps) {
    return notice({ ...props, type: 'offline' })
  },
  loading(props: ToastProps) {
    return notice({ ...props, type: 'loading' })
  },
  hide() {
    handleDestroyDOM()
  },
  config(conf: Partial<ToastConfig> = {}) {
    const { duration = SHORT, position } = conf

    if (duration) {
      config.duration = duration
    }

    if (position) {
      config.position = position
    }

  },
}
