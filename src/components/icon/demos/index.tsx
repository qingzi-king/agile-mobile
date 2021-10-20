import React, { Component } from 'react'
import { Icon } from 'agile-mobile'
import styles from './index.less'

const icons = [
  'abnormal',
  'add',
  'arrow_down',
  'arrow_left',
  'arrow_right',
  'arrow_up',
  'check',
  'check_filled',
  'circle',
  'close',
  'close_filled',
  'department',
  'ellipsis',
  'forbidden',
  'forbidden_filled',
  'home',
  'info',
  'info_filled',
  'like',
  'like_filled',
  'loading',
  'notice',
  'offline',
  'page_turning_left',
  'person',
  'reduce',
  'refresh',
  'search',
  'setting',
  'show_less',
  'show_more',
  'star',
  'star_filled',
  'success',
  'time'
]

const DemoUnit = () => {
  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础图标</h2>
      <div className={styles.container}>
        {
          icons.map((ico, i) => {
            return (
              <div key={i} className={styles.item}>
                <Icon type={ico} />
                <span className={styles.span}>{ico}</span>
              </div>
            )
          })
        }
      </div>

      <h2 className="d-demo-block__title">尺寸、颜色</h2>

        <div className={styles.container}>
        {
          ['lg', 'md', 'sm', 'xs', 'xxs'].map((size, i) => {
            return (
              <div key={i} className={styles.item}>
                <Icon type="info" size={size} color="#268AF0" />
                <span className={styles.span}>{size}</span>
              </div>
            )
          })
        }
        </div>

    </section>
  );
};

export default DemoUnit;