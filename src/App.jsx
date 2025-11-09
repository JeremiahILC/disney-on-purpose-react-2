import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fireworks from './components/Fireworks'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import TestimoniesPage from './components/TestimoniesPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div style={{
        fontFamily: 'Georgia, serif',
        lineHeight: 1.6,
        color: '#4a5568',
        opacity: 0,
        animation: 'fadeIn 2.5s ease-in forwards'
      }}>
        <style>
          {`
            @keyframes fadeIn {
              to {
                opacity: 1;
              }
            }
          `}
        </style>
        <Fireworks />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonies" element={<TestimoniesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
