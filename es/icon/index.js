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
export default (function (props) {
  var _a;

  var type = props.type,
      className = props.className,
      color = props.color,
      _b = props.size,
      size = _b === void 0 ? 'md' : _b,
      restProps = __rest(props, ["type", "className", "color", "size"]);

  var wrapCls = classnames(className, 'fam-icon', "fam-icon-" + type, (_a = {}, _a["fam-icon-" + (size || 'md')] = size && size !== 'inherit', _a));
  return /*#__PURE__*/React.createElement("i", _extends({
    className: wrapCls,
    style: {
      color: color
    }
  }, restProps));
});