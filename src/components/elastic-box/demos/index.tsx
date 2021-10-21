import React, { Component } from 'react'
import { Button, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础类型</h2>
      <ElasticBox wrap>
        <Button type="default">1</Button>
        <Button type="default">2</Button>
        <Button type="default">3</Button>
        <Button type="default">4</Button>
        <Button type="default">5</Button>
        <Button type="default">6</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">换行</h2>
      <ElasticBox wrap>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
        <Button>11</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">垂直方向的间距</h2>
      <ElasticBox direction='vertical'>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">自定义间距大小</h2>
      <ElasticBox styles={{ '--gap': '24px' }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">渲染为块级元素</h2>
      <ElasticBox direction='vertical' block>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">主轴对齐方式</h2>
      <ElasticBox justify='center' block>
        <Button>1</Button>
        <Button>
          2<br />2
        </Button>
        <Button>
          3<br />3<br />3
        </Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">交叉轴对齐方式</h2>
      <ElasticBox align='end'>
        <Button>1</Button>
        <Button>
          2<br />2
        </Button>
        <Button>
          3<br />3<br />3
        </Button>
      </ElasticBox>

    </section>
  );
};

export default DemoUnit;