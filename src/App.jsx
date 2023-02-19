import './App.css';

import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Certificates from './components/Certificates/Certificates'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

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
    path: "/certificates",
    element: <Certificates/>,
    exact: true
  }
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
  </div>
  );
}

export default App;
