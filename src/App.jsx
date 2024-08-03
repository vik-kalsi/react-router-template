import {createBrowserRouter, createRoutesFromElements, NavLink, Outlet, Route, RouterProvider } from "react-router-dom"

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/react-router-template/" element={<LayoutComponent />}>
      <Route index element={<Home />}/>
      <Route path="aboutus" element={<AboutUs />}/>
      <Route path="contact" element={<Contact />}/>
    </Route>
  )
); 


function LayoutComponent() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/react-router-template/">Home</NavLink>
          <NavLink to="aboutus">About Us</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
