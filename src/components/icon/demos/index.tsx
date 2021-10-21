import React, { ComponentType } from 'react'
import { Icon as Icons, ElasticBox } from 'agile-mobile'
import styles from './index.less'
const items: {
  name: string
  component: ComponentType
}[] = []

for (let key in Icons) {
  const component = (Icons as any)[key] as ComponentType
  if (typeof component !== 'function') {
    continue
  }
  items.push({
    name: key,
    component,
  })
}

const DemoUnit = () => {

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础图标</h2>
      <div className={styles.container}>
        {
          items.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <item.component />
                <span className={styles.span}>{item.name}</span>
              </div>
            )
          })
        }
      </div>

      <h2 className="d-demo-block__title">尺寸、颜色</h2>
      <ElasticBox wrap>
        <Icons.InfoFill style={{ fontSize: 50, color: '#FF3141' }} />
        <Icons.InfoFill style={{ fontSize: 40, color: '#268AF0' }} />
        <Icons.InfoFill style={{ fontSize: 30, color: '#F59A23' }} />
        <Icons.InfoFill style={{ fontSize: 20, color: '#CCC' }} />
      </ElasticBox>

    </section>
  );
};

export default DemoUnit;