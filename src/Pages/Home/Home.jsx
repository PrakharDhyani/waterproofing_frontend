import React from 'react'
import Homepage from '../../components/Homepage/Homepage'

import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Features from '../../components/Features/Features'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import ServicesCarrousel from '../../components/ServicesCarrousel/ServicesCarrousel'

export default function Home() {
  return (
    <div>
          <Navbar1 page = "home"/>
          <Homepage />
          <ServicesCarrousel />
          <ServicesSection />
          <Features />
          <Clients />
          <Footer/>
    </div>
  )
}
