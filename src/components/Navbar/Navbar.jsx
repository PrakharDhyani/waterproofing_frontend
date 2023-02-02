import React from 'react'
import './Navbar.css'


const Navbar = () => {
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
                                <a className="nav-link active Navli"   style={{color:"whitesmoke"}}  aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli"   style={{color:"whitesmoke"}} href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli"   style={{color:"whitesmoke"}} href="/">Concepts</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle Navli"  style={{color:"whitesmoke"}}  href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu animate slideIn" style={{backgroundColor:"transparent"}} >
                                    <li><a className="dropdown-item Navli" style={{color:"whitesmoke"}} href="/">Water Proofing</a></li>
                                    <li><a className="dropdown-item Navli"style={{color:"whitesmoke"}} href="/">Epoxy Flooring / Protective Paints</a></li>
                                    <li><a className="dropdown-item Navli" style={{color:"whitesmoke"}} href="/">Repair and Rehabilation</a></li>
                                    <li><a className="dropdown-item Navli" style={{color:"whitesmoke"}} href="/">Insulation</a></li>
                                    <li><a className="dropdown-item Navli" style={{color:"whitesmoke"}} href="/">Project Consultancy</a></li>
                                </ul>
                            </li>
                            

                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color:"whitesmoke"}} href="/">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color:"whitesmoke"}} href="/">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color:"whitesmoke"}} href="/">Certificate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color:"whitesmoke"}} href="/">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Navli" style={{color:"whitesmoke"}} href="/">Contact Us</a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar