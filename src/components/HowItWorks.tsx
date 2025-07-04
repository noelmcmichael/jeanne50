
import { motion } from 'framer-motion'
import { 
  Download, 
  MessageCircle, 
  FileText, 
  Code, 
  ArrowRight, 
  Terminal,
  Sparkles,
  CheckCircle
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install MCP Server",
      description: "Add VibePlan to your development environment with a single command.",
      code: "npm install -g @vibeplan/stack-planner",
      details: ["One-line installation", "Auto-configuration", "Works with all major IDEs"]
    },
    {
      number: "02", 
      icon: MessageCircle,
      title: "Start Planning Conversation",
      description: "Describe your feature or project in natural language, right in your coding environment.",
      code: "// Hey VibePlan, I need to build a user authentication system...",
      details: ["Natural language input", "Context-aware responses", "Interactive clarification"]
    },
    {
      number: "03",
      icon: FileText,
      title: "Generate Documentation",
      description: "Automatically create PRDs, implementation plans, and technical specifications.",
      code: "✓ PRD generated\n✓ Implementation plan ready\n✓ Tasks prioritized",
      details: ["Professional documentation", "Structured outputs", "Ready to execute"]
    },
    {
      number: "04",
      icon: Code,
      title: "Code with Confidence",
      description: "Execute your plan with clear guidance, task breakdowns, and progress tracking.",
      code: "// Implementation step 1: Set up authentication routes\n// Next: Configure JWT middleware",
      details: ["Step-by-step guidance", "Progress tracking", "Clear next actions"]
    }
  ]

  console.log('HowItWorks component rendered')

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-darkula-700 dark:to-darkula-700">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              Simple Process
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-darkula-50">How It</span>
            <br />
            <span className="gradient-text">Works</span>
          </h2>
          
          <p className="text-xl text-gray-700 dark:text-darkula-200 max-w-3xl mx-auto">
            From installation to execution in four simple steps. 
            Transform your development workflow in minutes, not hours.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Content - Left side for odd, right side for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <step.icon className="w-6 h-6 text-primary-500" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-darkula-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-darkula-200 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        className="flex items-center space-x-2 text-gray-700 dark:text-darkula-200"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (detailIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex justify-center lg:hidden"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary-500 rotate-90" />
                  </motion.div>
                )}
              </div>

              {/* Code Example - Right side for odd, left side for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  className="code-block relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Terminal header */}
                  <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-300 dark:border-vibe-600">
                    <Terminal className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-gray-700 dark:text-darkula-200">
                      {index === 0 ? 'Terminal' : 
                       index === 1 ? 'IDE Planning Session' :
                       index === 2 ? 'Generated Output' : 'Implementation Guide'}
                    </span>
                  </div>
                  
                  {/* Code content */}
                  <pre className="text-sm text-gray-800 dark:text-darkula-100 leading-relaxed overflow-x-auto">
                    {step.code}
                  </pre>

                  {/* Animated cursor */}
                  <motion.div
                    className="inline-block w-2 h-5 bg-primary-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-darkula-50 mb-3">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-gray-700 dark:text-darkula-200 mb-6">
              Join the inline planning revolution and never switch contexts again.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#get-started')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:from-primary-600 hover:to-accent-600 interactive pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks