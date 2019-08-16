import React from 'react';
import Login from './Login.js';
import Logo from './Logo.js';
import Menu from './Menu.js';
import HamburgerMenu from './HamburgerMenu.js';

import './header.less';

const Header = () => {
    return (
        <header className="ffe-header">
            <div className="ffe-header__border">
                <div className="ffe-header__wrapper">
                    <div className="ffe-header__placeholder"></div>
                    <Logo />
                    <Login />
                    <HamburgerMenu />
                </div>
                <Menu />
            </div>
        </header>
    );
}

export default Header;