import './App.css';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';

import ServicesCard from './components/ServicesCard/ServicesCard';
import ServicesSection from './components/ServicesSection/ServicesSection';



function App() {
  return (
    <>
      <Homepage/>
      <ServicesCard/>
      <ServicesSection />
      <Clients/>
      <Footer/>

    </>
  );
}

export default App;
