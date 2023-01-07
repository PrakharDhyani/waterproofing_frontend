import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Services.css"
import{ setting }from '../../common/setting.js'; 
import {allservices} from "../../common/allServices.js"

export default function services() {
    return (
      <div className ="services">
        <Slider {...setting} >
            {
                allservices.map((service) => {
                    return (
                        <div className ="card serviceCard" key={service.id}>
                            <img src = {service.img} className ="card-img-top img" alt="..."/>
                            <div className ="card-body">
                                <p className ="card-text">service.content</p>
                            </div>
                        </div>   
                    )
                })
            }        
        </Slider>
    </div>
  )
}
