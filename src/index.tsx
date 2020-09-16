import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.less';
import './assets/css/demo.less';
import './assets/css/doc.less';
import 'highlight.js/styles/github-gist.css'; // 更多风格 https://highlightjs.org/static/demo/
import './routes/global.d';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Routes from './routes/index';

import 'dayjs/locale/zh-cn';

ReactDOM.render(<ConfigProvider locale={zhCN}><Routes /></ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
