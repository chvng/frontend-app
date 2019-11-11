import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    const [menuItem, setMenuItem] = useState([
        {
            url: '/',
            title: 'Oversikt'
        },
        {
            url: '/logganalyse',
            title: 'Logganalyse'
        },
        {
            url: '/statistikk-og-grafer',
            title: 'Statistikk og grafer'
        },
        {
            url: '/hjelp',
            title: 'Hjelp'
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