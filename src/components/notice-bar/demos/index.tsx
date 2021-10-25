import React, { Component } from 'react'
import { ElasticBox, NoticeBar, Icon } from 'agile-mobile'

const DemoUnit = () => {
  return (
    <section className="d-demo-content" style={{padding: 0}}>
      <h2 className="d-demo-block__title">基本</h2>
      <NoticeBar mode="closable" icon={<Icon.NoticeOutline />}>
        古人云: 绊脚石乃是进身之阶。
      </NoticeBar>
      <h2 className="d-demo-block__subtitle">滚动速度：快</h2>
      <NoticeBar animateLoop animateSpeed="fast" icon={<Icon.NoticeOutline />}>
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

      <h2 className="d-demo-block__title">多行</h2>
      <div>
        <NoticeBar mode="closable" multiLine>
          罗曼.罗兰曾说: 人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。
        </NoticeBar>
      </div>
      <h2 className="d-demo-block__title">链接</h2>
      <NoticeBar mode="link">
        古人云: 绊脚石乃是进身之阶。
      </NoticeBar>
      <NoticeBar mode="closable" action={<small>去看看</small>} style={{marginTop:15}}>
        古人云: 绊脚石乃是进身之阶。
      </NoticeBar>
    </section>
  );
};

export default DemoUnit;