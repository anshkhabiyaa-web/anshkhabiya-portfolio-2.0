import { useEffect, useState } from 'react'
import { CardStackDemo } from './components/demo/card-stack-demo'
import { AnimatedLetterText } from './components/ui/potfolio-text'
import './App.css'

function App() {
  const [mode, setMode] = useState<'gallery' | 'contact'>('gallery')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const m = params.get('mode')
    if (m === 'contact') {
      setMode('contact')
    } else {
      setMode('gallery')
    }
  }, [])

  if (mode === 'contact') {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-transparent">
        <AnimatedLetterText 
          text="Let's Connect." 
          letterToReplace="o" 
          className="text-4xl md:text-6xl text-[#0F0F0D] font-serif" 
        />
      </div>
    )
  }

  return <CardStackDemo />
}

export default App
