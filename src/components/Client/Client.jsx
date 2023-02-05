import React from 'react'
import "./Client.css"

export default function Client({name,img}) {
  return (
      <div className='Client' >
          <img src={img} alt = "" style={{height:"8rem",width:"8rem"}} />
          <h2>{name}</h2>
      </div>
  )
}
