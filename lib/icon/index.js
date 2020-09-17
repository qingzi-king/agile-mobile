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

var _default = function _default(props) {
  var _a;

  var type = props.type,
      className = props.className,
      color = props.color,
      _b = props.size,
      size = _b === void 0 ? 'md' : _b,
      restProps = __rest(props, ["type", "className", "color", "size"]);

  var wrapCls = (0, _classnames.default)(className, 'fam-icon', "fam-icon-" + type, (_a = {}, _a["fam-icon-" + (size || 'md')] = size && size !== 'inherit', _a));
  return /*#__PURE__*/React.createElement("i", (0, _extends2.default)({
    className: wrapCls,
    style: {
      color: color
    }
  }, restProps));
};

exports.default = _default;