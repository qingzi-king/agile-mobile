"use strict";

var _interopRequireDefault = require("/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

require("../style/index.css");

var count = 0;

var Demo = function Demo() {
  var handleVisiblePopup = function handleVisiblePopup(visible, closable, position) {
    if (visible === void 0) {
      visible = true;
    }

    if (closable === void 0) {
      closable = false;
    }

    if (position === void 0) {
      position = 'bottom';
    }

    if (visible) {
      count++;
    } else {
      count--;
    }

    (0, _index.Popup)({
      visible: visible,
      position: position,
      closable: closable,
      overlay: true,
      onClose: handleOncallback,
      children: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
        style: {
          paddingTop: 15,
          textAlign: 'center'
        }
      }, "\u4F60\u597D\uFF0CAgile"), /*#__PURE__*/_react.default.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }, "\u8FD9\u662F\u7B2C\u4E2A", count, "\u5F39\u51FA\u5C42"), /*#__PURE__*/_react.default.createElement("div", {
        className: "d-demo-block"
      }, /*#__PURE__*/_react.default.createElement(_index.Button, {
        block: true,
        onClick: function onClick() {
          return handleVisiblePopup(true, false, 'top');
        }
      }, "\u518D\u5F39\u4E00\u4E2A\u9876\u90E8popup")), /*#__PURE__*/_react.default.createElement("div", {
        className: "d-demo-block"
      }, /*#__PURE__*/_react.default.createElement(_index.Button, {
        type: "warning",
        block: true,
        onClick: function onClick() {
          return handleVisiblePopup(false);
        }
      }, "\u5173\u95ED")))
    });
  };

  var handleOncallback = function handleOncallback(e) {
    console.log('关闭了popup：', e);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-phone-simulator__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-demo-nav"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-demo-nav__title"
  }, "Popup")), /*#__PURE__*/_react.default.createElement("section", {
    className: "d-demo-content"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u5F39\u51FA\u65B9\u4F4D"), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/_react.default.createElement(_index.Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleVisiblePopup(true, false, 'top');
    }
  }, "\u9876\u90E8\u5F39\u51FA"), /*#__PURE__*/_react.default.createElement(_index.Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleVisiblePopup(true, true, 'bottom');
    }
  }, "\u5E95\u90E8\u5F39\u51FA"), /*#__PURE__*/_react.default.createElement(_index.Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleVisiblePopup(true, false, 'left');
    }
  }, "\u5DE6\u8FB9\u5F39\u51FA"), /*#__PURE__*/_react.default.createElement(_index.Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: function onClick() {
      return handleVisiblePopup(true, false, 'right');
    }
  }, "\u53F3\u8FB9\u5F39\u51FA"))));
};

var _default = Demo;
exports.default = _default;