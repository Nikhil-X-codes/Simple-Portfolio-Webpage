import { useState } from 'react'
import { Navbar, HeroSection, Projects, About, Links, Contact } from './Content';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <div className="App">
              <Navbar />
              <HeroSection />
              <Projects />
              <About />
              <Links />
              <Contact />
            </div>
    </>
  )
}

export default App
