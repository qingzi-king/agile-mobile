import React from 'react';
import { SearchBar } from '../../index';
import '../style/index.less';

const Demo = () => {

    // 值变更事件
    const handleChange = (e?: any) => {
      console.log('change：', e ? e.target.value : '');
    }

    // 聚焦事件
    const handleFocus = (e?: any) => {
      console.log('focus：', e ? e.target.value : '');
    }

    // 失焦事件
    const handleBlur = (e?: any) => {
      console.log('blur：', e ? e.target.value : '');
    }

    // 取消
    const handleCancel = () => {
      console.log('取消');
    }

  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">SearchBar</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基本</h2>
        <SearchBar
          defaultValue="重庆"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCancel={handleCancel}
        />
        <h2 className="d-demo-block__title">限制最大字符<small>（6个字符）</small></h2>
        <SearchBar
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCancel={handleCancel}
          maxLength={6}
        />
        <h2 className="d-demo-block__title">取消按钮无隐藏</h2>
        <SearchBar
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCancel={handleCancel}
          showCancelButton
        />
        <h2 className="d-demo-block__title">禁用</h2>
        <SearchBar
          defaultValue="重庆"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCancel={handleCancel}
          disabled
        />
        <h2 className="d-demo-block__title">自定义样式</h2>
        <SearchBar
          style={{background:'#e05353'}}
          cancelColor="#FFF"
        />
      </section>
    </div>
  );
};

export default Demo;