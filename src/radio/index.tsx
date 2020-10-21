import classnames from 'classnames';
import * as React from 'react';
import { RadioPropsType } from './PropsType';
import Item from './Item';

const prefixCls = 'fam-radio-group';

const Group: React.FC<RadioPropsType> = props => {

  const {
    className,
    style,
    name,
    disabled = false,
    checked = false,
    onChange,
    children
  } = props;

  const wrapCls = classnames(prefixCls, className);

  return (
    <div className={wrapCls} style={style}>
      { children }
    </div>
  )
}

Group.displayName = 'Radio'
Group.defaultProps = {}

export default {
  Group,
  Item,
}