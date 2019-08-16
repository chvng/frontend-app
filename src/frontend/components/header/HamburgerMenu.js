import React, { useState, useEffect } from 'react';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    useEffect( () => {
        console.log(`Open is ${open}`)
    });

    function handleClick() {
        setOpen(!open);
    }

    return ( 
        <div className="ffe-header__site-nav-toggle">
            <button 
                className="ffe-header__icon-button ffe-header__icon-button--site-nav"
                onClick={handleClick}
                >
                    <span className={open ? "ffe-header__site-nav-hamburger ffe-header__site-nav-hamburger--expanded" : "ffe-header__site-nav-hamburger"}>
                        <span className="ffe-header__site-nav-hamburger__bar"></span>
                    </span>
            </button>
        </div>
    );
}

export default HamburgerMenu;