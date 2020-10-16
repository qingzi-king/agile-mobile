import React, { useState, useEffect, useCallback }  from 'react';
import classnames from 'classnames';
import { useEmblaCarousel } from 'embla-carousel/react';
import { CarouselPropsType } from './PropsType';

const prefixCls = 'fam-carousel';

const Carousel: React.FC<CarouselPropsType> = props => {

  const {
    className,
    style = {},
    autoplay = false,
    duration = 2000,
    activeIndex = 0,
    speed = 10,
    loop = false,
    indicator = true,
    axis = 'x',
    indicatorColor = '#268AF0',
    afterChange,
    children,
    ...restProps
  } = props;

  let indicatorDirection = props.indicatorDirection; // 指示器方位初始化

  if (!indicatorDirection) {
    indicatorDirection = (axis === 'y') ? 'left' : 'bottom'; // 指示器默认情况：垂直放左侧，其他情况放底部
  }

  const [selectedIndex, setSelectedIndex] = useState(activeIndex); // 状态

  // 初始化Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    axis,
    speed,
  });

  useEffect(() => {

    let timer: any;

    // Embla API is ready
    if (emblaApi) {
      emblaApi.scrollTo(activeIndex);
      emblaApi.on("select", handleOnSelect);
    }

    // 自动播放
    if (autoplay) {
      timer = setInterval(() => {

        handleScrolNext();
  
      }, duration);
    }

    return () => {
      if (timer) clearInterval(timer);
    }
  // eslint-disable-next-line
  }, [emblaApi, activeIndex]);

  // 选中节点
  const handleOnSelect = useCallback(() => {
    if (!emblaApi) return;

    let selectedIndex = emblaApi.selectedScrollSnap(); // 当前已选中的节点

    setSelectedIndex(selectedIndex);

    if (afterChange) afterChange({selectedIndex});
  // eslint-disable-next-line
  }, [emblaApi, setSelectedIndex]);

  // 滚动到后一节点
  const handleScrolNext = useCallback(() => {
    if (!emblaApi) return;

    let isCanScrollNext = emblaApi.canScrollNext();

    if (isCanScrollNext) {
      emblaApi.scrollNext();
    }

  }, [emblaApi])

  // 过滤无效节点
  const filterChildren: any[] = [];

  if (children && children.length) {
    children.forEach((item: any, index) => {
      if (React.isValidElement(item)) {
        filterChildren.push(item);
      }
    });
  }

  const newChildren = React.Children.map(filterChildren, (item: any, index) => {

    let className = item.props.className || `${prefixCls}-slide`;

    return React.cloneElement(item, {
      ...item.props,
      className,
    });
  });

  // 样式
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-vertical`]: axis === 'y'
  });

  const dotWrapCls = classnames(`${prefixCls}-dot-${indicatorDirection}`, {
    [`${prefixCls}-dot-vertical`]: axis === 'y',
    [`${prefixCls}-dot-horizontal`]: axis === 'x',
  });

  return (
    <div
      {...restProps}
      className={wrapCls}
    >
      <div ref={emblaRef}>
        <div className={`${prefixCls}-container`} style={style}>
          { newChildren }
        </div>
      </div>
      {
        /* 显示指示器 */
        indicator && (
          <div className={dotWrapCls}>
            {
              newChildren.map((slide: any, index: number) => {
                let slideStyle: React.CSSProperties = {};
                if (selectedIndex === index) {
                  slideStyle.backgroundColor = indicatorColor;
                }
                return <div key={index} className={`${prefixCls}-dot-item`} style={slideStyle} />
              })
            }
          </div>
        )
      }
    </div>
  );

}

export default Carousel;