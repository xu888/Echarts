import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { HashRouter } from 'react-router-dom'
// import IndexPage from './routes/IndexPage';
import IndexPage from './components/IndexPage' // 自定义的全局组件
import Tu1 from './components/Tu1' // 自定义的全局组件


// 配置路由的路径、名称和组件
const routes = [
  // 首页
  {
    path: '/IndexPage',
    key: 'IndexPage',
    component: IndexPage
  },
  // 雷达图
  {
    path: '/Tu1',
    key: 'Tu1',
    component: Tu1
  },
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

