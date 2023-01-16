import React from 'react'

import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <div className='service-section-container'>

      <div className='s-section-heading'>
        <h3>___ Services We Offer ___</h3>
      </div>

      <div className='s-section-container-in'>

        <div className='icon-container'>
          <i class="fa-solid fa-screwdriver-wrench" style={{ zIndex: "3" }}></i>
          <h5>Underground Structure</h5>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-hammer"></i>
          <h4>Industrial Projects</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-wrench"></i>
          <h4>Roof Terraces</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-person-swimming"></i>
          <h4>Swimming Pool</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-helmet-safety"></i>
          <h4>Expansion Joints</h4>

        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-cube"></i>
          <h4>Water Reservoirs</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-paint-roller"></i>
          <h4>Old Structures</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-box"></i>
          <h4>Industrial Flooring</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-brush"></i>
          <h4>Protective Coating</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-brands fa-connectdevelop"></i>
          <h4>Inndustrial Insulations</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-user-tie"></i>
          <h4>Consultancy Services</h4>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-people-roof"></i>
          <h4>Project Management</h4>
        </div>

      </div>
    </div>
  )
}

export default ServicesSection