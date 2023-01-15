import './App.css';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import ServicesCard from './components/ServicesCard/ServicesCard';


function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <ServicesCard />
      <Footer/>
    </>
  );
}

export default App;
