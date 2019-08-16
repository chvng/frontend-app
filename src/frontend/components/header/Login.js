import React from 'react';
import { ActionButton } from '@sb1/ffe-buttons-react';


const Login = () => {
    return (
        <div className="ffe-header__user-nav-toggle">
            <span className="ffe-header__login-btn">
                <ActionButton className="ffe-header__button--rounded" ghost={true}>Logg Inn</ActionButton>
            </span>
        </div>
    );
}

export default Login;