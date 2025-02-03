import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">VA SHOP</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/link" className="nav-link">Link</Link>
                </li>
                <li className="nav-item">
                    <Link to="/disabled" className="nav-link disabled">Disabled</Link>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle">Dropdown</a>
                    <div className="dropdown-menu">
                        <Link to="/action" className="dropdown-item">Action</Link>
                        <Link to="/another-action" className="dropdown-item">Another action</Link>
                    </div>
                </li>
            </ul>
            {/* <div className="navbar-icons">
                <a href="#" className="icon">
                    <i className="fa fa-envelope"></i>
                    <span className="badge"></span>
                </a>
                <a href="#" className="icon">
                    <i className="fa fa-bell"></i>
                    <span className="badge">11</span>
                </a>
                <a href="#" className="icon">
                    <i className="fa fa-globe"></i>
                    <span className="badge">11</span>
                </a>
            </div> */}
            <form className="search-form">
                <input type="text" placeholder="Search"/>
                <button type="submit">Search</button>
            </form>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
