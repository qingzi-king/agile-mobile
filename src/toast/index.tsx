import classnames from 'classnames';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from '../index';

const SHORT = 2000;
let timer: any;

interface ToastProps {
  content: React.ReactNode;
  duration?: number;
  position?: any;
  onClose?: () => void;
  mask?: boolean;
  icon?: React.ReactNode;
};

interface IToastConfig {
  duration: number;
  mask: boolean;
  position: string;
}

const config: IToastConfig = {
  duration: SHORT,
  position: 'center',
  mask: true,
};

const prefixCls = 'fam-toast';
let warpDOM: any;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 处理提示
function notice(props: any) {

  const {
    type,
    content,
    duration = config.duration,
    position = config.position,
    onClose,
    mask = config.mask,
    icon
  } = props;

  handleDestroyDOM();

  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'check-o',
    fail: 'close-o',
    offline: 'offline',
    loading: 'loading',
  };
  const iconType = iconTypes[type];

  warpDOM = document.createElement('div');

  let wrapCls = classnames({
    [`${prefixCls}-mask`]: mask,
    [`${prefixCls}-top`]: position === 'top',
    [`${prefixCls}-bottom`]: position === 'bottom',
  })

  ReactDOM.render(
    !!iconType ? (
      <div className={`${prefixCls} ${wrapCls}`}>
        <div className={`${prefixCls}-text ${prefixCls}-card`}>
          <div className={`${prefixCls}-icon`}>
            {/* 允许自定义图标 */
              icon ? icon : <Icon type={iconType} size="lg" />
            }
          </div>
          <div className={`${prefixCls}-desc`}>{content}</div>
        </div>
      </div>
    ) : (
      <div className={prefixCls}>
        <div className={wrapCls}>
          <div className={`${prefixCls}-text`}>{content}</div>
        </div>
      </div>
    ),
    warpDOM
  );

  document.body.appendChild(warpDOM);

  if (duration > 0) {

    timer = setTimeout(async () => {
      warpDOM.classList.add(`${prefixCls}-remove`);
      if (onClose) onClose();
      await sleep(100);
      await handleDestroyDOM(); // ReactDOM.unmountComponentAtNode(div); // 组件可使用
    }, duration)

  }

}

// 销毁
const handleDestroyDOM = () => {
  if (timer) clearTimeout(timer);
  if (warpDOM) {
    document.body.removeChild(warpDOM);
    warpDOM = null;
  }
}

export default {
  SHORT,
  LONG: 8000,
  info(props: ToastProps) {
    return notice({ ...props, type: 'info' });
  },
  success(props: ToastProps) {
    return notice({ ...props, type: 'success' });
  },
  fail(props: ToastProps) {
    return notice({ ...props, type: 'fail' });
  },
  offline(props: ToastProps) {
    return notice({ ...props, type: 'offline' });
  },
  loading(props: ToastProps) {
    return notice({ ...props, type: 'loading' });
  },
  hide() {
    handleDestroyDOM();
  },
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, position } = conf;

    if (duration) {
      config.duration = duration;
    }

    if (position) {
      config.position = position;
    }

  },
};
