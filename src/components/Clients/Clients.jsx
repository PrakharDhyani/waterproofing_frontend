import React from 'react'
import {clientsData}  from "../../common/clientsData.js"
import Client from '../Client/Client'
import "./Clients.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { setting } from '../../common/setting.js'; 

export default function Clients() {
  return (
    <div className='Clients' >
      <h1>Our Clients</h1>
      <h3>___Work we have done with___</h3>
      <Slider {...setting}>
        {
            clientsData.map((item) => {
            return <Client img = {item.logo} name = {item.name} key = {item.id} />  
          })}
      </Slider>
    </div>
  )
}
