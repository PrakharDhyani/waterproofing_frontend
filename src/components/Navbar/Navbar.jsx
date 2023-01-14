import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/">
                        < img src="./images/logo.png" alt="IMG" id='logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Concepts</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu animate slideIn">
                                    <li><a className="dropdown-item" href="/">Water Proofing</a></li>
                                    <li><a className="dropdown-item" href="/">Epoxy Flooring / Protective Paints</a></li>
                                    <li><a className="dropdown-item" href="/">Repair and Rehabilation</a></li>
                                    <li><a className="dropdown-item" href="/">Insulation</a></li>
                                    <li><a className="dropdown-item" href="/">Project Consultancy</a></li>
                                </ul>
                            </li>
                            

                            <li className="nav-item">
                                <a className="nav-link" href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Certificate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar