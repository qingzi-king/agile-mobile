"use strict";

var _interopRequireDefault = require("/Users/wangqingzi/Desktop/project/carkings/agile-mobile/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _index2.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _index3.default;
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _index4.default;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _index5.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _index6.default;
  }
});

var _index = _interopRequireDefault(require("./button/index"));

var _index2 = _interopRequireDefault(require("./icon/index"));

var _index3 = _interopRequireDefault(require("./modal/index"));

var _index4 = _interopRequireDefault(require("./popup/index"));

var _index5 = _interopRequireDefault(require("./flex/index"));

var _index6 = _interopRequireDefault(require("./toast/index"));

var ENV = process.env.NODE_ENV;

if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  // tslint:disable-next-line:no-console
  console.warn('You are using a whole package of agile-mobile, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}