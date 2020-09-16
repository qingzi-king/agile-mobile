import React from 'react';
import { Flex } from '../../index';
import '../index.less';
import './index.less';

const LogContent = () => {
  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Flex</div>
      </div>
      <section className="d-demo-content">

        <h2 className="d-demo-block__title">基础类型</h2>
        <div className="d-demo-block">
          <Flex>
            <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">1</PlaceHolderWarp></Flex.Item>
            <Flex.Item><PlaceHolderWarp>2</PlaceHolderWarp></Flex.Item>
            <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">3</PlaceHolderWarp></Flex.Item>
            <Flex.Item><PlaceHolderWarp>4</PlaceHolderWarp></Flex.Item>
            <Flex.Item><PlaceHolderWarp bgcolor="lightskyblue">5</PlaceHolderWarp></Flex.Item>
          </Flex>
        </div>

          <h2 className="d-demo-block__title">wrap</h2>
          <Flex wrap="wrap">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">nowrap</h2>
          <Flex wrap="nowrap">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap-reverse</h2>
          <Flex wrap="wrap-reverse">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap justify：start</h2>
          <Flex wrap="wrap" justify="start">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap justify：end</h2>
          <Flex wrap="wrap" justify="end">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap justify：center</h2>
          <Flex wrap="wrap" justify="center">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap justify：between</h2>
          <Flex wrap="wrap" justify="between">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap justify：around</h2>
          <Flex wrap="wrap" justify="around">
            <div className="d-inline">1</div>
            <div className="d-inline">2</div>
            <div className="d-inline">3</div>
            <div className="d-inline">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align： start</h2>
          <Flex wrap="wrap" align="start">
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align： end</h2>
          <Flex wrap="wrap" align="end">
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align： center</h2>
          <Flex wrap="wrap" align="center">
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align： stretch</h2>
          <Flex wrap="wrap" align="stretch">
            <div className="d-inline" style={{height:'auto'}}>1</div>
            <div className="d-small" style={{height:'auto'}}>2</div>
            <div className="d-inline" style={{height:'auto'}}>3</div>
            <div className="d-small" style={{height:'auto'}}>4</div>
            <div className="d-inline" style={{height:'auto'}}>5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align： baseline</h2>
          <Flex wrap="wrap" align="baseline">
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： start</h2>
          <Flex wrap="wrap" alignItem="start" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： end</h2>
          <Flex wrap="wrap" alignItem="end" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： center</h2>
          <Flex wrap="wrap" alignItem="center" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： between</h2>
          <Flex wrap="wrap" alignItem="between" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： around</h2>
          <Flex wrap="wrap" alignItem="around" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

          <h2 className="d-demo-block__title">wrap align-content： stretch</h2>
          <Flex wrap="wrap" alignItem="stretch" style={{height: 120,border: '1px solid #E5E5E5'}}>
            <div className="d-inline">1</div>
            <div className="d-small">2</div>
            <div className="d-inline">3</div>
            <div className="d-small">4</div>
            <div className="d-inline">5</div>
          </Flex>

      </section>
    </div>
  );
};

// 占位组件
const PlaceHolderWarp = (props: any) => {
  return (
    <div className="d-placeholder" style={{backgroundColor: props.bgcolor || '#ebebef'}}
    >{ props.children }</div>
  )
}

export default LogContent;