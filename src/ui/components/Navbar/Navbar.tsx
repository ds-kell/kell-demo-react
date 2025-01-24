import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar: React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
