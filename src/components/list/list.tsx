import * as React from 'react';
import classnames from 'classnames';

const prefixCls = 'fam-list';

export interface ListProps {
  className?: string;
  renderHeader?: (() => React.ReactNode) | React.ReactNode
  renderFooter?: (() => React.ReactNode) | React.ReactNode
  style?: object
}

const List: React.FC<ListProps> = props => {

  const {
    children,
    className,
    style,
    renderHeader,
    renderFooter,
    ...restProps
  } = props;

  const wrapCls = classnames(prefixCls, className);

  return (
    <div className={wrapCls} style={style} {...restProps}>
      {
        renderHeader ? (
          <div className={`${prefixCls}-header`}>
            {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </div>
        ) : null
      }
      {
        children ? (
          <div className={`${prefixCls}-body`}>{children}</div>
        ) : null
      }
      {
        renderFooter ? (
          <div className={`${prefixCls}-footer`}>
            {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
          </div>
        ) : null
      }
    </div>
  )
}

export default List;