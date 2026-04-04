import { useEffect, useState } from 'react'
import { CardStackDemo } from './components/demo/card-stack-demo'
import { PortfolioNavbar } from './components/demo/limelight-nav-demo'
import { AnimatedLetterText } from './components/ui/potfolio-text'
import { LampContainer } from './components/ui/lamp'
import { ParallaxComponent } from './components/ui/parallax-scrolling'
import './App.css'

function App() {
  const [mode] = useState<'gallery' | 'contact' | 'lamp' | 'nav' | 'parallax'>(() => {
    const params = new URLSearchParams(window.location.search)
    const m = params.get('mode')
    if (m === 'contact') return 'contact';
    if (m === 'lamp') return 'lamp';
    if (m === 'nav') return 'nav';
    if (m === 'parallax') return 'parallax';
    return 'gallery';
  });

  useEffect(() => {
    // keeping listener if needed, but not strictly required if query params don't change
  }, [])

  if (mode === 'nav') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <PortfolioNavbar />
      </div>
    )
  }

  if (mode === 'contact') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <AnimatedLetterText 
          text="Let's Connect." 
          letterToReplace="o" 
          className="text-6xl md:text-8xl text-[#F7F5F0]" 
        />
      </div>
    )
  }

  if (mode === 'lamp') {
    return (
      <LampContainer className="bg-transparent">
        <div className="w-full h-full" />
      </LampContainer>
    )
  }

  if (mode === 'parallax') {
    return (
      <div className="w-full h-full bg-transparent">
        <ParallaxComponent />
      </div>
    )
  }

  return <CardStackDemo />
}

export default App
