import React from 'react';
import { Sticky, Button } from '../../index';
import '../style/index.less';

class Demo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let thisRef = React.createRef();
    this.state = {
      thisRef
    }
  }

  handleOnScroll = (e: any) => {
    console.log(e);
  }

  render() {

    return (
      <div className="d-phone-simulator__content">
        <div className="d-demo-nav">
          {/* <div className="d-demo-nav__back">返回</div> */}
          <div className="d-demo-nav__title">Sticky</div>
        </div>
        <section className="d-demo-content">
          <h2 className="d-demo-block__subtitle">基本</h2>
          <Sticky onScroll={this.handleOnScroll}>
            <div style={{width:'100%',padding:'0 15px'}}>
              <Button type="primary" size="small">基础使用</Button>
            </div>
          </Sticky>
          <h2 className="d-demo-block__subtitle">吸顶距离<small>（30px）</small></h2>
          <Sticky offsetTop={30}>
            <div style={{width:'100%',textAlign:'center',padding:'0 15px'}}>
              <Button type="primary" size="small">吸顶距离</Button>
            </div>
          </Sticky>
          <h2 className="d-demo-block__subtitle">指定容器</h2>
          <div style={{height:100,background:'#FFF'}} ref={this.state.thisRef}>
            <Sticky container={this.state.thisRef}>
              <div style={{width:'100%',textAlign:'right',padding:'0 15px'}}>
                <Button type="primary" size="small">指定容器</Button>
              </div>
            </Sticky>
          </div>
          <div style={{height:2000,width:'100%'}}></div>
        </section>
      </div>
    );
  }
};

export default Demo;