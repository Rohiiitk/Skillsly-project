import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPg from '../Pages/LandingPg'
import Authenticate from '../Pages/Authenticate'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const routes = (
    < Router >
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
    </Router >

  );
  return (

    <div className="">
      {routes}
    </div>

  )
}

export default App
