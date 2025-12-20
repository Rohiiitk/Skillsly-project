import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPg from '../Pages/LandingPg'
import Authenticate from '../Pages/Authenticate'
import SignUpInfo from '../Pages/SignUpInfo'
import Dashboard from '../Pages/Dashboard' 
import Dashboard2 from '../Pages/Dashboard2'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/Sign-up-info" element={<SignUpInfo />} />
      </Routes>
    </Router>
  );
}

export default App;