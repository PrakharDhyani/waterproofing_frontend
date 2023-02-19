import React from 'react'
import './Certificates.css'
import Navbar from '../Navbar/Navbar'
import { CertificateArray } from '../../common/Certificates'
import { setting } from '../../common/setting'

import Slider from 'react-slick'
const Certificates = () => {
  return (
    <div>
      <Navbar/>

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
  )
}

export default Certificates