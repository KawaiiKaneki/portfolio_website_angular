import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import {Loader} from '@react-three/drei'
import Project from './components/Projects/project'
import ProjectMobile from './components/Projects/ProjectMobile'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <BrowserRouter>
      <Navbar />
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Loader/>
      <About />
      {isDesktop ? (
        <Suspense fallback={null}>
          <Project />
        </Suspense>
      ):(
          <ProjectMobile/>
      )}
      </BrowserRouter>
  )
}

export default App
