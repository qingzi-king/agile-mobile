var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

import classnames from 'classnames';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from '../index';
var SHORT = 2000;
var timer;
;
var _config = {
  duration: SHORT,
  position: 'center',
  mask: true
};
var prefixCls = 'fam-toast';
var warpDOM;

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // 处理提示


function notice(props) {
  var _a;

  var _this = this;

  var type = props.type,
      content = props.content,
      _b = props.duration,
      duration = _b === void 0 ? _config.duration : _b,
      _c = props.position,
      position = _c === void 0 ? _config.position : _c,
      onClose = props.onClose,
      _d = props.mask,
      mask = _d === void 0 ? _config.mask : _d,
      icon = props.icon;
  handleDestroyDOM();
  var iconTypes = {
    info: '',
    success: 'check-o',
    fail: 'close-o',
    offline: 'offline',
    loading: 'loading'
  };
  var iconType = iconTypes[type];
  warpDOM = document.createElement('div');
  var wrapCls = classnames((_a = {}, _a[prefixCls + "-mask"] = mask, _a[prefixCls + "-top"] = position === 'top', _a[prefixCls + "-bottom"] = position === 'bottom', _a));
  ReactDOM.render(!!iconType ? /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/React.createElement("div", {
    className: "" + wrapCls
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-text " + prefixCls + "-icon"
  }, icon ? icon : /*#__PURE__*/React.createElement(Icon, {
    type: iconType,
    size: "lg"
  }), content))) : /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-text"
  }, content))), warpDOM);
  document.body.appendChild(warpDOM);

  if (duration > 0) {
    timer = setTimeout(function () {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              warpDOM.classList.add(prefixCls + "-remove");
              if (onClose) onClose();
              return [4
              /*yield*/
              , sleep(100)];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , handleDestroyDOM()];

            case 2:
              _a.sent(); // ReactDOM.unmountComponentAtNode(div); // 组件可使用


              return [2
              /*return*/
              ];
          }
        });
      });
    }, duration);
  }
} // 销毁


var handleDestroyDOM = function handleDestroyDOM() {
  if (timer) clearTimeout(timer);

  if (warpDOM) {
    document.body.removeChild(warpDOM);
    warpDOM = null;
  }
};

export default {
  SHORT: SHORT,
  LONG: 8000,
  info: function info(props) {
    return notice(__assign(__assign({}, props), {
      type: 'info'
    }));
  },
  success: function success(props) {
    return notice(__assign(__assign({}, props), {
      type: 'success'
    }));
  },
  fail: function fail(props) {
    return notice(__assign(__assign({}, props), {
      type: 'fail'
    }));
  },
  offline: function offline(props) {
    return notice(__assign(__assign({}, props), {
      type: 'offline'
    }));
  },
  loading: function loading(props) {
    return notice(__assign(__assign({}, props), {
      type: 'loading'
    }));
  },
  hide: function hide() {
    handleDestroyDOM();
  },
  config: function config(conf) {
    if (conf === void 0) {
      conf = {};
    }

    var _a = conf.duration,
        duration = _a === void 0 ? SHORT : _a,
        position = conf.position;

    if (duration) {
      _config.duration = duration;
    }

    if (position) {
      _config.position = position;
    }
  }
};