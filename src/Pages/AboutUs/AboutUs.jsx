import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutMid from "../../components/AboutMid/AboutMid"
import "./AboutUs.css"
import AboutAim from '../../components/AboutAim/AboutAim'
import Footer from '../../components/Footer/Footer'
import AboutHow from '../../components/AboutHow/AboutHow'

export default function AboutUs() {
  return (
  
      <div className='AboutUs' >
          <img className='Aboutcoverpage' src="../images/waterBackground2.jpg" alt="coverpage" />
          <Navbar navColor = "white" />
          <div className="headingContainer">
              <h1 className='Abouth1'> Protecting your home or business from the elements starts with a strong foundation - trust us to provide expert waterproofing solutions </h1>
                <p className='lead'>
                    We are <b> Complete Water Proofing System INC</b>
                </p>
          </div>
          <AboutMid/>
          <AboutHow/>
          <AboutAim/>
          
    </div>
 
  )
}
