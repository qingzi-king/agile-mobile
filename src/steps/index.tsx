import classnames from 'classnames';
import React from 'react';
import { StepPropsType } from './PropsType';
import { Icon } from '../index';
import Step from './Step';

const prefixCls = 'fam-steps';

const Steps: React.FC<StepPropsType> & {
  Step: typeof Step
} = props => {

  const {
    children,
    className = '',
    style,
    status = 'wait',
    direction = 'vertical',
    ...restProps
  } = props;

  const wrapCls = classnames(prefixCls, `${prefixCls}-${direction}`, className);
  const current = props.current as number || 0;
  const filterChildren: any[] = [];

  if (children && children.length) {
    children.forEach((item: any, index) => {
      if (React.isValidElement(item)) {
        filterChildren.push(item);
      }
    });
  }

  const handleClassNames = (beforeClass: string, newClass: string) => {
    return beforeClass ? `${beforeClass} ${newClass}` : newClass;
  }

  // 重新加工子节点
  const newChildren = React.Children.map(filterChildren, (item: any, index) => {

    let icon = item.props.icon;
    let className = item.props.className || '';

    // 已完成的步骤
    if (index + 1 < current || (index + 1 === current && status === 'finish')) {
      className = handleClassNames(className, `${prefixCls}-tail-finish`);
      if (!icon || (icon && typeof icon !== 'string')) {
        icon = <Icon type="check-o" size="sm" color="#268AF0" />;
      }
    }

    // 激活节点后序步骤置灰
    if (index + 1 > current) {
      className = handleClassNames(className, `${prefixCls}-icon-wait`);
    }

    // 已完成后一节点激活（异常则不激活）
    if (index === current && status === 'finish') {
      className = handleClassNames(className, `${prefixCls}-icon-process`);
    }

    // 步骤错误
    if (status === 'error') {

      // 标红错误图标
      if (index + 1 === current) {
        className = handleClassNames(className, `${prefixCls}-tail-wait`);
        icon = <Icon type="close" size="sm" color="#F85C5C" />;
      }

      // 标红连接线
      if (index + 2 === current) {
        className = handleClassNames(className, `${prefixCls}-tail-error`);
      }

    }

    if (icon) {
      icon =
        typeof icon === 'string' ? (
            <Icon type={icon} size="xs" />
          ) : (
          <div className={`${prefixCls}-icon`}>{icon}</div>
        );
    }

    return React.cloneElement(item, {
      ...item.props,
      className,
      icon,
      status,
      _index: ++index,
    });
  })

  return (
    <div className={wrapCls} style={style} {...restProps}>
      { newChildren }
    </div>
  )
}

Steps.Step = Step;

export default Steps;