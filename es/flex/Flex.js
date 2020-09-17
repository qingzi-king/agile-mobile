import _extends from "/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends";

var __extends = this && this.__extends || function () {
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

var Flex =
/** @class */
function (_super) {
  __extends(Flex, _super);

  function Flex() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Flex.prototype.render = function () {
    var _a;

    var _b = this.props,
        direction = _b.direction,
        wrap = _b.wrap,
        justify = _b.justify,
        align = _b.align,
        alignItem = _b.alignItem,
        className = _b.className,
        children = _b.children,
        prefixCls = _b.prefixCls,
        style = _b.style,
        restProps = __rest(_b, ["direction", "wrap", "justify", "align", "alignItem", "className", "children", "prefixCls", "style"]);

    var wrapCls = classnames(prefixCls, className, (_a = {}, _a[prefixCls + "-dir-row"] = direction === 'row', _a[prefixCls + "-dir-row-reverse"] = direction === 'row-reverse', _a[prefixCls + "-dir-column"] = direction === 'column', _a[prefixCls + "-dir-column-reverse"] = direction === 'column-reverse', _a[prefixCls + "-nowrap"] = wrap === 'nowrap', _a[prefixCls + "-wrap"] = wrap === 'wrap', _a[prefixCls + "-wrap-reverse"] = wrap === 'wrap-reverse', _a[prefixCls + "-justify-start"] = justify === 'start', _a[prefixCls + "-justify-end"] = justify === 'end', _a[prefixCls + "-justify-center"] = justify === 'center', _a[prefixCls + "-justify-between"] = justify === 'between', _a[prefixCls + "-justify-around"] = justify === 'around', _a[prefixCls + "-align-start"] = align === 'start', _a[prefixCls + "-align-center"] = align === 'center', _a[prefixCls + "-align-end"] = align === 'end', _a[prefixCls + "-align-baseline"] = align === 'baseline', _a[prefixCls + "-align-stretch"] = align === 'stretch', _a[prefixCls + "-align-content-start"] = alignItem === 'start', _a[prefixCls + "-align-content-end"] = alignItem === 'end', _a[prefixCls + "-align-content-center"] = alignItem === 'center', _a[prefixCls + "-align-content-between"] = alignItem === 'between', _a[prefixCls + "-align-content-around"] = alignItem === 'around', _a[prefixCls + "-align-content-stretch"] = alignItem === 'stretch', _a));
    return /*#__PURE__*/React.createElement("div", _extends({
      className: wrapCls,
      style: style
    }, restProps), children);
  };

  Flex.defaultProps = {
    prefixCls: 'fam-flexbox',
    align: 'center'
  };
  return Flex;
}(React.Component);

export default Flex;