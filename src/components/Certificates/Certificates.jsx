import React from 'react'
import './Certificates.css'
import Navbar from '../Navbar/Navbar'
import { CertificateArray } from '../../common/Certificates'
import { setting } from '../../common/setting'
import Footer from '../Footer/Footer'
import Slider from 'react-slick'
const Certificates = () => {
  setting.slidesToShow=1;
  setting.speed= 800;
  return (
    <>
      <Navbar />
    <div className='certificates-component-cont'>

      <h2>__ Our Certificates __</h2>
      <Slider {...setting} >

        {
          CertificateArray.map((element)=>{
            return(
              <div className='certificate-container'>

                <div className='certificate-img-container'>
                  <img src={element.img} alt="" className='certificate-img'/>
                </div>

              </div>
            )
          })
        }

      </Slider>
      
    </div>
    <Footer/>
    </>
  )
}

export default Certificates