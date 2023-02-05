import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./AboutUs.css"


export default function AboutUs() {
  return (
      <div className='AboutUs' >
          <img className='Aboutcoverpage' src="../images/waterBackground2.jpg" alt="coverpage" />
          <Navbar navColor = "whitesmoke" />
          <div className="headingContainer">
              <h1 className='Abouth1'> Protecting your home or business from the elements starts with a strong foundation - trust us to provide expert waterproofing solutions </h1>
                <p className='lead'>
                    We are <strong> Complete Water Proofing System INC</strong>
                </p>
          </div>
    </div>
  )
}
