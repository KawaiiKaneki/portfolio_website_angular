
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import { Suspense } from 'react'
import {Loader} from '@react-three/drei'
import Projects from './components/Projects/project'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={null}>
          <Hero/>
        </Suspense>
        <About/>
        <Loader/>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
