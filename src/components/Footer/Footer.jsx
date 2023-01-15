import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
      <div className=' Footer'>
          <div className="fst">
            <div className="handles">
                <h3>SOCIAL MEDIA</h3>
                <div className="links">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
            <div className="Services">
                <h3>SERVICES</h3>
                <ul>
                    <li>WaterProofing</li>
                    <li>Epoxy Flooring System / Protective Paints</li>
                    <li> Repair and Rehabilitation</li>
                    <li>Insulation </li>
                    <li>Project Consultancy</li>
                </ul>
            </div>
          </div>
          <div className="snd">
            <div className="products">
                <h3>PRODUCTS</h3>
                <ul>
                    <li>PVC Membrane</li>
                    <li>App Membrane</li>
                    <li>SBS Membrane</li>
                    <li>EPDM Membrane</li>
                    <li>Polyurethane Coating</li>
                    <li>Cementitious WP Coating</li>
                    <li>Crystalline Waterproofing</li>
                    <li>TPO Membranes</li>
                    <li>Rubber Based EMB & Flexible</li>
                    <li>Acrylic Coating</li>
                </ul>
            </div>
            <div className="contact">
                <h3>CONTACT US</h3>
                <ul>
                    <li>Plot No-48, FF 1, Hasanpur,IP Extn-Delhi-110092</li>
                    <li>011-41574032</li>
                    <li>09873004032</li>
                    <li><a href="www.completewaterproofing.org"> www.completewaterproofing.org</a></li>
                    <li><a href="mailto:info@company.com">cwsi_wp@yahoo.com</a></li>
                </ul>
            </div>
              
          </div>
    </div>
  )
}
