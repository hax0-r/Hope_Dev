import React, { useRef, useState } from 'react'
import NAVBAR_DATA from './NAVBAR_DATA'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [ showNavLinks,setShowNavLinks] = useState(false)
    const nav_Hide = useRef();
    const closeNav = ()=>{
        nav_Hide.current.classList.remove("mobile-nav-links")
    }
    const showNav = ()=>{
        nav_Hide.current.classList.add("mobile-nav-links")
    }
    
    return (
        <>
            <nav>
                <div className="navbar">
                    <h1>Software House</h1>
                    <div ref={nav_Hide} className='links'>
                        <ul>
                            <div className="nav-close" onClick={closeNav}>
                        <IoClose />
                            </div>
                            {
                                NAVBAR_DATA.map((navbar, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={navbar.navPath}>{navbar.navTitle}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <button className="button">
                        <span>Get Started </span>
                    </button>
                    <div className="nav-bar"  onClick={showNav}>
                    <FaBarsStaggered />
                    </div>
                </div>
            </nav>
        </>
    )
}