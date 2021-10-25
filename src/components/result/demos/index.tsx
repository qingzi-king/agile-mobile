import React, { Component } from 'react'
import { Button, ElasticBox, Result, Icon } from 'agile-mobile'

const DemoUnit = () => {

  const handleRefresh = () => {
    console.log('已触发更新事件！');
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">空白占位</h2>

        <div className="d-demo-block">
          <Result
            title="错误状态"
            message="这是内容"
            empty
            imgType="EmptyError"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="搜索状态"
            message="这是内容"
            empty
            imgType="EmptySearch"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="无信号状态"
            message="这是内容"
            empty
            imgType="EmptySignal"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="无内容状态"
            message="这是内容"
            empty
            imgType="EmptyText"
          />
        </div>

        <h2 className="d-demo-block__title">结果反馈</h2>
        <div className="d-demo-block">
          <Result
            title="成功状态"
            message="这是内容"
            imgType="ResultSuccess"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="错误状态"
            message="这是内容"
            imgType="ResultError"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="疑问状态"
            message="这是内容"
            imgType="ResultQuestion"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="警告状态"
            message="这是内容"
            imgType="ResultWarn"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="禁止状态"
            message="这是内容"
            imgType="ResultBan"
          />
        </div>

        <h2 className="d-demo-block__title">自定义图标</h2>
        <div className="d-demo-block">
          <Result
            imgUrl="http://docs.antjob.ink/agile-ui/agile-logo.svg"
            title="这是标题"
            message="自定义插图元素"
          />
        </div>
        <div className="d-demo-block">
          <Result
            img={<Icon.InfoCircleOutline style={{fontSize: 80, color: 'red'}} />}
            title="这是标题"
            message="可以自定义扩展元素（刷新、触发其他逻辑事件）"
            expandNode={<Button type="default" dashed size="small" style={{marginTop:5}} icon={<Icon.RefreshOutline />} onClick={handleRefresh}>立即刷新</Button>}
          />
        </div>
    </section>
  );
};

export default DemoUnit;