import classnames from 'classnames';
import * as React from 'react';
import { RadioListPropsType } from './PropsType';
import { List } from '../index';
import Radio from './Item';

const ListItem = List.Item;
const prefixCls = 'fam-radio-list';

const RadioListItem: React.FC<RadioListPropsType> = props => {

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
      extra={<Radio mode="list" transparent={!checked} checked={checked} />}
      describe={describe}
      onClick={handleChange}
    >
      {children}
    </ListItem>
  )
}

export default RadioListItem;