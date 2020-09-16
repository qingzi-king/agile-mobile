import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Button } from '../index';

export interface ModalPropsType {
  type?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

export interface Action<T> {
  text: string;
  onPress?: (...args: any[]) => void | Promise<any>;
  loading: Boolean;
  style?: T | string;
}

export default function alert(props: any) {

  const {
    title,
    message,
    transparent = true,
    maskClosable = true,
    className,
    direction = 'horizontal', // horizontal vertical
    actions = [{ text: '确定' }],
  } = props;

  if (!message) {
    return {
      close: () => {},
    };
  }

  const prefixCls = 'fam-modal';

  let closed = false;

  const div = document.createElement('div');
  const maskDiv = document.createElement('div');
  const timestamp = new Date().getTime();

  div.id = `${prefixCls}-${timestamp}`;
  document.body.appendChild(div);

  document.body.className = "fam-overfow-hidden"; // 针对弹出层滚动击穿，body隐藏处理

  // 蒙层是否显示
  maskDiv.className = transparent ? `fam-modal-mask` : `fam-modal-mask-transparent`;
  document.body.appendChild(maskDiv);

  // 蒙层允许关闭
  if (maskClosable) {
    maskDiv.onclick = () => {
      close();
    }
  }

  // 关闭popup
  function close() {

    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.unmountComponentAtNode(maskDiv);

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    if (maskDiv && maskDiv.parentNode) {
      maskDiv.parentNode.removeChild(maskDiv);
    }

    document.body.className = ""; // 取消body溢出隐藏

  }

  let mainWarpClassName = prefixCls;

  if (!transparent) {
    mainWarpClassName += ' fam-modal-boxshadow';
  }

  // 样式类合并
  const wrapCls = classnames(mainWarpClassName, className, {});

  const footer = actions.map((button: Action<React.CSSProperties>) => {

    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      if (closed) {
        return;
      }

      const res = orginPress();

      if (res && res.then) {
        // setLoading(true);
        res
          .then(() => {
            closed = true;
            // setLoading(false);
            close();
          })
          .catch(() => {});
      } else {
        close();
      }
    };

    return button;

  });

  ReactDOM.render(
    <div
      className={wrapCls}
    >
      {
        title && <div className="fam-modal-header">{ title }</div>
      }
      <div className="fam-modal-content">{ message }</div>
      <div className={ direction === 'vertical' ? 'fam-modal-footer-vertical' : 'fam-modal-footer-horizontal' }>
        {
          footer.map((action: any, key: number) => {
            return <FooterButton key={key} {...action} />
          })
        }
      </div>
    </div>,
    div,
  );

  return {
    close
  }

}

// 按钮控制
const FooterButton = (props: any) => {

  const [loading, setLoading] = useState(false);

  const handleButton = () => {
    setLoading(true);
    props.onPress();
  }

 return (
    <Button
      block
      size="large"
      className="fam-modal-footer-button"
      style={{ color: props.color || '#000' }}
      loading={loading}
      disabled={props.disabled}
      onClick={handleButton}
    >
      { props.text }
    </Button>
  );
};
