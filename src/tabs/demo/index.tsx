import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs, Badge } from '../../index';
import '../style/index.less';

const Demo = () => {

  const tabs1 = [
    { title: <Badge text={3}>标签1</Badge> },
    { title: <Badge text={220}>标签2</Badge> },
    { title: <Badge dot>标签3</Badge> },
  ];

  const tabs2 = [
    { title: '标签1' },
    { title: '标签2' },
    { title: '标签3' },
  ];

  const tabs3 = [
    { title: '标签1' },
    { title: '标签2' },
    { title: '标签3' },
    { title: '标签4' },
    { title: '标签5' },
    { title: '标签6' },
    { title: '标签7' },
    { title: '标签8' },
    { title: '标签9' },
  ];

  const renderTabBar = (props: object) => {
    return (
      <Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
      </Sticky>
    );
  }

  const itemStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '160px', backgroundColor: '#fff' };

  const renderContent = (tab: any) => (<div style={itemStyle}>{tab.title}的内容...</div>);

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Tabs</div>
      </div>
      <section className="d-demo-content">

        <h2 className="d-demo-block__title">顶部标签</h2>
        <Tabs tabs={tabs1}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', tab, index); }}
          onTabClick={(tab) => { console.log('onTabClick', tab); }}
        >
          <div style={itemStyle}>标签1的内容...</div>
          <div style={itemStyle}>标签2的内容...</div>
          <div style={itemStyle}>标签3的内容...</div>
        </Tabs>

        <h2 className="d-demo-block__title">底部标签</h2>
        <Tabs tabs={tabs2}
          initialPage={1}
          tabBarPosition="bottom"
          renderTab={tab => <span>{tab.title}</span>}
        >
          <div style={itemStyle}>标签1的内容...</div>
          <div style={itemStyle}>标签2的内容...</div>
          <div style={itemStyle}>标签3的内容...</div>
        </Tabs>

        <h2 className="d-demo-block__title">粘性布局<small>（基于react-sticky）</small></h2>
        <StickyContainer>
          <Tabs tabs={tabs2}
            initialPage={0}
            renderTabBar={renderTabBar}
          >
            <div style={itemStyle}>标签1的内容...</div>
            <div style={itemStyle}>标签2的内容...</div>
            <div style={itemStyle}>标签3的内容...</div>
          </Tabs>
        </StickyContainer>

        <h2 className="d-demo-block__title">垂直标签</h2>
        <Tabs tabs={tabs2}
          tabBarPosition="left"
          tabDirection="vertical"
        >
          <div style={itemStyle}>标签1的内容...</div>
          <div style={itemStyle}>标签2的内容...</div>
          <div style={itemStyle}>标签3的内容...</div>
        </Tabs>

        <h2 className="d-demo-block__title">切换无动画</h2>
        <Tabs tabs={tabs2} initialPage={2} animated={false} useOnPan={false}>
          <div style={itemStyle}>标签1的内容...</div>
          <div style={itemStyle}>标签2的内容...</div>
          <div style={itemStyle}>标签3的内容...</div>
        </Tabs>

        <h2 className="d-demo-block__title">自定义标签个数</h2>
        <Tabs tabs={tabs3} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          { renderContent }
        </Tabs>

        <h2 className="d-demo-block__title">分段器模式</h2>
        <div style={{padding:5}}>
          <Tabs tabs={tabs2}
            initialPage={1}
            onTabClick={(tab, index) => { console.log('onTabClick', tab, index); }}
            mode="segmentedControl"
          />
        </div>

        <h2 className="d-demo-block__title">分段器模式<small> - 自定义主题颜色</small></h2>
        <div style={{padding:5}}>
          <Tabs tabs={tabs2}
            initialPage={0}
            onTabClick={(tab, index) => { console.log('onTabClick', tab, index); }}
            tintColor="red"
            mode="segmentedControl"
          />
        </div>

      </section>
    </div>
  );
};

export default Demo;