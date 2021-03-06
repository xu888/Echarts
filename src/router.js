import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { HashRouter } from 'react-router-dom'
import IndexPage from './routes/IndexPage';
import Pie from './components/Pie';
import Line from './components/Line';
import Bar from './components/Bar';
import Radar from './components/Radar';



// 配置路由的路径、名称和组件
const routes = [
  // 首页
  {
    path: '/IndexPage',
    key: 'IndexPage',
    component: IndexPage
  },
  // 饼图
  {
    path: '/Pie',
    key: 'Pie',
    component: Pie
  },
  // 柱状图
  {
    path: '/Bar',
    key: 'Bar',
    component: Bar
  },
  // 折线图
  {
    path: '/Line',
    key: 'Line',
    component: Line
  },
  // 雷达图
  {
    path: '/Radar',
    key: 'Radar',
    component: Radar
  }
]

function RouterConfig({ history }) {
  return (
    <HashRouter>
      <Router history={history}>
        <Switch>
          <Redirect from="/" to="/IndexPage" exact />
          {routes.map(e => <Route {...e} />)}
        </Switch>
      </Router>
    </HashRouter>
  );
}



export default RouterConfig;

