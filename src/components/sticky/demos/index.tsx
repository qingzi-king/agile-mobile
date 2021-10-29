import React, { useState, useRef } from 'react'
import { Button, Sticky } from 'agile-mobile'

const DemoUnit = () => {

  const currentRef = useRef(null);

  const handleOnScroll = (e: any) => {
    console.log(e);
  }

  return (
    <section className="d-demo-content" style={{padding: '20px 0'}}>
      <h2 className="d-demo-block__subtitle">基本</h2>
      <Sticky onScroll={handleOnScroll}>
        <div style={{width:'100%',padding:'0 15px'}}>
          <Button color="primary" size="small">基础使用</Button>
        </div>
      </Sticky>
      <h2 className="d-demo-block__subtitle">吸顶距离<small>（30px）</small></h2>
      <Sticky offsetTop={30}>
        <div style={{width:'100%',textAlign:'center',padding:'0 15px'}}>
          <Button color="primary" size="small">吸顶距离</Button>
        </div>
      </Sticky>
      <h2 className="d-demo-block__subtitle">指定容器</h2>
      <div style={{height:150,background:'#FFF'}} ref={currentRef}>
        <Sticky container={currentRef}>
          <div style={{width:'100%',textAlign:'right',padding:'0 15px'}}>
            <Button color="primary" size="small">指定容器</Button>
          </div>
        </Sticky>
      </div>
      <div style={{height:800,width:'100%'}}></div>
    </section>
  );
};

export default DemoUnit;