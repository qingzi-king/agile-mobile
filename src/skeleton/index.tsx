import React, { Fragment } from 'react';
import classnames from 'classnames';
import { SkeletonPropsType } from './PropsType';

const prefixCls = 'fam-skeleton';

const Skeleton: React.FC<SkeletonPropsType> = props => {

  const {
    className,
    style = {},
    loading = true,
    animate = true,
    title = false,
    avatar = false,
    row = 0,
    rowWidth = '100%',
    round = false,
    titleWidth = '40%',
    avatarSize = 32,
    avatarShape = 'round', // square
    loops = 1,
    children,
  } = props;

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-animate`]: animate,
    [`${prefixCls}-round`]: round,
  });
  const avatarWrapCls = classnames(`${prefixCls}-avatar`, {
    [`${prefixCls}-shape--${avatarShape}`]: avatarShape
  });

  if (!loading) {
    return <Fragment> {children}</Fragment>;
  }

  let rows = new Array(row).fill(0);
  let entries = new Array(loops).fill(0);

  let entryDOM = entries.map((entry, i) => {

    let newStyle = {
      marginTop: i > 0 ? 30 : 0,
      ...style
    };

    return (
      <div key={i} className={wrapCls} style={newStyle}>
      {
        avatar && <div className={avatarWrapCls} style={{width: avatarSize, height: avatarSize}}></div>
      }
      <div className={`${prefixCls}-content`}>
        {
          title && <div className={`${prefixCls}-title`} style={{width: titleWidth}}></div>
        }
        {
          rows.length > 0 && rows.map((d, i) => {
            return (
              <div key={i} className={`${prefixCls}-row`} style={{width: rowWidth}}></div>
            )
          })
        }
      </div>
    </div>
    )
  })

  return <Fragment>{entryDOM}</Fragment>;

}

export default Skeleton;