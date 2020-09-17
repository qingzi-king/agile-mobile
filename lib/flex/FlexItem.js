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

var FlexItem =
/** @class */
function (_super) {
  __extends(FlexItem, _super);

  function FlexItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FlexItem.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        className = _a.className,
        prefixCls = _a.prefixCls,
        style = _a.style,
        restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);

    var wrapCls = (0, _classnames.default)(prefixCls + "-item", className);
    return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
      className: wrapCls,
      style: style
    }, restProps), children);
  };

  FlexItem.defaultProps = {
    prefixCls: 'fam-flexbox'
  };
  return FlexItem;
}(React.Component);

var _default = FlexItem;
exports.default = _default;