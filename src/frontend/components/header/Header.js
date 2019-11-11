import React from 'react';
import Menu from './Menu.js';
import SpareBank1 from './SpareBank1.js';

function Header() {
    return(
        <header className="ffe-header">
            <div className="ffe-header__border">
                <div className="ffe-header__wrapper">
                    <SpareBank1/>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;