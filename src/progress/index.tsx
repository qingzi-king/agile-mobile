import classnames from 'classnames';
import React from 'react';
import { ProgressPropsType } from './PropsType';

const prefixCls = 'fam-progress';

export default (props: ProgressPropsType) => {

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
  } = props;

  const inactiveColor = '#CCC';

  const wrapCls = classnames(`${prefixCls}-outer`, className, {
    [`${prefixCls}-hide-outer`]: !unfilled,
  });

  const percentStyle = {
    width: `${percent}%`,
    height: 0,
  };

  // 额外设置进度样式
  barStyle.borderWidth = sliderWidth;
  barStyle.borderColor = inactive ? inactiveColor : sliderColor; // 未激活优先

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