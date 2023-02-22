import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ navColor,bgColor,page }) => {
    return (
        <div className='Navbar' style={{backgroundColor: page !== "home"?"rgb(37, 150, 190)":"", position:page !== "home"?"static":"absolute" }}>
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
                            <li className="nav-item dropdown" >
                                <Link className="nav-link Navli dropdown-toggle" style={{ color: navColor }} to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >About Us</Link>
                                <ul className="dropdown-menu animate slideIn" style={{backgroundColor:"transparent"}} >
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/about">About Company</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="/aboutCeo">CEO Message</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli"  style={{color: navColor}} href="/">Concepts</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link  Navli" style={{color: navColor}}  href="/" >
                                    Services
                                </a>
                                
                            </li>
                            

                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navli" style={{color: navColor}} to="/clients">Clients</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link Navli" style={{color: navColor}} to="/certificates">Certificate</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color: navColor}} href="/">Gallery</a>
                            </li>
                            <li className="nav-item dropdown" >
                                <Link className="nav-link Navli dropdown-toggle" style={{ color: navColor }} to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Contacts</Link>
                                <ul className="dropdown-menu animate slideIn" style={{backgroundColor:"transparent"}} >
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="tel:+919873004032"><i className ="fa-solid fa-phone" style={{paddingRight:"5px"}}></i> +91 9873004032</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="https://www.google.com/maps?q=28.6357001,77.3107258"><i className="fa-solid fa-location-crosshairs" style={{paddingRight:"5px"}}></i> Location</a></li>
                                    <li><a className="dropdown-item Navli"target='_blank' style={{color: navColor,backgroundColor:"transparent"}} href="https://wa.me/+919873004032" ><i className="fa-brands fa-whatsapp"style={{paddingRight:"5px"}}></i> whatsapp</a></li>
                                    <li><a className="dropdown-item Navli"style={{color: navColor,backgroundColor:"transparent"}} href="mailto:cwsi_wp@yahoo.com"><i className="fa-solid fa-envelope" style={{paddingRight:"5px"}}></i> cwsi_wp@yahoo.com</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar