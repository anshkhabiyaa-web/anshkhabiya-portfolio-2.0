import { useEffect, useState } from 'react'
import { CardStackDemo } from './components/demo/card-stack-demo'
import { PulseBeamsFirstDemo } from './components/demo/pulse-beams-demo'
import { AnimatedLetterText } from './components/ui/potfolio-text'
import { LampContainer } from './components/ui/lamp'
import './App.css'

function App() {
  const [mode] = useState<'gallery' | 'contact' | 'lamp'>(() => {
    const params = new URLSearchParams(window.location.search)
    const m = params.get('mode')
    if (m === 'contact') return 'contact';
    if (m === 'lamp') return 'lamp';
    return 'gallery';
  });

  useEffect(() => {
    // keeping listener if needed, but not strictly required if query params don't change
  }, [])

  if (mode === 'contact') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <PulseBeamsFirstDemo>
          <AnimatedLetterText 
            text="Let's Connect." 
            letterToReplace="o" 
            className="text-6xl md:text-8xl text-[#F7F5F0]" 
          />
        </PulseBeamsFirstDemo>
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

  return <CardStackDemo />
}

export default App
