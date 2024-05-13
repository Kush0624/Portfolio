import React from "react";
import { Link } from "react-router-dom";
const Header =()=>{
    return <>
    <nav>
        <div className="container">
            <div className="header-section">
                <div className="logo"><a href="/"><img src="./images/logo.png" alt="" /></a></div>
                <div className="links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
}
export default Header;