
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  FileText, 
  GitBranch, 
  Zap, 
  Target, 
  Code2, 
  Users, 
  Clock,
  CheckCircle 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Interactive Planning Sessions",
      description: "Engage in natural conversations about your project requirements directly in your IDE.",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Natural language planning", "Context-aware questions", "Real-time clarification"]
    },
    {
      icon: FileText,
      title: "Automatic PRD Generation",
      description: "Transform planning conversations into comprehensive Product Requirements Documents instantly.",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["Professional documentation", "Structured format", "Ready to share"]
    },
    {
      icon: GitBranch,
      title: "Implementation Roadmaps",
      description: "Generate detailed implementation plans with task breakdowns and complexity scoring.",
      gradient: "from-green-500 to-emerald-500",
      benefits: ["Step-by-step guidance", "Complexity assessment", "Time estimation"]
    },
    {
      icon: Code2,
      title: "Code-First Integration",
      description: "Works seamlessly with your existing development workflow and favorite coding tools.",
      gradient: "from-orange-500 to-red-500",
      benefits: ["IDE integration", "MCP protocol", "Zero setup friction"]
    },
    {
      icon: Target,
      title: "Smart Feature Clarification",
      description: "Intelligent questioning system that helps you define requirements thoroughly.",
      gradient: "from-indigo-500 to-purple-500",
      benefits: ["Guided discovery", "Missing requirement detection", "Stakeholder alignment"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get started in seconds with our streamlined MCP server installation process.",
      gradient: "from-yellow-500 to-orange-500",
      benefits: ["One-command install", "Auto-configuration", "Instant activation"]
    }
  ]

  console.log('Features component rendered')

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-vibe-900 to-vibe-800">
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
            <Users className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              Built for VibeCoders
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-vibe-100">For Modern Development</span>
          </h2>
          
          <p className="text-xl text-vibe-300 max-w-3xl mx-auto">
            Everything you need to plan, document, and execute your software projects 
            without ever leaving your development environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-xl p-6 h-full hover:bg-white/10 interactive group-hover:shadow-2xl">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-vibe-100 mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-vibe-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefit}
                      className="flex items-center space-x-2 text-sm text-vibe-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (benefitIndex * 0.05) + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{ scale: 1.02 }}
                />
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
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-medium">Ready in minutes</span>
            </div>
            <h3 className="text-2xl font-bold text-vibe-100 mb-3">
              Experience the Future of Planning
            </h3>
            <p className="text-vibe-300 mb-6">
              Join thousands of developers who've transformed their workflow with inline planning.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#get-started')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:from-primary-700 hover:to-accent-700 interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Planning Inline Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features