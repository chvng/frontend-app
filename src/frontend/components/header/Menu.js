import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const [menuItem, setMenuItem] = useState([
        {
            url: '/',
            title: 'Oversikt'
        },
        {
            url: '/servicedesk',
            title: 'Servicedesk'
        },
        {
            url: '/logganalyse',
            title: 'Logganalyse'
        },
        {
            url: '/verktoy',
            title: 'Verktøy'
        },
        {
            url: '/tips-og-raad',
            title: 'Tips og råd'
        },
        {
            url: '/om-oss',
            title: 'Om oss'
        }
    ]);

    const menuItems = menuItem.map((menu, index) => (
        <li key={index} className="ffe-header__list-item">
            <NavLink
                exact to={menu.url}
                className="ffe-header__link"
                activeClassName="ffe-header__link--active"
            >
                {menu.title}
            </NavLink>
        </li>
    ));

    return (
        <div className="ffe-header__wrapper">
            <nav className="ffe-header__nav" role="navigation">
                <ul>
                    {menuItems}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;