import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { StickyPropsType } from './PropsType';
import { unitToPx } from '../utils/format/unit';

const prefixCls = 'fam-sticky';

let initRectObj = {
  bottom: 0,
  height: 'auto',
  left: 0,
  right: 0,
  top: 0,
  width: '100%',
  x: 0,
  y: 0,
};

const Sticky: React.FC<StickyPropsType> = props => {

  const {
    className,
    style = {},
    zIndex = 99,
    offsetTop = 0, // px rem vw
    container = {},
    onScroll,
    children
  } = props;

  const offsetTopToPx = unitToPx(offsetTop); // 全部转化为px

  const thisRef = React.createRef();
  const thisChildRef = React.createRef();
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [childNodeRef] = useState<any>(thisChildRef);
  const [nodeRef] = useState<any>(thisRef);
  const [transformY, setTransformY] = useState<number>(0);
  const [isTransformY, setIsTransformY] = useState<boolean>(false);

  let wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-fixed`]: isFixed
  });

  useEffect(() => {

    handleDOMVisible();

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    }

    // eslint-disable-next-line
  }, [])

  /********* 节点可视处理 *********/
  const handleDOMVisible = () => {

    // 1、记录节点的初始尺寸和位置
    const currentNode = nodeRef.current;
    const thisNodeRect = currentNode.getBoundingClientRect();

    initRectObj = thisNodeRect;

    // 2、观察节点是否在可视区域

    const io = new IntersectionObserver(
      (entries) => {

        // trigger scroll when visibility changed

        if (!container && entries[0].intersectionRatio < 1) {
          handleDOMFixed(true); // 完全或部分不可见，需要定位
        } else {
          handleDOMFixed(false); // 完全可见，不需要定位
        }

      },
      {
        root: null, // 与相对元素位置变化触发回调
        rootMargin: '0px',
        threshold: [0], // 回调触发的门槛值，如：[0, 0.25, 0.5, 0.75, 1]
      }
    );

    io.observe(currentNode);

  }

  /********* 页面滚动 *********/
  const handleScroll = () => {

    const currentNode = nodeRef.current;
    const currentChildNode = childNodeRef.current;

    const res = currentNode.getBoundingClientRect(); // 返回元素的大小及其相对于视口的位置。
    const resChild = currentChildNode.getBoundingClientRect(); // 返回元素的大小及其相对于视口的位置。

    let _isFixed = false;

    if (res.top > offsetTopToPx) {
      setIsFixed(false); // 节点已全部在可视区域，取消定位
    } else {
      setIsFixed(true);
      _isFixed = true;
      handleDOMTransform(0);
    }

    if (container.current) {

      const fatherNode = container.current;
      const resFather = fatherNode.getBoundingClientRect();

      const fatherToPagTop = resFather.top + resFather.height;
      const childToPagTop = resChild.top + resChild.height;

      if (fatherToPagTop >= 0 && childToPagTop > fatherToPagTop) {

        handleDOMTransform(resChild.height - fatherToPagTop);

      } else {

        handleDOMTransform(0);

      }
      
      if (fatherToPagTop < 0) {

        setIsFixed(false);

      }

    }

    if (onScroll) {
      onScroll({ rect: resChild, isFixed: _isFixed });
    }

  }

  const handleDOMFixed = (_isFixed: boolean) => {

    // 减少不必要更新次数
    if (isFixed !== _isFixed) {

      setIsFixed(_isFixed);

    }

  }

  const handleDOMTransform = (_transformY: number) => {

    // 由于0情况会出现多次
    if (transformY === _transformY && _transformY === 0) {

      setIsTransformY(true);
      setTransformY(0);

    }

    // 减少不必要更新次数
    if (transformY !== _transformY && !isTransformY) {

      setTransformY(_transformY);
      setIsTransformY(false);

    }

  }

  let newStyle: any = {...style };

  if (isFixed) {
    newStyle.top = offsetTopToPx;
    newStyle.zIndex = zIndex;
  }

  if (isFixed && transformY > 0) {
    newStyle.transform = `translate3d(0px, -${transformY}px, 0px)`;
  }

  return (
    <div ref={nodeRef} style={{ height: initRectObj.height }}>
      <div ref={childNodeRef} className={wrapCls} style={newStyle}>
        { children }
      </div>
    </div>
  );

}

export default Sticky;