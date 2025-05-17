import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimeLandingPage from './AnimeLandingPage'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeLandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App