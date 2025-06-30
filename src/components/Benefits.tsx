
import { motion } from 'framer-motion'
import { 
  Zap, 
  Users, 
  Clock, 
  Brain, 
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Zero Context Switching",
      description: "Stay in your flow state. Plan, document, and code without ever leaving your development environment.",
      stats: "95% less context switching",
      color: "from-primary-500 to-accent-500",
      features: ["Inline planning", "IDE integration", "Seamless workflow"]
    },
    {
      icon: Clock,
      title: "10x Faster Planning",
      description: "Transform hours of planning meetings into minutes of intelligent conversation.",
      stats: "90% time reduction", 
      color: "from-success-500 to-primary-500",
      features: ["Instant PRDs", "Auto-documentation", "Rapid iteration"]
    },
    {
      icon: Brain,
      title: "Intelligent Guidance", 
      description: "AI-powered questioning system ensures you never miss critical requirements.",
      stats: "100% requirement coverage",
      color: "from-accent-500 to-warning-500", 
      features: ["Smart questions", "Gap detection", "Best practices"]
    },
    {
      icon: Users,
      title: "Perfect for Teams",
      description: "Whether you're a solo developer or part of a large team, VibeCoder adapts to your workflow.",
      stats: "Used by 1000+ teams",
      color: "from-warning-500 to-primary-500",
      features: ["Scalable collaboration", "Shared understanding", "Clear communication"]
    }
  ]

  const comparisonData = [
    {
      traditional: "Switch between multiple tools",
      vibecoder: "Everything in your IDE",
      improvement: "95% less tool switching"
    },
    {
      traditional: "Hours of planning meetings", 
      vibecoder: "Minutes of conversation",
      improvement: "90% time savings"
    },
    {
      traditional: "Manual documentation",
      vibecoder: "Auto-generated PRDs", 
      improvement: "100% documentation accuracy"
    },
    {
      traditional: "Requirements often missed",
      vibecoder: "AI ensures completeness",
      improvement: "Zero missed requirements"
    }
  ]

  console.log('Benefits component rendered')

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-darkula-700 to-darkula-700">
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
            <TrendingUp className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">
              Measurable Impact
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-darkula-50">Why Developers</span>
            <br />
            <span className="gradient-text">Love VibeCoder</span>
          </h2>
          
          <p className="text-xl text-darkula-200 max-w-3xl mx-auto">
            Join thousands of developers who've transformed their workflow with inline planning. 
            Experience the benefits that matter most to modern development teams.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-xl p-8 h-full hover:bg-white/10 interactive group-hover:shadow-2xl">
                {/* Icon and stats */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${benefit.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      {benefit.stats}
                    </div>
                    <div className="text-xs text-vibe-400">improvement</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-darkula-50 mb-4 group-hover:text-darkula-50 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-darkula-200 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-darkula-200"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-darkula-50 mb-4">
              Traditional Planning vs <span className="gradient-text">VibeCoder</span>
            </h3>
            <p className="text-lg text-darkula-200">
              See the dramatic difference in development workflow efficiency
            </p>
          </div>

          <div className="bg-darkula-600 rounded-xl border border-darkula-300 overflow-hidden shadow-xl">
            {/* Header Row */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-0 border-b border-darkula-300">
              <div className="bg-darkula-700 p-4 text-center">
                <h4 className="font-semibold text-darkula-200 text-sm">Traditional Way</h4>
              </div>
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 text-center">
                <h4 className="font-semibold text-darkula-900 text-sm">VibeCoder Way</h4>
              </div>
              <div className="bg-darkula-700 p-4 text-center">
                <h4 className="font-semibold text-darkula-200 text-sm">Improvement</h4>
              </div>
              <div className="bg-darkula-700 p-4 text-center md:hidden">
                <h4 className="font-semibold text-darkula-200 text-sm">Impact</h4>
              </div>
            </div>

            {/* Content Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 md:grid-cols-4 gap-0 border-b border-darkula-400 last:border-b-0 hover:bg-darkula-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Traditional Way */}
                <div className="p-4 bg-darkula-600">
                  <p className="text-darkula-200 text-sm leading-relaxed">{row.traditional}</p>
                </div>
                
                {/* VibeCoder Way */}
                <div className="p-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-l border-r border-darkula-300">
                  <p className="text-darkula-50 font-medium text-sm leading-relaxed">{row.vibecoder}</p>
                </div>
                
                {/* Improvement */}
                <div className="p-4 bg-darkula-600">
                  <p className="text-success-500 font-bold text-sm">{row.improvement}</p>
                </div>
                
                {/* Mobile Impact Arrow */}
                <div className="p-4 bg-darkula-600 flex items-center justify-center md:hidden">
                  <ArrowRight className="w-4 h-4 text-success-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-red-400" />
              <span className="text-primary-300 font-medium">Loved by developers</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Projects Planned", value: "50K+" },
                { label: "Time Saved", value: "100K hrs" },
                { label: "Satisfaction", value: "98%" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-vibe-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-vibe-100 mb-3">
              Ready to Join the Revolution?
            </h3>
            <p className="text-vibe-300 mb-6">
              Experience the future of software planning today.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#get-started')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg hover:from-primary-700 hover:to-accent-700 interactive pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Planning Inline
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits