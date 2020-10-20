import classnames from 'classnames';
import * as React from 'react';
import { ResultPropsType } from './PropsType';
import icons from './icons';

const prefixCls = 'fam-result';

const Result: React.FC<ResultPropsType> = props => {

  const {
    className,
    style,
    title,
    message,
    img,
    imgUrl,
    imgType,
    expandNode,
    empty = false,
  } = props;

  const wrapCls = classnames(prefixCls, className);

  let imgContent: JSX.Element | null = null;

  if (img) {
    // 插图 - 节点
    imgContent = <div className={`${prefixCls}-img`}>{img}</div>;
  } else if (imgUrl) {
    // 插图 - 地址
    imgContent = (
      <div className={empty ? `${prefixCls}-empty-img` : `${prefixCls}-img`} style={{ backgroundImage: `url(${imgUrl})` }} />
    );
  } else if (imgType) {
    // 插图 - 默认
    imgContent = (
      <div
        className={empty ? `${prefixCls}-empty-img` : `${prefixCls}-img`}
        dangerouslySetInnerHTML={{__html: icons[imgType]}}
      />
    );
  }

  return (
    <div className={wrapCls} style={style}>
      { imgContent }
      {
        title && (
          <div className={`${prefixCls}-title`}>
            { title }
          </div>
        )
      }
      {
        message && (
          <div className={`${prefixCls}-message`}>
            { message }
          </div>
        )
      }
      {/* 扩展节点 */
        expandNode && (
          <div className={`${prefixCls}-expand`}>
            { expandNode }
          </div>
        )
      }

    </div>
  )
}

export default Result;