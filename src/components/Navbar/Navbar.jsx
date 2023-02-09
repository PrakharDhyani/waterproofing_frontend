import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ navColor }) => {
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-xl " >
                <div className="container-fluid mx-auto" >
                    <a className="navbar-brand ms-5" href="/">
                        < img src="./images/logo.png" alt="IMG" id='logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active Navli"   style={{color: navColor}}  aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navli"  style={{color: navColor}} to="/about" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli"  style={{color: navColor}} href="/">Concepts</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle Navli" style={{color: navColor}}  href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu animate slideIn" style={{backgroundColor:"transparent"}} >
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/">Water Proofing</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/">Epoxy Flooring / Protective Paints</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/">Repair and Rehabilation</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/">Insulation</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/">Project Consultancy</a></li>
                                </ul>
                            </li>
                            

                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Certificate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Contact Us</a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar