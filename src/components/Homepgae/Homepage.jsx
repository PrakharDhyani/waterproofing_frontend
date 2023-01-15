import React from 'react'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className="mycontainer ">
        <h1 className='h1'>Tagline</h1>
        <p className='lead' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, eligendi officia. Dolore itaque voluptas inventore quam, explicabo nisi
          architecto, possimus nobis nihil similique perferendis cumque error esse?
        </p>
        <div className ="btns">
          <button className='btn btn-lg btn-info' >Learn More</button>
          <button className='btn btn-lg btn-info' >Services</button>
        </div>
      </div>
    </div>
  )
}
