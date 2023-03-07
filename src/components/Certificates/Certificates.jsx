import React, { useState,useEffect } from 'react'
import './Certificates.css'
import { CompaniesCertificateArray,CompletionCertificateArray } from '../../common/Certificates'
import { setting } from '../../common/setting'
import Footer from '../Footer/Footer'
import Slider from 'react-slick'
import Navbar1 from '../Navbar/Navbar1'
const Certificates = () => {
  setting.slidesToShow=3;
  setting.speed= 800;

  const [data,setData] = useState([]);

  useEffect(() => {
    setData(CompaniesCertificateArray);
  }, [])
  

  return (
    <>
      <Navbar1 />
    <div className='certificates-component-cont'>

      <h2>__ Our Certificates __</h2>

      <div className='certificate-btn-container'>
        <button className={(data==CompaniesCertificateArray)?'certificate-btn clicked_btn':'certificate-btn'} onClick={()=>setData(CompaniesCertificateArray)}>Companies Certificates</button>
        <button className={(data==CompletionCertificateArray)?'certificate-btn clicked_btn':'certificate-btn'} onClick={()=>setData(CompletionCertificateArray)}>Completion Certificates</button>
      </div>

      <Slider {...setting} >

        {
          data.map((element)=>{
            return(
              <div className='certificate-container'>

                <div className='certificate-img-container'>
                  <img src={element.img} alt="" className='certificate-img'/>

                  <h4 style={{padding:"8% 0"}} >{element.description}</h4>
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