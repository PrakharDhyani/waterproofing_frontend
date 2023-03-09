import React , {useState}from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import Slider from 'react-slick'
import { setting } from '../../common/setting'
import './Gallery.css'
import {data} from '../../common/Gallery'

const Gallery = () => {

    const [index,setIndex] = useState(0);

    const customSetting = {
        ...setting,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "black" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "black" }}
            onClick={onClick}
          />
        );
      }

  return (
    <div>
        <Navbar1/>
        <div className='gallery-container'>

            <div className='gallery-btns-container'>
                <button className="gallery-btn" onClick={()=>setIndex(0)} >Airport</button>
                <button className="gallery-btn" onClick={()=>setIndex(1)} >Bridge</button>
                <button className="gallery-btn" onClick={()=>setIndex(2)} >Metro</button>
            </div>

            <Slider {...customSetting} >
            {
            data[index].map((element)=>{
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
    </div>
  )
}

export default Gallery