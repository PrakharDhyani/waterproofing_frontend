import React from 'react'
import "./Client.css"

export default function Client({name,img}) {
  return (
      <div className='Client' >
          <h1>{name}</h1>
          <img src={img} alt = "" style={{height:"8rem",width:"8rem"}} />
    </div>
  )
}
