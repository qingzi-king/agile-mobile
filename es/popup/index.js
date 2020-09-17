import _extends from "/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import classnames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from '../index';
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(' '));
  }

  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }

    return /*#__PURE__*/React.createElement("span", null, child);
  }

  return child;
}

var divs = [],
    maskDivs = []; // 存在多个popup（实际不建议多个popup叠加）

var Popup = function Popup(props) {
  var _a;

  var _b = props.prefixCls,
      prefixCls = _b === void 0 ? 'fam-popup' : _b,
      className = props.className,
      _c = props.position,
      position = _c === void 0 ? 'bottom' : _c,
      _d = props.visible,
      visible = _d === void 0 ? false : _d,
      _e = props.overlay,
      overlay = _e === void 0 ? false : _e,
      _f = props.closable,
      closable = _f === void 0 ? false : _f,
      children = props.children,
      onClose = props.onClose,
      restProps = __rest(props, ["prefixCls", "className", "position", "visible", "overlay", "closable", "children", "onClose"]);

  var closed = false;
  var div = divs[divs.length > 0 ? divs.length - 1 : 0],
      maskDiv = maskDivs[maskDivs.length > 0 ? maskDivs.length - 1 : 0];

  if (!visible) {
    // console.log('Must specify either an alert title, or message, or both');
    if (!closed && div) {
      close();
    }

    return {
      close: function close() {}
    };
  }

  div = document.createElement('div');
  maskDiv = document.createElement('div');
  var timestamp = new Date().getTime();
  div.id = prefixCls + "-main-" + timestamp;
  document.body.className = "fam-overfow-hidden"; // 针对弹出层滚动击穿，body隐藏处理
  // 蒙层是否显示

  maskDiv.className = overlay ? prefixCls + "-mask" : prefixCls + "-mask-overlay";

  maskDiv.onclick = function () {
    close();
  };

  document.body.appendChild(div); // 关闭popup

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
  } // 样式类合并


  var wrapCls = classnames(prefixCls, className, (_a = {}, _a[prefixCls + "-top"] = position === 'top', _a[prefixCls + "-right"] = position === 'right', _a[prefixCls + "-bottom"] = position === 'bottom', _a[prefixCls + "-left"] = position === 'left', _a));
  var kids = React.Children.map(children, insertSpace);
  divs.push(div);
  maskDivs.push(maskDiv);
  ReactDOM.render( /*#__PURE__*/React.createElement("div", _extends({
    className: wrapCls
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "fam-popup-warp"
  }, closable && /*#__PURE__*/React.createElement(Icon, {
    type: "cross",
    className: "fam-popup-close-icon",
    onClick: close
  }), kids)), div);
  div.appendChild(maskDiv);
  return {
    close: close
  };
};

export default Popup;