import { useState } from "react";
import "./Navbar.css"

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">
                    <img 
                        src="https://i.postimg.cc/4xbrs7rP/ddd.png"
                        alt="my-logo"
                        className="logo-img"
                    />
                    </a>
                </div>

                <div className="navbar-nav">
                    <a href="#projects">Projects</a>
                    <a href="#about">About me</a>
                    <a href="#contact" className="contact-btn" >Contact me</a>
                </div>

                    {/*mobile hamburger button*/}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
                {/*dropdown*/}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#about" onClick={closeMenu}>About me</a>
                <a href="#contact" className="contact-btn mobile-contact" onClick={closeMenu}>Contact me</a>
            </div>
        </nav>
    );
}