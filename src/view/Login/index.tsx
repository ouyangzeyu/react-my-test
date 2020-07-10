import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../server/server';
import './index.less'
const Login = (): React.FunctionComponentElement<unknown> => {
    const getPictures = useCallback((): void => {
        const params = {
            cityname: '深圳',
            dtype: 'json',
            key: '5c01422f67bb8b8c6a1d53ac96637cbc'
        }
        axios.get('/api/weather/index', {params}).then(res => {
            console.log(res);
        })
    }, [])

    return (
        <div className="login-view">
            <div className="login-body">
                <div>
                    用户名:<input className="userName" type="text" />
                </div>
                <div>
                    密码:<input className="password" type="password" />
                </div>
                <Link to='/main'>去到主页面</Link>
                <button onClick={getPictures}>点击请求天气预报</button>
            </div>
        </div>
    );
};

export default Login;
