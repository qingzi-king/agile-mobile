import * as React from 'react';
import classnames from 'classnames';
import { TabBarItemPropsTypes } from './PropsType';
import { Icon, Badge } from '../index';

const prefixCls = 'fam-tab-bar-item';

const Item: React.FC<TabBarItemPropsTypes> = props => {

  const {
    className,
    icon,
    title,
    badge,
    dot,
    children,
    fkey,
    activeKey,
    selectedColor,
    onClick
  } = props;

  const isSelected = activeKey && activeKey === fkey ? true : false;
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-active`]: isSelected
  });

  const handleOnClick = () => {
    if (onClick) {
      onClick(fkey);
    }
  }

  let content;
  let initContent = (
    <div>
      {
        icon ? (
          <div className={`${prefixCls}-icon`}>
            { typeof icon === 'string' ? <Icon type={icon} size="sm" /> : icon }
          </div>
        ) : null
      }
      <div className={`${prefixCls}-title`}>{ title }</div>
    </div>
  );

  if (badge) {
    content = (
      <Badge text={badge} className="fam-tab-bar-badge">
        { initContent }
      </Badge>
    )
  } else if (dot) {
    content = (
      <Badge dot className="fam-tab-bar-badge">
        { initContent }
      </Badge>
    )
  } else {
    content = initContent
  }

  return (
    <div
      className={wrapCls}
      onClick={handleOnClick}
      style={ isSelected && selectedColor ? { color: selectedColor } : {}}
    >
      { content }
    </div>
  )
}

export default Item;