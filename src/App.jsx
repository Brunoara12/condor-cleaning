import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './layouts/Root'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={<Root />}
        >
          <Route index element={<HomePage />} />
          <Route path='/about-us/' element={<div>ABOUT US PAGE</div>} />
          <Route path='/services/' element={<ServicesPage />} />
          <Route path='/careers/' element={<div>CAREERS PAGE</div>} />
          <Route path='/faq/' element={<div>FAQ PAGE</div>} />
          <Route path='/contact-us/' element={<div>CONTACT US PAGE</div>} />
        </Route>

      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
