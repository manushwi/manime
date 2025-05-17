import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimeLandingPage from './AnimeLandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeLandingPage />} />
        
      </Routes>
    </Router>
  )
}

export default App