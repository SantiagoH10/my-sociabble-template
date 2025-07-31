'use client'

import { MySociabble } from '@/app-components/MySociabble'
import { Footer } from '@/app-components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { LipsumGenerator } from '@/app-components/LipsumGenerator'

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <MySociabble />
        <LipsumGenerator />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
