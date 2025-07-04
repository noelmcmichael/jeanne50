
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CodeExample from './components/CodeExample'
import Benefits from './components/Benefits'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {
  console.log('App component rendered')
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-darkula-700 text-gray-900 dark:text-darkula-100 transition-colors duration-300">
        {/* Background pattern */}
        <div className="fixed inset-0 hero-pattern opacity-30 pointer-events-none" />
        
        <Navigation />
        
        <main className="relative">
          <Hero />
          <Features />
          <HowItWorks />
          <CodeExample />
          <Benefits />
          <GetStarted />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App