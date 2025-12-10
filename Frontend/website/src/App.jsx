import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPg from '../Pages/LandingPg'
import Authenticate from '../Pages/Authenticate'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from '../Pages/Dashboard'

function App() {
  const routes = (
    < Router >
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
