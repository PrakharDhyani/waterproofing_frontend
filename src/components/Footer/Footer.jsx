import React from 'react'
import "./Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    useEffect(() => { 
        AOS.init({
            delay: 100,
            duration:1200
        });
    })
  return (
      <div className='Footer' >
          <div className="fst">
              <div >
              <div className="logo">
                  <img src="/images/logo.png" alt="" style={{ height: "5rem",width:"5rem"}} />
                   <h3>Complete Waterproofing</h3> 
              </div>
             <span>We have competent workforce and supervisory staff backed up by highly experienced consultants,technical associates.Name</span> 
            <div className="handles">
                <div className="links">
                    <i className="fa-brands fa-twitter fa-2x"></i>
                    <i className="fa-brands fa-facebook fa-2x"></i>
                </div>
            </div>
        </div>
            <div className="Services">
                <ul className="footerLi" >
                   <li><h3>SERVICES</h3></li> 
                    <li>- WaterProofing</li>
                    <li>- Epoxy Flooring System / Protective Paints</li>
                    <li>- Repair and Rehabilitation</li>
                    <li>- Insulation </li>
                    <li>- Project Consultancy</li>
                </ul>
            </div>
          </div>
          <div className="snd">
            <div className="products">
                <ul  className="footerLi">
                    <li><h3>PRODUCTS</h3></li>
                    <li>- PVC Membrane</li>
                    <li>- App Membrane</li>
                    <li>- SBS Membrane</li>
                    <li>- EPDM Membrane</li>
                    <li>- Polyurethane Coating</li>
                    <li>- Cementitious WP Coating</li>
                    <li>- Crystalline Waterproofing</li>
                    <li>- TPO Membranes</li>
                    <li>- Rubber Based EMB & Flexible</li>
                    <li>- Acrylic Coating</li>
                </ul>
            </div>
            <div className="contact">
                <ul className="footerLi">
                    <li><h3>CONTACT US</h3></li>  
                    <li><i className="fa-solid fa-location-pin"></i> Plot No-48, FF 1, Hasanpur,IP Extn-Delhi-110092</li>
                    <li><i className="fa-solid fa-phone"></i> 011-41574032</li>
                    <li><i className="fa-solid fa-phone"></i> 09873004032</li>
                    <li><i className="fa-solid fa-link"></i> <a href ="http://www.completewaterproofing.in/" target='_blank' > www.completewaterproofing.org</a></li>
                     <li><a href="tel:+919873004032"><i className ="fa-solid fa-phone" style={{paddingRight:"5px"}}></i> +91 9873004032</a></li>
                    <li><a href="https://www.google.com/maps?q=28.6357001,77.3107258"><i className="fa-solid fa-location-crosshairs" style={{paddingRight:"5px"}}></i> Location</a></li>
                    <li><a target='_blank' href="https://wa.me/+919873004032" ><i className="fa-brands fa-whatsapp"style={{paddingRight:"5px"}}></i> whatsapp</a></li>
                    <li><a href="mailto:cwsi_wp@yahoo.com"><i className="fa-solid fa-envelope" style={{paddingRight:"5px"}}></i> cwsi_wp@yahoo.com</a></li>  
                </ul>
            </div>
              
          </div>
    </div>
  )
}
