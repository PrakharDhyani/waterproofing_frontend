import React from 'react'
import './AboutSection2.css'

const AboutSection2 = () => {
  return (
    <div className="about-us-midSection">

        <h2>Complete Water proofing is the Product of Experience, Prudence and Knowledge</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam animi neque facere, ipsam non.</p>

        <div className='about-us-box'>

          <div className='mid-sec-img-container'>
            <img src='./images/about-img.webp' alt='img' className='mid-sec-img'></img>
          </div>

          <div className='mid-sec-content-container'>
            <h2>About Us</h2>

            <p>Founded by a group of Engineers in mid of nineties
                in North India and then spread its network across the India. Our technical experts has the exposure in various fields; application, research & development, technical services and project planning and execution</p>

            <div>  
              <button>Testimonials</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSection2