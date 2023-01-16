import React from 'react'
import {data} from '../../common/ServiceCardData.js';
import './ServicesCard.css'

const ServicesCard = () => {
  return (
    <div className='container'>

        <div className='service-content'>
            {/* <h1>Complete Waterproofing System INC</h1>
            <span>An ISO 9001:2015 Certified Company</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam facilis optio minima ipsam blanditiis esse qui porro. Harum vel dolore earum aliquid recusandae commodi accusamus eius voluptatibus tenetur minima, consectetur nesciunt asperiores neque deserunt expedita et quos culpa iusto minus illum explicabo! Sequi, alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, assumenda.</p> */}

            <h3>___ Our Experties ___</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae porro impedit aliquam harum eum doloremque! Pariatur totam excepturi recusandae!</p>
            
        </div>

        <div className='row'>
            {data.map((element)=>{
                return(
                    <div className='service-card-container col-md-4' key={element.id}>
                        {console.log(element.img)}
                        <div className='s-card-img-container'>
                            <img src={element.img} alt="img" className='s-card-img'/>
                        </div>

                        <div className='s-card-content'>
                            <div className=''>
                                <h3 className="heading">{element.heading}</h3>
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