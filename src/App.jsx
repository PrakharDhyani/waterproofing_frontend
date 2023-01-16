import './App.css';
import Homepage from './components/Homepgae/Homepage';
import Navbar from './components/Navbar/Navbar';
import ServicesCard from './components/ServicesCard/ServicesCard';
import ServicesSection from './components/ServicesSection/ServicesSection';


function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <ServicesCard/>
      <ServicesSection/>
    </>
  );
}

export default App;
