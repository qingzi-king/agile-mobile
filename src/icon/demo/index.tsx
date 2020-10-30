import React from 'react';
import { Icon } from '../../index';
import '../style/index.less';

const icons = [
  'search-o',
  'refresh-o',
  'time-o',
  'loading',
  'success',
  'cross',
  'plus',
  'reduce',
  'check-o',
  'close',
  'close-o',
  'check',
  'forbidden-o',
  'forbidden',
  'info-o',
  'info',
  'like-o',
  'like',
  'star-o',
  'star',
  'arrow-up',
  'arrow-left',
  'arrow-down',
  'arrow-right',
  'turning-left',
  'turning-right',
  'turning-up',
  'turning-down',
  'home',
  'setting',
  'persons',
  'department',
  'offline',
  'abnormal',
  'ellipsis',
  'notice',
  'circle',
]

const LogContent = () => {
  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Icon</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础图标</h2>
        <div className="d-demo-block d-demo-grid">
          {
            icons.map((ico, i) => {
              return (
                <div key={i} className="d-demo-grid__item">
                  <Icon type={ico} />
                  <span>{ico}</span>
                </div>
              )
            })
          }
        </div>

        <h2 className="d-demo-block__title">尺寸、颜色</h2>
        <div className="d-demo-block">
          <div className="d-demo-grid">
          {
            ['lg', 'md', 'sm', 'xs', 'xxs'].map((size, i) => {
              return (
                <div key={i} className="d-demo-grid__item">
                  <Icon type="info" size={size} color="#268AF0" />
                  <span>{size}</span>
                </div>
              )
            })
          }
          </div>
        </div>

      </section>
    </div>
  );
};

export default LogContent;