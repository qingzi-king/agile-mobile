import React from 'react';
import { Icon } from '../../index';
import '../style/index.less';

const LogContent = () => {
  return (
    <div className="d-phone-simulator__content">
      <div className="d-demo-nav">
        {/* <div className="d-demo-nav__back">返回</div> */}
        <div className="d-demo-nav__title">Icon</div>
      </div>
      <section className="d-demo-content">
        <h2 className="d-demo-block__title">基础图标</h2>
        <div className="d-demo-block">
          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="time-o" />
              <span>time-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="search-o" />
              <span>search-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="refresh-o" />
              <span>refresh-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="loading" />
              <span>loading</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="close-o" />
              <span>close-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="close" />
              <span>close</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="check-o" />
              <span>check-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="check" />
              <span>check</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="forbidden-o" />
              <span>forbidden-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="forbidden" />
              <span>forbidden</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info-o" />
              <span>info-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info" />
              <span>info</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="like-o" />
              <span>like-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="like" />
              <span>like</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="star-o" />
              <span>star-o</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="star" />
              <span>star</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="arrow-up" />
              <span>arrow-up</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="arrow-left" />
              <span>arrow-left</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="arrow-down" />
              <span>arrow-down</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="arrow-right" />
              <span>arrow-right</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="turning-left" />
              <span>turning-left</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="turning-right" />
              <span>turning-right</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="turning-up" />
              <span>turning-up</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="turning-down" />
              <span>turning-down</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="success" />
              <span>success</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="plus" />
              <span>plus</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="cross" />
              <span>cross</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="offline" />
              <span>offline</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="abnormal" />
              <span>abnormal</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="ellipsis" />
              <span>ellipsis</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="notice" />
              <span>notice</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="setting" />
              <span>setting</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="persons" />
              <span>persons</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="department" />
              <span>department</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="home" />
              <span>home</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="circle" />
              <span>circle</span>
            </div>
          </div>

          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="reduce" />
              <span>reduce</span>
            </div>
          </div>

        </div>
        
        <h2 className="d-demo-block__title">尺寸、颜色</h2>
        <div className="d-demo-block">
          <div className="d-demo-grid">
            <div className="d-demo-grid__item">
              <Icon type="info" size="lg" color="#6abf47" />
              <span>lg</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info" size="md" />
              <span>md</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info" size="sm" />
              <span>sm</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info" size="xs" />
              <span>xs</span>
            </div>
            <div className="d-demo-grid__item">
              <Icon type="info" size="xxs" />
              <span>xxs</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default LogContent;