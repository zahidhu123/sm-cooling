import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    const navbarCollapseRef = useRef(null);

    const handleNavLinkClick = () => {
        if (navbarCollapseRef.current && window.innerWidth < 992) {
            const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current);
            collapse.hide();
        }
    };

    return (
        <>
            {/* Navbar start */}
            <nav className="navbar navbar-expand-lg navbar-box fixed-top">
                <div className="container">
                    <Link className="navbar-brand brand-name" to="/">S M Cooling Control</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
                        <ul className="navbar-nav nav-item-wrap ms-auto mb-2 mb-lg-0 pe-lg-4">
                            <li className="nav-item">
                                <NavLink className="nav-link nav-link-wrap" aria-current="page" to="/" onClick={handleNavLinkClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav-link-wrap" aria-current="page" to="/service" onClick={handleNavLinkClick}>Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link nav-link-wrap" aria-current="page" to="/about" onClick={handleNavLinkClick}>About</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link nav-link-wrap" aria-current="page" to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    );
}

export default Navbar;

