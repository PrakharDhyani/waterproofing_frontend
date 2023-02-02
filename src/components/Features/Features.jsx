import React from 'react'
import { useState } from 'react'
import './Features.css'

import {data} from './featuresContent' 


const Features = () => {

    const [key,setKey] = useState(1);

  return (
    <div className='features-container'>

        <div className='features-left'>
            <b>____ Why Choose us?</b>

            <h1>We provide the best Waterproofing Services</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita ad laboriosam, illo suscipit mollitia, quos dolore rem, nulla ab id nobis itaque.</p>

            <div className='features-left-box'>

                <div className={(key===1)?'f-btn key-select':'f-btn'} onClick={()=>setKey(1)}>Quality</div>
                <div className={(key===2)?'f-btn key-select':'f-btn'} onClick={()=>setKey(2)}>Professionals</div>
                <div className={(key===3)?'f-btn key-select':'f-btn'} onClick={()=>setKey(3)}>One Solution</div>
                <div className={(key===4)?'f-btn key-select':'f-btn'} onClick={()=>setKey(4)}>Technology</div>

                {data.map((element)=>{
                    return (
                        <div  className={(element.key===key)?'features-left-content current':'features-left-content'} key={element.key}>
                            {element.content}
                        </div> 
                    );
                })}

                <div className='f-tick tick-first'>
                    <i class="fa-regular fa-circle-check"></i>
                    Experienced Workers
                </div>

                <div className='f-tick tick-second'>
                    <i class="fa-regular fa-circle-check"></i>
                    High Quality Product
                </div>

                <div className='f-tick tick-third'>
                    <i class="fa-regular fa-circle-check"></i>
                    Latest Technology
                </div>

                <div className='f-tick tick-fourth'>
                    <i class="fa-regular fa-circle-check"></i>
                    Client Satisfaction
                </div>
                
            </div>
        </div>
        
        <div className='features-right'>

            <div className='f-left-img-container'>
                <img src="./images/workers.avif" alt="" className='f-img-left'/>
            </div>
            <div className='f-right-img-container'>
                <img src="./images/worker_working2.jpg" alt="" className='f-img-right' />
            </div>
            <div className='f-card'>
                <i class="fa-solid fa-helmet-safety"></i>

                <h3><b>10 +</b></h3>
                <p>years of Experience</p>
            </div>
        </div>

    </div>
  )
}

export default Features