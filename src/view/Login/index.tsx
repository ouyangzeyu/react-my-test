import React from 'react';
import { Link } from 'react-router-dom'
import './index.less'
const Login = (): React.FunctionComponentElement<unknown> => {
    return (
        <div className="login-view">
            <div className="login-body">
                <div>
                    用户名:<input className="userName" type="text" />
                </div>
                <div>
                    密码:<input className="password" type="password" />
                </div>
                <Link  to='/main'>去到主页面</Link>
            </div>
        </div>
    );
};

export default Login;
