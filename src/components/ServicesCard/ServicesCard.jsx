import React ,{useState,useEffect} from 'react'
import {data} from '../../common/ServiceCardData.js';
import './ServicesCard.css'
import {setting} from '../../common/setting';
import Slider from 'react-slick';

const ServicesCard = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    {/* Performs similarly to componentDidMount in classes */}
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    console.log(isMobile);
  return (
    <div className='container'>

        <div className='service-content'>

            <h3> <strong> ___ Our Experties ___</strong> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae porro impedit aliquam harum eum doloremque! Pariatur totam excepturi recusandae!</p>
            
        </div>

        <Slider {...setting}>
            {data.map((element)=>{
                return(
                    <div className="service-card-container" key={element.id}>
                    
                        <div className='s-card-img-container'>
                            <img src={element.img} alt="img" className='s-card-img'/>
                        </div>

                        
                        <div className='s-card-heading'>
                            <strong>{element.heading}</strong>
                        </div>
                        
                        <div className='image-content'>
                            <p >{element.content}</p>
                        </div>
                    </div>
                   
                );
            })}
            </Slider>
        </div>

    
  )
}

export default ServicesCard
