
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToGetStarted = () => {
    const element = document.querySelector('#get-started')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFeatures = () => {
    const element = document.querySelector('#features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log('Hero component rendered')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              Revolutionary MCP Server
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Plan Directly</span>
            <br />
            <span className="text-vibe-100">In Your Code</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-vibe-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stop switching between planning tools and your IDE. VibeCoder Stack Planner brings 
            <span className="text-primary-400 font-semibold"> intelligent software planning </span>
            directly into your coding environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToGetStarted}
              className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg hover:from-primary-700 hover:to-accent-700 interactive shadow-lg pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={scrollToFeatures}
              className="flex items-center space-x-2 px-8 py-4 rounded-lg border border-primary-500/50 text-primary-300 font-semibold text-lg hover:bg-primary-500/10 interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="w-5 h-5" />
              <span>Explore Features</span>
            </motion.button>
          </motion.div>

          {/* Key benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              {
                icon: "🚀",
                title: "Zero Context Switching",
                description: "Plan without leaving your IDE"
              },
              {
                icon: "⚡",
                title: "Instant PRD Generation",
                description: "From conversation to documentation"
              },
              {
                icon: "🎯",
                title: "Built for VibeCoders",
                description: "Intuitive for all skill levels"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass rounded-lg p-6 text-center hover:bg-white/10 interactive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-vibe-100 mb-2">{benefit.title}</h3>
                <p className="text-sm text-vibe-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero