import Fireworks from './components/Fireworks'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FamilySection from './components/FamilySection'
import Features from './components/Features'
import Tips from './components/Tips'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: 1.6,
      color: '#4a5568'
    }}>
      <Fireworks />
      <Navigation />
      <Hero />
      <FamilySection />
      <Features />
      <Tips />
      <Connect />
      <Footer />
    </div>
  )
}

export default App
