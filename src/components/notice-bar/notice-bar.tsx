import React from 'react'
import classnames from 'classnames'
import Icon from '../icon'
import Marquee from './marquee'

export interface NoticeBarProps {
  mode?: 'closable' | 'link' | undefined
  onClick?: () => void
  icon?: React.ReactElement<any> | null
  action?: React.ReactElement<any>
  className?: string
  style?: object
  multiLine?: boolean
  animateSpeed?: 'slow' | 'normal' | 'fast' | number
  animateLoop?: boolean
}

// 动画速度配值fps
function transAnimateSpeedToFps(
  speed: NoticeBarProps['animateSpeed'],
): number {
  if (typeof speed === 'number') {
    return Math.floor(1 / (speed / 1000))
  }

  switch (speed) {
    case 'slow':
      return 25
    case 'normal':
      return 40
    case 'fast':
      return 55
  }

  return 40
}

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
  static defaultProps = {
    mode: '',
    icon: '',
    onClick() {},
  }

  constructor(props: NoticeBarProps) {
    super(props)
    this.state = {
      show: true,
    }
  }

  onClick = () => {
    const { mode, onClick } = this.props
    if (onClick) {
      onClick()
    }
    if (mode === 'closable') {
      this.setState({ show: false })
    }
  }

  render() {
    const {
      mode,
      icon,
      onClick,
      children,
      className,
      style = {},
      action,
      multiLine = false,
      animateLoop = false,
      animateSpeed = 'normal',
      ...restProps
    } = this.props

    const extraProps: any = {}
    let operationDom: any = null

    const prefixCls = multiLine ? 'fam-notice-bar-multi-line' : 'fam-notice-bar'

    if (mode === 'closable') {
      operationDom = (
        <div
          className={`${prefixCls}-operation`}
          onClick={this.onClick}
          role="button"
          aria-label="close"
        >
          { action ? action : <Icon.CloseOutline /> }
        </div>
      )
    } else {
      if (mode === 'link') {
        operationDom = (
          <div
            className={`${prefixCls}-operation`}
            role="button"
            aria-label="go to detail"
          >
            { action ? action : <Icon.RightOutline /> }
          </div>
        )
      }
      extraProps.onClick = onClick
    }

    const wrapCls = classnames(prefixCls, className)

    return this.state.show ? (
      <div className={wrapCls} style={style} {...restProps} {...extraProps} role="alert">
        {
          icon && (
            <div className={`${prefixCls}-icon`} aria-hidden="true">
              { icon }
            </div>
          )
        }
        <div className={`${prefixCls}-content`}>
          {
            animateLoop ? (
              <Marquee
                text={children as string}
                fps={transAnimateSpeedToFps(animateSpeed)}
                loop={animateLoop}
              />
            )
            :
              children
          }
        </div>
        { operationDom }
      </div>
    ) : null
  }
}