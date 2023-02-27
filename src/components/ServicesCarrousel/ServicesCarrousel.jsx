import React from 'react'
import {data} from '../../common/ServiceCardData'
import { setting } from '../../common/setting'
import Slider from 'react-slick'
import ServicesCard from '../ServicesCard/ServicesCard'

import './ServicesCarrousel.css'
const ServicesCarrousel = () => {
  return (
    <div className='ServicesCarrousel'>


        <div>Our Expertises</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae porro impedit aliquam harum eum doloremque! Pariatur totam excepturi recusandae!</p>

        <Slider {...setting}>
        {
            data.map((element) => {
                
                return (
                    <ServicesCard img={element.img} content={element.content} heading={element.heading}/>
            )})
        }
        </Slider>
    </div>
  )
}

export default ServicesCarrousel