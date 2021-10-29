import * as React from 'react';
import classnames from 'classnames';
import Badge from '../badge';

const prefixCls = 'fam-tabbar-item';

export interface TabBarItemProps {
  key: string | number;
  className?: string;
  style?: object;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  badge?: string | number;
  dot?: boolean;
  onClick?: (e: any) => void;
  selectedColor?: string;
  activeKey?: string;
  fkey?: string;
}

const Item: React.FC<TabBarItemProps> = props => {

  const {
    className,
    icon,
    title,
    badge,
    dot,
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
            { icon }
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