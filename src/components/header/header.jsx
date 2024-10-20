import React from "react";
import  './header.css';
export default function Header() {


    return (
        <header className="header">
            <div className="logo">Arturo</div>
            <nav className="nav">
                <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="user-info">
                <i className="fas fa-shopping-cart"></i>
                <div className="user-profile">
                    <img src="https://storage.googleapis.com/a1aa/image/mYmQmfFXMkQtMq1tjqIiSHHKufxpLs5Nri0i93fnvzfV7FhOB.jpg" alt="User profile picture" />
                    <span>Ankit Kafle</span>
                </div>
            </div>
        </header>
    );
}