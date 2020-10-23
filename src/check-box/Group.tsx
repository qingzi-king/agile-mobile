import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { CheckBoxGroupPropsType } from './PropsType';

const prefixCls = 'fam-checkbox-group';

const Group: React.FC<CheckBoxGroupPropsType> = props => {

  const [selectedValues, setSelectedValues] = useState<any>([]);

  const {
    className,
    style,
    values,
    activeColor,
    direction = 'horizontal',
    disabled = false,
    maxCheckedCounts = 10000,
    onChange,
    children
  } = props;

  useEffect(() => {

    if (values) {
      setSelectedValues(values);
    }

  }, [values]);

  let hasRepeatValue = false; // 是否存在重复值
  const filterChildren: any[] = [];

  if (children && children.length) {
    children.forEach((item: any, index) => {
      if (React.isValidElement(item)) {
        filterChildren.push(item);
      }
    });
  }

  const handleCheckBoxChange = (value: any) => {
    let newSelectedValues: any = [...selectedValues];

    let hasValue = newSelectedValues.findIndex((v: any) => { return v === value });

    if (hasValue != -1) {
      // 移除
      newSelectedValues.splice(hasValue, 1)
    } else {
      // 新增
      newSelectedValues.push(value);
    }

    setSelectedValues(newSelectedValues);

    if (onChange) {
      onChange([...newSelectedValues]);
    }
  }

  // 重新加工子节点
  const newChildren = React.Children.map(filterChildren, (item: any, index) => {

    let className = item.props.className || '';

    return React.cloneElement(item, {
      ...item.props,
      className,
      selectedValues,
      activeColor,
      disabled: disabled ? true : item.props.disabled,
      onChange: handleCheckBoxChange,
    });
  })

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-vertical`]: direction === 'vertical'
  });

  // 存在重复值拒绝渲染
  if (hasRepeatValue) return <div></div>;

  return (
    <div className={wrapCls} style={style}>
      { newChildren }
    </div>
  )
}

Group.displayName = 'CheckBox'
Group.defaultProps = {}

export default Group;