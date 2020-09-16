/*
 * @Descripttion: 
 * @Author: qingzi.wang
 * @Date: 2020-07-27 17:14:02
 */ 
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import asyncComponent from './asyncComponent';

import App from '../pages/app';
import ComponentsUnit from '../pages/index';
import QuickStart from '../pages/quick-start/index';
import ChangeLog from '../pages/change-log/index';
import NoMatch from '../pages/common/noMatch';

// 异步加载组件（切分之后，当前路由下的样式直接使用（刷新页面）其他路由树下的样式（未import情况下）会有问题，）
// const App = asyncComponent(() => import('../pages/App'));

import BrowseIndex from '../pages/browseIndex';

const configRoutes = [
  {
    path: '/',
    exact: true,
    main: App,
  },
  {
    path: ['/components', '/components/:str'],
    exact: true,
    main: ComponentsUnit,
  },
  {
    path: '/quick-start',
    exact: true,
    main: QuickStart,
  },
  {
    path: '/change-log',
    exact: true,
    main: ChangeLog,
  },
  {
    path: '/m/:str',
    exact: true,
    main: BrowseIndex,
  },
  {
    path: '*',
    exact: true,
    main: NoMatch,
  }
];

const Routes = () => (
  <Router>
    <Switch>
      {
        configRoutes.map((route, index) => {
          return <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        })
      }
    </Switch>
  </Router>
)

// Routes.propTypes = {
//   text: PropTypes.any
// };

export default Routes;