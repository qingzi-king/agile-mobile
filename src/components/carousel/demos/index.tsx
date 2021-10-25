import React, { useState } from 'react'
import { Carousel, ElasticBox, Button } from 'agile-mobile'

const handleSlides = () => {
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
  return slides.map((slide, index) => {
    return <div key={index} style={{height:150,textAlign:'center',color:'#fff',lineHeight:'150px',fontSize:14,background:slide.bgColor}}>{slide.name}</div>;
  })
}

const DemoUnit = () => {

  const slideDOM = handleSlides();

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleAfterChange = (params: any) => {
    const { selectedIndex } = params;
    setScrollIndex(selectedIndex);
  }
  
  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基本</h2>
      <Carousel
        indicatorColor='#FFF'
        loop
        activeIndex={scrollIndex}
        afterChange={handleAfterChange}
      >
        { slideDOM }
      </Carousel>

      <Button onClick={() => setScrollIndex(scrollIndex + 1)} block style={{marginTop:15}}>下一页</Button>

      <h2 className="d-demo-block__title">垂直</h2>
      {/* 垂直必须设置明确的height */}
      <Carousel
        indicatorColor='#FFF'
        axis="y"
        loop
        style={{height:150}}
        activeIndex={1}
      >
        { slideDOM }
      </Carousel>

      <h2 className="d-demo-block__title">循环播放</h2>
      <Carousel
        indicatorColor='#FFF'
        autoplay
        loop
      >
        { slideDOM }
      </Carousel>

    </section>
  );
};

export default DemoUnit;