import React from 'react';
import { NoticeBar, Icon } from '../../index';
import '../style/index.less';

const Demo = () => {

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">NoticeBar</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <div>
          <NoticeBar mode="closable" icon={<Icon type="notice" size="xs" />}>
            古人云: 绊脚石乃是进身之阶。
          </NoticeBar>
          <h2 className="d-demo-block__subtitle">滚动速度：快</h2>
          <NoticeBar animateLoop animateSpeed="fast" icon={<Icon type="notice" size="xs" />}>
            罗曼.罗兰曾说: 人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。
          </NoticeBar>
          <h2 className="d-demo-block__subtitle">滚动速度：正常</h2>
          <NoticeBar animateLoop>
            罗曼.罗兰曾说: 人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。
          </NoticeBar>
          <h2 className="d-demo-block__subtitle">滚动速度：慢</h2>
          <NoticeBar animateLoop animateSpeed="slow">
            罗曼.罗兰曾说: 人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。
          </NoticeBar>
        </div>
        <h2 className="d-demo-block__title">多行</h2>
        <div>
          <NoticeBar mode="closable" multiLine>
            罗曼.罗兰曾说: 人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。
          </NoticeBar>
        </div>
        <h2 className="d-demo-block__title">链接</h2>
        <div>
          <NoticeBar mode="link" action={<Icon type="close-o" size="sm" />}>
            古人云: 绊脚石乃是进身之阶。
          </NoticeBar>
        </div>
      </section>
    </div>
  );
};

export default Demo;