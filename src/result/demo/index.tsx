import React from 'react';
import { Result, Icon, Button } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Result</div>
      </div>
      <section className="d-demo-content">

        <h2 className="d-demo-block__title">空白占位</h2>

        <div className="d-demo-block">
          <Result
            title="错误状态"
            message="这是内容"
            empty
            imgType="empty_svg_error"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="搜索状态"
            message="这是内容"
            empty
            imgType="empty_svg_search"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="无信号状态"
            message="这是内容"
            empty
            imgType="empty_svg_signal"
          />
        </div>
        <h2 className="d-demo-block__subtitle">无内容</h2>
        <div className="d-demo-block">
          <Result
            title="无内容状态"
            message="这是内容"
            empty
            imgType="empty_svg_text"
          />
        </div>

        <h2 className="d-demo-block__title">结果反馈</h2>
        <div className="d-demo-block">
          <Result
            title="成功反馈状态"
            message="这是内容"
            imgType="result_svg_success"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="错误反馈"
            message="这是内容"
            imgType="result_svg_error"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="疑问反馈状态"
            message="这是内容"
            imgType="result_svg_question"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="警告状态"
            message="这是内容"
            imgType="result_svg_warn"
          />
        </div>
        <div className="d-demo-block">
          <Result
            title="禁止反馈状态"
            message="这是内容"
            imgType="result_svg_ban"
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
            img={<Icon type="check" size={40} color="#3AD19A" />}
            title="这是标题"
            message="可以自定义扩展元素（刷新、触发其他逻辑事件）"
            expandNode={<Button type="default" dashed size="small" style={{marginTop:5}} icon="refresh-o">立即刷新</Button>}
          />
        </div>

      </section>
    </div>
  );
};

export default Demo;