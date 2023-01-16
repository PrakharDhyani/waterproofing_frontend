import React ,{useState,useEffect} from 'react'
import {data} from '../../common/ServiceCardData.js';
import './ServicesCard.css'

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
            {/* <h1>Complete Waterproofing System INC</h1>
            <span>An ISO 9001:2015 Certified Company</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam facilis optio minima ipsam blanditiis esse qui porro. Harum vel dolore earum aliquid recusandae commodi accusamus eius voluptatibus tenetur minima, consectetur nesciunt asperiores neque deserunt expedita et quos culpa iusto minus illum explicabo! Sequi, alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, assumenda.</p> */}

            <h3>___ Our Experties ___</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae porro impedit aliquam harum eum doloremque! Pariatur totam excepturi recusandae!</p>
            
        </div>

        <div className='s-card-outer'>
            {data.map((element)=>{
                return(
                    <div className="service-card-container" key={element.id}>
                    
                        <div className='s-card-img-container'>
                            <img src={element.img} alt="img" className='s-card-img'/>
                        </div>

                        <div className='s-card-content'>
                            <div className='s-card-heading'>
                                {element.heading}
                            </div>
                            <p>{element.content}</p>
                        </div>
                    </div>

                );
            })}
        </div>
    </div>
  )
}

export default ServicesCard