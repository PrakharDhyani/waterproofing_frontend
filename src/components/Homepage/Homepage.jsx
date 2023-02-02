import React from 'react'
import "./Homepage.css"
import Navbar from "../Navbar/Navbar"

export default function Homepage() {
  return (
    <div className='homepage'>
      <img className='coverpage' src="../images/waterBackground1.jpg" alt="coverpage" />
      <Navbar/>
      <div className="mycontainer">
        <h1 className='h1'>Complete Waterproofing System INC</h1>
        <p className='lead'>
        An ISO 9001:2015 Certified Company
        </p>
        <div className ="btns">
          <button className ='btn btn-lg btn-info home-btn' >Learn More</button>
          <button className ='btn btn-lg btn-info home-btn' >Services</button>
        </div>
      </div>
    </div>
  )
}
