import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import './ServicesPage.css'

import Footer from '../../components/Footer/Footer'
const  ServicesPage = () => {
  return (
    <div>
        <Navbar1/>

        <div className='services-page-container'>
            <h3>Services we Offer</h3>

            <div className='row'>

                <a className='services-item col-md-4 col-sm-6' href='#waterproofing'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-umbrella"></i>
                    </div>
                    <div className='services-item-heading'>
                        Water Proofing
                    </div>
                </a>
                <a className='services-item col-md-4 col-sm-6' href='#epoxyFlooring'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-paint-roller"></i>
                    </div>
                    <div className='services-item-heading'>
                        Epoxy Flooring System / Protective Paints
                    </div>
                </a>
                <a className='services-item col-md-4 col-sm-6' href='#repair'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-wrench"></i>
                    </div>
                    <div className='services-item-heading'>
                        Repair and Rehabilition
                    </div>
                </a>
                <a className='services-item col-md-6 last-two' href='#insulation'>
                    <div className='services-item-logo'>
                        <i class="fa-brands fa-connectdevelop"></i>
                    </div>
                    <div className='services-item-heading'>
                        Insulation
                    </div>
                </a>
                <a className='services-item col-md-6 col-sm-12 last-two last-one' href='#projectConsultancy'>
                    <div className='services-item-logo'>
                    <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div className='services-item-heading'>
                        Project Consultation
                    </div>
                </a>

            </div>

            

            <div className='services-page-service-container' id='waterproofing'>
                <h3>Water Proofing</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/waterproofing.jpg' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <p>Complete Waterproofing System INC specializes in waterproofing, expansion , joint treatment of structure.</p>
                        <p>We offer our Services for the following</p>
                        <ul>
                            <li>Airports, Metro Rails, Industries etc.</li>
                            <li>Waterproofing of U/G structure; e.g. Basement, Retaining Walls, Raft etc.</li>
                            <li>Tunnels</li>
                            <li>Swiming Pool, Lake, Water Retaining Structure</li>
                            <li>Sunken Area, Wet Area, Water Tanks</li>
                            <li>Podium & amp; NTA Area</li>
                            <li>Terrace, Terrace Gardens</li>
                            <li>STP/ETP Tanks & nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services-page-service-container' id='epoxyFlooring'>
                <h3>Epoxy Flooring / Protective Paints</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/epoxyFlooring.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        
                        <ul>
                            <li>Industrial Flooring</li>
                            
                            <li>Protective Coating</li>
                            <li>Epoxy Floor Coating</li>
                            <li>Anti - Corrosive Paints</li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services-page-service-container' id='repair'>
                <h3>Repair and Rehabilitation</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/repair.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        
                        Repairing and rehab of structures
                        
                    </div>
                </div>
            </div>
            <div className='services-page-service-container' id='insulation'>
                <h3>Insulation</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/insulation.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <div>We Provide insulation for </div>
                        <ul>
                            <li>Commercial Buildings</li>
                            <li>Residential Buildings</li>
                            <li>Hotels, Hospitals etc</li>
                            <li>Industrial Insulation</li>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className='services-page-service-container' id='projectConsultancy'>
                <h3>Project Consultancy</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/consultancy.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <div>We Provide Project Consultancy for </div>
                        <ul style={{listStyleType:"disc"}}>
                            <li>Water Proofing</li>
                            <li>Repairing and Rehab</li>
                            <li>Epoxy Flooring</li>
                            <li>Protecitive Coatings</li>
                            <li>Insulation</li>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ServicesPage