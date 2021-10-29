import React, { useState, useEffect } from 'react'
import { Toast, Button, Icon, ElasticBox } from 'agile-mobile'

const DemoUnit = () => {

  const handleToast = (type: string, content: any, duration?: number, position?: string) => {

    switch (type) {
      case 'success':
        Toast.success({ content, duration, onClose: cb });
        break;
      case 'fail':
        Toast.fail({ content, duration, onClose: cb });
        break;
      case 'offline':
        Toast.offline({ content, duration, onClose: cb });
        break;
      case 'customIcon':
        Toast.offline({ content, duration, onClose: cb, icon: <Icon.InfoCircleOutline /> });
        break;
      case 'loading':
        Toast.loading({ content, duration, onClose: cb });
        break;
      case 'countBackwards':
        Toast.info({ content: <CountDownText text={content} second={3} />, duration, position, mask: true, onClose: cb });
        break;
      default:
        Toast.info({ content, duration, position, onClose: cb });
        break;
    }

  }

  const cb = () => {
    console.log('这是回调')
  }

  return (
    <section className="d-demo-content">
      <h2 className="d-demo-block__title">基础类型</h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={() => handleToast('', '这是纯文本提示！这是纯文本提示！', 1000)}>仅文本</Button>
        <Button block onClick={() => handleToast('loading', '数据加载中', 1000)}>加载</Button>
        <Button block onClick={() => handleToast('success', '处理成功', 1000)}>成功</Button>
        <Button block onClick={() => handleToast('fail', '处理失败', 1000)}>失败</Button>
        <Button block onClick={() => handleToast('offline', '网络异常', 1000)}>网络异常</Button>
      </ElasticBox>

      <h2 className="d-demo-block__title">自定义图标</h2>
      <Button block onClick={() => handleToast('customIcon', '自定义图标', 1000)}>自定义图标</Button>

      <h2 className="d-demo-block__title">自定义位置</h2>
      <ElasticBox wrap direction="vertical">
        <Button block onClick={() => handleToast('', '这是顶部展示！', 1000, 'top')}>顶部</Button>
        <Button block onClick={() => handleToast('', '这是底部展示！', 1000, 'bottom')}>底部</Button>
        <Button block onClick={() => handleToast('countBackwards', '即将开奖', 3000)}>3秒倒数</Button>
      </ElasticBox>

    </section>
  );
};

export default DemoUnit;

// 倒计时文本
interface CountDownProps {
  text: string;
  second: number
};

const CountDownText: React.FC<CountDownProps> = (props) => {
  const { text, second } = props
  const [count, setCount] = useState(second)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((x: number) => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])
  return <span>{text} {count} 秒</span>
}