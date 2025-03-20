import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div id="home">
          <Body />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
