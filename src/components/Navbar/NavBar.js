import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';


const NavBar = ({ children, scrollPosition }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Define animation properties
    const menuAnimation = useSpring({
        opacity: isMobileMenuOpen ? 1 : 0,
        transform: `translateX(${isMobileMenuOpen ? '0%' : '-100%'})`,
    });

    return (
        <header>
            <nav className={`navBar ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className={`logo`}>
                    <h1><em>Salman Ahmad</em></h1>
                </div>
                {isMobileMenuOpen ? (<animated.div style={menuAnimation} className={`navLinks ${isMobileMenuOpen ? 'active' : ''}`}>
                    {children}
                </animated.div>) : (<div className={`navLinks  ${isMobileMenuOpen ? 'active' : ''}`}>
                    {children}
                </div>)}

                <div className="navToggler" onClick={handleToggleMenu}>
                    <h1>☰</h1>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;