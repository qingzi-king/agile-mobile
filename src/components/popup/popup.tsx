import React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import Icon from '../icon';

export interface StyleType {
  minHeight?: React.CSSProperties;
}

export interface PopupProps {
  prefixCls?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  maskClosable?: boolean;
  closable?: boolean;
  overlay?: boolean;
  transparent?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  radius?: any;
  onClose?: (e?: any) => void;
}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
  return typeof str === 'string';
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(
      child,
      {},
      child.props.children.split('').join(' '),
    );
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }
    return <span>{child}</span>;
  }
  return child;
}

const divs:any = [], maskDivs:any = []; // 存在多个popup（实际不建议多个popup叠加）

const Popup = (props: PopupProps) => {

  const {
    prefixCls = 'fam-popup',
    className,
    position = 'bottom',
    visible = true,
    overlay = true,
    transparent = false,
    closable = false,
    radius = false,
    maskClosable = true,
    children,
    onClose,
    ...restProps
  } = props;

  let closed = false;
  let div: any = divs[divs.length > 0 ? (divs.length - 1) : 0], maskDiv: any = maskDivs[maskDivs.length > 0 ? (maskDivs.length - 1) : 0];

  if (!visible) {
    // console.log('Must specify either an alert title, or message, or both');

    if (!closed && div) {
      close();
    }

    return {
      close: () => {}
    }
  }

  div = document.createElement('div');
  maskDiv = document.createElement('div');

  const timestamp = new Date().getTime();
  const nodeID = `${prefixCls}-main-${timestamp}`;

  div.id = nodeID;

  // 蒙层是否显示
  if (overlay) {

    document.body.className = "fam-overfow-hidden"; // 针对弹出层滚动击穿，body隐藏处理

    // 蒙层是否透明
    maskDiv.className = transparent ? `${prefixCls}-mask-transparent` : `${prefixCls}-mask`;
    maskDiv.onclick = () => {
      // 蒙层允许关闭
      if (maskClosable) {
        close();
      }
    }

  }

  document.body.appendChild(div);

  // 关闭popup
  function close() {

    closed = true;

    handleReander(position); // 重新渲染

    maskDiv.className += ` ${prefixCls}-mask-leave`;

    // 延时销毁
    setTimeout(() => {

      ReactDOM.unmountComponentAtNode(div);
      ReactDOM.unmountComponentAtNode(maskDiv);

      if (div && div.parentNode) {
        div.parentNode.removeChild(div);
      }

      if (maskDiv && maskDiv.parentNode) {
        maskDiv.parentNode.removeChild(maskDiv);
      }

      document.body.className = ""; // 取消body溢出隐藏

      if (onClose) {
        onClose(div); // 关闭popup回调
      }

      divs.pop();
      maskDivs.pop();

    }, 150)

  }

  divs.push(div);
  maskDivs.push(maskDiv);

  function handleReander(position: any) {

    // 子节点
    const kids = React.Children.map(children, insertSpace);

    // 样式类合并
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-${position}`]: position,
      [`${prefixCls}-${position}-leave`]: position && closed
    });

    // 圆角
    let borderRadius = '';

    if (radius) {

      let initRadius = (radius instanceof Number) ? radius : 15;

      switch (position) {
        case 'top':
          borderRadius = `0 0 ${initRadius}px ${initRadius}px`;
          break;
        case 'bottom':
          borderRadius = `${initRadius}px ${initRadius}px 0 0`;
          break;
        case 'right':
          borderRadius = `${initRadius}px 0 0 ${initRadius}px`;
          break;
        case 'left':
          borderRadius = `0 ${initRadius}px ${initRadius}px 0`;
          break;
        default:
          borderRadius = `${initRadius}px ${initRadius}px 0 0`;
          break;
      }

    }

    ReactDOM.render(
      <div
        className={wrapCls}
        {...restProps}
        style={{borderRadius}}
      >
        <div className="fam-popup-warp">
          {
            closable && <Icon.CloseOutline className="fam-popup-close-icon" onClick={close} />
          }
          {kids}
        </div>
      </div>,
      div,
    );
  }

  handleReander(position);

  div.appendChild(maskDiv);

  return {
    close
  }
}

export default Popup;