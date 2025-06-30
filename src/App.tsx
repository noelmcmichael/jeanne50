
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
    <div className="min-h-screen bg-darkula-700 text-darkula-100">
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
  )
}

export default App