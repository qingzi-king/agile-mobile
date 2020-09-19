import classnames from 'classnames';
import React from 'react';
import { NavBarPropsType } from './PropsType';

const prefixCls = 'fam-navbar';

export default (props: NavBarPropsType) => {
  const {
    title,
    onLeftClick,
    leftContent,
    rightContent,
    icon,
    children,
    mode = 'dark',
    fixed = false,
    placeholder = false,
    zIndex = 9,
  } = props;

  const wrapCls = classnames(prefixCls, `${prefixCls}-${mode}`, {
    [`${prefixCls}-fixed`]: fixed
  });

  return (
    <div
      className={(fixed && placeholder) ? `${prefixCls}-placeholder` : ''}
    >
      <div
        className={wrapCls}
        style={{zIndex: fixed ? zIndex : 0}}
      >
        <div
          className={`${prefixCls}-left`}
          role="button"
          onClick={onLeftClick}
        >
          {icon ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <span className={`${prefixCls}-left-icon`} aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}-title`}>{children || title}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    </div>
  );

}