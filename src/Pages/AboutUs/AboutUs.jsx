import React from 'react'
import AboutSection2 from "../../components/AboutSection2/AboutSection2"
import AboutSection4 from '../../components/AboutSection4/AboutSection4'
import Footer from '../../components/Footer/Footer'
import AboutSection3 from '../../components/AboutSection3/AboutSection3'
import "./AboutUs.css"
import Navbar1 from '../../components/Navbar/Navbar1'

export default function AboutUs() {
  return (
  
      <div className='AboutUs' >
          {/* <img className='Aboutcoverpage' src="../images/waterBackground2.jpg" alt="coverpage" /> */}
          <Navbar1 navColor = "white" bgColor = "rgb(37, 150, 190)" page = "aboutUs" />
          {/* <div className="headingContainer">
              <h1 className='Abouth1'> Protecting your home or business from the elements starts with a strong foundation - trust us to provide expert waterproofing solutions </h1>
              <p className='Aboutlead' style={{display:"none"}} >We are  </p>
              <div className='Aboutlead' >Complete Water Proofing System INC</div>
          </div> */}
          <AboutSection2 />
          {/* <AboutSection3/> */}
          {/* <AboutSection4 /> */}
          <Footer/>
          
    </div>
 
  )
}
