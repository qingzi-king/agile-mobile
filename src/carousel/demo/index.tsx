import React, { useState } from 'react';
import { Button, Carousel } from '../../index';
import '../style/index.less';

const slides = [
  {
    name: '节点1',
    bgColor: '#69c0ff'
  },
  {
    name: '节点2',
    bgColor: '#40a9ff'
  },
  {
    name: '节点3',
    bgColor: '#69c0ff'
  },
  {
    name: '节点4',
    bgColor: '#40a9ff'
  }
];

const handleSlides = () => {
  return slides.map((slide, index) => {
    return <div key={index} style={{height:150,textAlign:'center',color:'#fff',lineHeight:'150px',fontSize:14,background:slide.bgColor}}>{slide.name}</div>;
  })
}

const Demo = () => {

  const slideDOM = handleSlides();

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleAfterChange = (params: any) => {
    const { selectedIndex } = params;
    setScrollIndex(selectedIndex);
  }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Carousel</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div className="d-demo-block">
          <Carousel indicatorColor='#FFF' loop activeIndex={scrollIndex} afterChange={handleAfterChange}>
            { slideDOM }
          </Carousel>

          <Button onClick={() => setScrollIndex(scrollIndex + 1)} block style={{marginTop:15}}>下一页</Button>
        </div>

        <h2 className="d-demo-block__title">垂直</h2>
        <div className="d-demo-block">
          {/* 垂直必须设置明确的height */}
          <Carousel indicatorColor='#FFF' axis="y" loop style={{height:150}} activeIndex={1}>
            { slideDOM }
          </Carousel>
        </div>

        <h2 className="d-demo-block__title">循环播放</h2>
        <div className="d-demo-block">
          <Carousel indicatorColor='#FFF' autoplay loop >
            { slideDOM }
          </Carousel>
        </div>

      </section>
    </div>
  );
};

export default Demo;