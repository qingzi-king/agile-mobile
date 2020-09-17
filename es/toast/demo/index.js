import React from 'react';
import { Toast, Button, Icon } from '../../index';
import "../style/index.css";

var Demo = function Demo() {
  var handleToast = function handleToast(type, content, duration, position) {
    switch (type) {
      case 'success':
        Toast.success({
          content: content,
          duration: duration,
          onClose: cb
        });
        break;

      case 'fail':
        Toast.fail({
          content: content,
          duration: duration,
          onClose: cb
        });
        break;

      case 'offline':
        Toast.offline({
          content: content,
          duration: duration,
          onClose: cb
        });
        break;

      case 'customIcon':
        Toast.offline({
          content: content,
          duration: duration,
          onClose: cb,
          icon: /*#__PURE__*/React.createElement(Icon, {
            type: "star",
            size: "lg"
          })
        });
        break;

      case 'loading':
        Toast.loading({
          content: content,
          duration: duration,
          onClose: cb
        });
        break;

      default:
        Toast.info({
          content: content,
          duration: duration,
          position: position,
          onClose: cb
        }); // setTimeout(() => {
        //   Toast.info('二次加载...', 1000, position, cb);
        // }, 500)

        break;
    }
  };

  var cb = function cb() {
    console.log('这是回调');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "d-phone-simulator__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-demo-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-demo-nav__title"
  }, "Toast")), /*#__PURE__*/React.createElement("section", {
    className: "d-demo-content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u57FA\u7840\u7C7B\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('', '这是纯文本提示！', 500);
    }
  }, "\u4EC5\u6587\u672C"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('loading', '数据加载中', 500);
    }
  }, "\u52A0\u8F7D"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('success', '处理成功', 500);
    }
  }, "\u6210\u529F"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('fail', '处理失败', 500);
    }
  }, "\u5931\u8D25"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('offline', '网络异常', 500);
    }
  }, "\u7F51\u7EDC\u5F02\u5E38")), /*#__PURE__*/React.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u81EA\u5B9A\u4E49\u56FE\u6807"), /*#__PURE__*/React.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('customIcon', '自定义图标', 500);
    }
  }, "\u81EA\u5B9A\u4E49\u56FE\u6807")), /*#__PURE__*/React.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u81EA\u5B9A\u4E49\u4F4D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('', '这是顶部展示！', 500, 'top');
    }
  }, "\u9876\u90E8"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleToast('', '这是底部展示！', 500, 'bottom');
    }
  }, "\u5E95\u90E8"))));
};

export default Demo;