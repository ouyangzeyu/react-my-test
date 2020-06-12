import React from 'react';
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
            </div>
        </div>
    );
};

export default Login;
