import classnames from 'classnames';
import * as React from 'react';
import { IconPropsType } from './PropsType';

export interface IconProps extends IconPropsType {
  className?: string
}

export default (props: any) => {
  const {
    type,
    className,
    color,
    style,
    size = 'md',
    ...restProps
  } = props;

  const wrapCls = classnames(
    className,
    'fam-icon',
    `fam-icon-${type}`,
    {
      [`fam-icon-${size}`]: size && (size !== 'inherit')
    }
  );

  let newStyles: React.CSSProperties = { ...style };

  if (color) {
    newStyles.color = color;
  }

  if (typeof size === 'number') {
    newStyles.fontSize = size;
  }

  return (
    <i className={wrapCls} style={newStyles} {...(restProps as any)}></i>
  );
};