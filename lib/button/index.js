"use strict";

var _interopRequireWildcard = require("/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _rmcFeedback = _interopRequireDefault(require("rmc-feedback"));

var _index = require("../index");

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

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

var Button =
/** @class */
function (_super) {
  __extends(Button, _super);

  function Button() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Button.prototype.render = function () {
    var _a;

    var _b = this.props,
        children = _b.children,
        className = _b.className,
        prefixCls = _b.prefixCls,
        type = _b.type,
        size = _b.size,
        inline = _b.inline,
        block = _b.block,
        hairline = _b.hairline,
        disabled = _b.disabled,
        icon = _b.icon,
        loading = _b.loading,
        activeStyle = _b.activeStyle,
        activeClassName = _b.activeClassName,
        onClick = _b.onClick,
        restProps = __rest(_b, ["children", "className", "prefixCls", "type", "size", "inline", "block", "hairline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);

    var wrapCls = (0, _classnames.default)(prefixCls, className, (_a = {}, _a[prefixCls + "-primary"] = type === 'primary', _a[prefixCls + "-warning"] = type === 'warning', _a[prefixCls + "-success"] = type === 'success', _a[prefixCls + "-danger"] = type === 'danger', _a[prefixCls + "-default"] = type === 'default', _a[prefixCls + "-link"] = type === 'link', _a[prefixCls + "-small"] = size === 'small', _a[prefixCls + "-large"] = size === 'large', _a[prefixCls + "-inline"] = inline, _a[prefixCls + "-block"] = block, _a[prefixCls + "-hairline"] = hairline, _a[prefixCls + "-disabled"] = disabled, _a[prefixCls + "-loading"] = loading, _a));
    var kids = React.Children.map(children, insertSpace); // use div, button native is buggy @yiminghe

    return /*#__PURE__*/React.createElement(_rmcFeedback.default // tslint:disable-next-line:jsx-no-multiline-js
    , {
      activeClassName: activeClassName || (activeStyle ? prefixCls + "-active" : undefined),
      disabled: disabled,
      activeStyle: activeStyle
    }, /*#__PURE__*/React.createElement("button", (0, _extends2.default)({
      className: wrapCls
    }, restProps, {
      onClick: disabled || loading ? undefined : onClick,
      "aria-disabled": disabled
    }), loading && /*#__PURE__*/React.createElement(_index.Icon, {
      type: "loading",
      size: "inherit"
    }), " ", kids));
  };

  Button.defaultProps = {
    prefixCls: 'fam-button',
    size: 'default',
    inline: false,
    block: false,
    hairline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
  };
  return Button;
}(React.Component);

var _default = Button;
exports.default = _default;