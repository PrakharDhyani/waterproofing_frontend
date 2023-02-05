import React from 'react'
import Homepage from '../../components/Homepage/Homepage'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Features from '../../components/Features/Features'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
      <div>
          <Homepage />
          <ServicesCard />
          <ServicesSection />
          <Features />
          <Clients />
          <Footer/>
    </div>
  )
}
