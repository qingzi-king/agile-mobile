import classnames from 'classnames';
import * as React from 'react';
import { ListPropsTypes } from './PropsType';
import Item from './Item';

const prefixCls = 'fam-list';

const List: React.FC<ListPropsTypes> & {
  Item: typeof Item
} = props => {

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

List.Item = Item;

export default List;