import React from 'react'
import classnames from 'classnames'

const prefixCls = 'fam-progress'

export interface ProgressProps {
  className?: string
  // 进度
  percent?: number 
  // 是否显示填充块
  unfilled?: boolean
  // 文字颜色
  textColor?: string
  // 滑块颜色
  sliderColor?: string
  // 是否未激活
  inactive?: boolean
  // 显示进度
  info?: boolean
  // 滑块宽度
  sliderWidth?: number
  // 进度条样式
  style?: React.CSSProperties
  // 进度样式
  barStyle?: React.CSSProperties
}

export default (props: ProgressProps) => {

  const {
    className,
    percent = 0,
    unfilled = true,
    inactive = false,
    info = false,
    sliderWidth = 2, // 滑块宽度
    textColor = '#000',
    sliderColor,
    style = {},
    barStyle = {},
  } = props

  const inactiveColor = '#CCC'

  const wrapCls = classnames(`${prefixCls}-outer`, className, {
    [`${prefixCls}-hide-outer`]: !unfilled,
  })

  const percentStyle = {
    width: `${percent}%`,
    height: 0,
  }

  // 额外设置进度样式
  barStyle.borderWidth = sliderWidth
  barStyle.borderColor = inactive ? inactiveColor : sliderColor // 未激活优先

  return (
    <div className={prefixCls}>
      <div
        style={style}
        className={wrapCls}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`${prefixCls}-bar`}
          style={{ ...barStyle, ...percentStyle }}
        />
      </div>
      {
        info && <div className={`${prefixCls}-text`} style={{color: inactive ? inactiveColor : textColor}}>{percentStyle.width}</div>
      }
    </div>
  )
}