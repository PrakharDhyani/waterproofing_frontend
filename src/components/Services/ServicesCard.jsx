import React from 'react'
import {data} from '../../common/ServiceCardData.js';
import './ServicesCard.css'

const ServicesCard = () => {
  return (
    <div className='container'>
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