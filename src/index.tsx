// 主入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import AppLayout from './view/AppLayout';
import Login from './view/Login';
import './style/antd.css';

const history = createBrowserHistory();
const render = (): void => {
    ReactDOM.render(
        <Router history={history}>
            {/* 有<Switch>标签，则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配； */}
            <Switch>
                <Route path="/main" component={AppLayout} />
                <Route path="/login" component={Login} />
                <Redirect from="/" to="/main" />
            </Switch>
        </Router>,
        document.getElementById('root')
    );
}
render();
