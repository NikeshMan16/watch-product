import React from "react";
import  './header.css';
import { FaShoppingCart } from "react-icons/fa";
import {NavLink} from 'react-router-dom';

export default function Header() {


    return (
        <header className="header">
            <div className="logo"><NavLink to='/' style={{textDecoration: 'none'}}>Arturo</NavLink></div>
            <nav className="nav">
                <ul className="nav-links">
                <li><NavLink to ="/products">Products</NavLink></li>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                
                
                {/* <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a> */}
            </nav>
            <div className="user-info">
                
                <NavLink to ="/cart">
                <FaShoppingCart size={20} />
                </NavLink>
                <div className="user-profile">
                    <img src="https://storage.googleapis.com/a1aa/image/mYmQmfFXMkQtMq1tjqIiSHHKufxpLs5Nri0i93fnvzfV7FhOB.jpg" alt="User profile picture" />
                    <span>Ankit Kafle</span>
                </div>
            </div>
        </header>
    );
}