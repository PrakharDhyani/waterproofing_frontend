import './App.css';

import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Certificates from './components/Certificates/Certificates'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ABoutCeo from './components/AboutCeo/ABoutCeo';
import ClientPage from './Pages/ClientPage/ClientPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'

 const router = createBrowserRouter([
  {
    path: "*",
    exact: true,
    element: <Home/>
  },
  {
    path: "/home",
    element: <>
    {<Home/>}
    </>,
    exact: true,
  },
  {
    path: "/about",
    element: <AboutUs/>,
    exact: true
  },
  {
    path: "/aboutCeo",
    element:<ABoutCeo/> ,
    exact: true
  },
  {
    path: "/certificates",
    element:<Certificates/> ,
    exact: true
  },
  {
    path: "/Clients",
    element:<ClientPage/> ,
    exact: true
  }
  ,
  {
    path: "/services",
    element:<ServicesPage/> ,
    exact: true
  },
  {
    path: "/products",
    element:<ProductsPage/> ,
    exact: true
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
  </div>
  );
}

export default App;
