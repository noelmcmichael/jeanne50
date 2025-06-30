import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Terminal, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Github,
  Code2,
  Zap,
  Play,
  BookOpen,
  Users
} from 'lucide-react'

const GetStarted = () => {
  const [copied, setCopied] = useState(false)

  const installCommand = "npm install -g @vibecoder/stack-planner"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      console.log('Command copied to clipboard')
    } catch (err) {
      console.error('Failed to copy command:', err)
    }
  }

  const quickStartSteps = [
    {
      step: "1",
      title: "Install the MCP Server",
      description: "One command to get started",
      code: installCommand,
      icon: Download
    },
    {
      step: "2", 
      title: "Configure Your IDE",
      description: "Add to your MCP configuration",
      code: `{
  "servers": {
    "vibecoder-stack-planner": {
      "command": "vibecoder-stack-planner",
      "args": []
    }
  }
}`,
      icon: Code2
    },
    {
      step: "3",
      title: "Start Planning",
      description: "Begin your first planning session",
      code: "// Ask VibeCoder: Help me plan a user dashboard feature",
      icon: Play
    }
  ]

  const resources = [
    {
      title: "Documentation",
      description: "Complete setup guide and API reference",
      icon: BookOpen,
      link: "https://github.com/crazyrabbitLTC/mcp-vibecoder#readme",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GitHub Repository", 
      description: "Source code, issues, and contributions",
      icon: Github,
      link: "https://github.com/crazyrabbitLTC/mcp-vibecoder",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Community",
      description: "Join our Discord for support and discussion",
      icon: Users,
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ]

  console.log('GetStarted component rendered')

  return (
    <section id="get-started" className="section-padding bg-gradient-to-b from-darkula-700 to-darkula-700">
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
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              Quick Setup
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get Started</span>
            <br />
            <span className="text-darkula-50">In Minutes</span>
          </h2>
          
          <p className="text-xl text-darkula-200 max-w-3xl mx-auto">
            Join thousands of developers who've transformed their workflow. 
            Setup is simple, the impact is immediate.
          </p>
        </motion.div>

        {/* Quick Start Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Step Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {step.step}
                    </motion.div>
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <step.icon className="w-6 h-6 text-primary-400" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-vibe-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-vibe-300">
                    {step.description}
                  </p>
                </div>

                {/* Code Block */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="code-block relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Terminal header */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-vibe-600">
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-vibe-300">Terminal</span>
                      </div>
                      
                      {index === 0 && (
                        <motion.button
                          onClick={handleCopy}
                          className="flex items-center space-x-1 text-xs text-vibe-400 hover:text-vibe-200 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                    
                    {/* Code content */}
                    <pre className="text-sm text-vibe-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {step.code}
                    </pre>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vibe-100 mb-4">
              Resources & Support
            </h3>
            <p className="text-lg text-vibe-300">
              Everything you need to get the most out of VibeCoder Stack Planner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="glass rounded-xl p-6 h-full hover:bg-white/10 interactive group-hover:shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-r ${resource.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <resource.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <ExternalLink className="w-4 h-4 text-vibe-400 group-hover:text-vibe-200 transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-vibe-100 mb-2 group-hover:text-white transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-vibe-300 group-hover:text-vibe-200 transition-colors">
                    {resource.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-xl p-12 max-w-2xl mx-auto">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-vibe-100 mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-lg text-vibe-300 mb-8">
              Join the inline planning revolution. Install VibeCoder Stack Planner 
              and experience the future of software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCopy}
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg hover:from-primary-700 hover:to-accent-700 interactive pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal className="w-5 h-5" />
                <span>{copied ? 'Copied!' : 'Copy Install Command'}</span>
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </motion.button>
              
              <motion.a
                href="https://github.com/crazyrabbitLTC/mcp-vibecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-lg border border-primary-500/50 text-primary-300 font-semibold text-lg hover:bg-primary-500/10 interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetStarted