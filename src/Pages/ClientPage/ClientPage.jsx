import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { clientsData } from "../../common/clientsData.js"
import "./ClientPage.css"
export default function ClientPage() {
  return (
      <div className='ClientPage'>
          <Navbar />
          <div className="ClientBody">
              <div className="Clientheading" style={{margin:"15px 0px"}}>
                  <h1>__Our Clients__</h1>
              </div>
              <div className="ClientTable">
                  <div className="ListHeading">
                      <div className="listLogo">
                         <h2> <strong>Client Logo</strong> </h2>
                      </div>
                      <div className="ClientName" >
                        <h2><strong>Client Name</strong> </h2> 
                      </div>
                  </div>
                  {
                      clientsData.map((item) => {
                          return <div className="listElement">
                            <div className="listLogo">
                                <img src={item.logo} className='logoImg' alt="" />
                            </div>
                              <div className="listName">
                                    {item.name}
                              </div> 
                          </div>
                      })
                  }
              </div>
          </div>
          <Footer/>
    </div>
  )
}
