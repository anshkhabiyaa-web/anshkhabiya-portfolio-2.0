import { useEffect, useState } from 'react'
import { CardStackDemo } from './components/demo/card-stack-demo'
import { AnimatedLetterText } from './components/ui/potfolio-text'
import { LampContainer } from './components/ui/lamp'
import { motion } from 'framer-motion'
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
        <AnimatedLetterText 
          text="Let's Connect." 
          letterToReplace="o" 
          className="text-6xl md:text-8xl text-[#0F0F0D]" 
        />
      </div>
    )
  }

  if (mode === 'lamp') {
    return (
      <LampContainer className="bg-transparent">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
    )
  }

  return <CardStackDemo />
}

export default App
