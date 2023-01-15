import './App.css';
import Homepage from './components/Homepgae/Homepage';
import Navbar from './components/Navbar/Navbar';
import ServicesCard from './components/Services/ServicesCard';


function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <ServicesCard/>
    </>
  );
}

export default App;
