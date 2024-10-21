import React from "react";
import  './header.css';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';

export default function Header() {


    return (
        <header className="header">
            <div className="logo"><Link to='/' style={{textDecoration: 'none'}}>Arturo</Link></div>
            <nav className="nav">
                <Link to ="/products">Products</Link>
                <Link to ="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
                
                
                {/* <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a> */}
            </nav>
            <div className="user-info">
                
                <Link to ="/cart">
                <FaShoppingCart size={20} />
                </Link>
                <div className="user-profile">
                    <img src="https://storage.googleapis.com/a1aa/image/mYmQmfFXMkQtMq1tjqIiSHHKufxpLs5Nri0i93fnvzfV7FhOB.jpg" alt="User profile picture" />
                    <span>Ankit Kafle</span>
                </div>
            </div>
        </header>
    );
}