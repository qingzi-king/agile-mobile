import classnames from 'classnames';
import * as React from 'react';
import { CheckBoxListPropsType } from './PropsType';
import { List } from '../index';
import CheckBox from './Item';

const ListItem = List.Item;
const prefixCls = 'fam-checkbox-list';

const CheckBoxListItem: React.FC<CheckBoxListPropsType> = props => {

  const {
    className,
    style = {},
    activeColor,
    disabled = false,
    checked = false,
    onChange,
    children,
    describe,
    ...otherProps
  } = props;

  const handleChange = () => {

    if (!disabled && onChange) {
      onChange();
    }

  }

  const wrapCls = classnames(prefixCls, className);

  let newStyle: any = { ...style };

  if (!disabled && checked && activeColor) {
    newStyle.color = activeColor;
  }

  return (
    <ListItem
      {...otherProps}
      className={wrapCls}
      extra={<CheckBox mode="list" transparent={!checked} checked={checked} />}
      describe={describe}
      onClick={handleChange}
      disabled={disabled}
    >
      {children}
    </ListItem>
  )
}

export default CheckBoxListItem;