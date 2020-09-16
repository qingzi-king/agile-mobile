import classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from '../index';

export interface PopupProps {
  prefixCls?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  maskClosable?: boolean;
  closable?: boolean;
  overlay?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClose?: () => void;
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

const Popup = (props: any) => {

  const {
    prefixCls = 'fam-popup',
    className,
    position = 'bottom',
    visible = false,
    overlay = false,
    closable = false,
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

  div.id = `${prefixCls}-main-${timestamp}`;

  document.body.className = "fam-overfow-hidden"; // 针对弹出层滚动击穿，body隐藏处理

  // 蒙层是否显示
  maskDiv.className = overlay ? `${prefixCls}-mask` : `${prefixCls}-mask-overlay`;
  maskDiv.onclick = () => {
    close();
  }

  document.body.appendChild(div);

  // 关闭popup
  function close() {

    closed = true;

    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.unmountComponentAtNode(maskDiv);

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    if (maskDiv && maskDiv.parentNode) {
      maskDiv.parentNode.removeChild(maskDiv);
    }

    document.body.className = ""; // 取消body溢出隐藏

    onClose(div); // 关闭popup回调

    divs.pop();
    maskDivs.pop();

  }

  // 样式类合并
  let wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}-top`]: position === 'top',
    [`${prefixCls}-right`]: position === 'right',
    [`${prefixCls}-bottom`]: position === 'bottom',
    [`${prefixCls}-left`]: position === 'left',
  });

  const kids = React.Children.map(children, insertSpace);

  divs.push(div);
  maskDivs.push(maskDiv);

  ReactDOM.render(
    <div
      className={wrapCls}
      {...restProps}
    >
      <div className="fam-popup-warp">
        {
          closable && <Icon type="cross" className="fam-popup-close-icon" onClick={close} />
        }
        {kids}
      </div>
    </div>,
    div,
  );

  div.appendChild(maskDiv);

  return {
    close
  }
}

export default Popup;