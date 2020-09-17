import classnames from 'classnames';
import * as React from 'react';
import { IconPropsType } from './PropsType';

export interface IconProps extends IconPropsType {
  className?: string
}

export default (props: any) => {
  const { type, className, color, size = 'md', ...restProps } = props;

  const wrapCls = classnames(
    className,
    'fam-icon',
    `fam-icon-${type}`,
    {
      [`fam-icon-${size  || 'md'}`]: size && (size !== 'inherit')
    }
  );

  return (
    <i className={wrapCls} style={{color: color}} {...(restProps as any)}></i>
  );
};