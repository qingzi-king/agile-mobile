import _extends from "/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends";
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Button } from '../index';
export default function alert(props) {
  var title = props.title,
      message = props.message,
      _a = props.transparent,
      transparent = _a === void 0 ? true : _a,
      _b = props.maskClosable,
      maskClosable = _b === void 0 ? true : _b,
      className = props.className,
      _c = props.direction,
      direction = _c === void 0 ? 'horizontal' : _c,
      // horizontal vertical
  _d = props.actions,
      // horizontal vertical
  actions = _d === void 0 ? [{
    text: '确定'
  }] : _d;

  if (!message) {
    return {
      close: function close() {}
    };
  }

  var prefixCls = 'fam-modal';
  var closed = false;
  var div = document.createElement('div');
  var maskDiv = document.createElement('div');
  var timestamp = new Date().getTime();
  div.id = prefixCls + "-" + timestamp;
  document.body.appendChild(div);
  document.body.className = "fam-overfow-hidden"; // 针对弹出层滚动击穿，body隐藏处理
  // 蒙层是否显示

  maskDiv.className = transparent ? "fam-modal-mask" : "fam-modal-mask-transparent";
  document.body.appendChild(maskDiv); // 蒙层允许关闭

  if (maskClosable) {
    maskDiv.onclick = function () {
      close();
    };
  } // 关闭popup


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

  var mainWarpClassName = prefixCls;

  if (!transparent) {
    mainWarpClassName += ' fam-modal-boxshadow';
  } // 样式类合并


  var wrapCls = classnames(mainWarpClassName, className, {});
  var footer = actions.map(function (button) {
    var orginPress = button.onPress || function () {};

    button.onPress = function () {
      if (closed) {
        return;
      }

      var res = orginPress();

      if (res && res.then) {
        // setLoading(true);
        res.then(function () {
          closed = true; // setLoading(false);

          close();
        }).catch(function () {});
      } else {
        close();
      }
    };

    return button;
  });
  ReactDOM.render( /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "fam-modal-header"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "fam-modal-content"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: direction === 'vertical' ? 'fam-modal-footer-vertical' : 'fam-modal-footer-horizontal'
  }, footer.map(function (action, key) {
    return /*#__PURE__*/React.createElement(FooterButton, _extends({
      key: key
    }, action));
  }))), div);
  return {
    close: close
  };
} // 按钮控制

var FooterButton = function FooterButton(props) {
  var _a = useState(false),
      loading = _a[0],
      setLoading = _a[1];

  var handleButton = function handleButton() {
    setLoading(true);
    props.onPress();
  };

  return /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "large",
    className: "fam-modal-footer-button",
    style: {
      color: props.color || '#000'
    },
    loading: loading,
    disabled: props.disabled,
    onClick: handleButton
  }, props.text);
};