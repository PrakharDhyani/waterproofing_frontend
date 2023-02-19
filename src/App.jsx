import './App.css';

import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
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
    path: "/aboutCeo",
    element: <AboutUs/>,
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
