import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  MessageSquare, 
  FileText, 
  Code, 
  Terminal,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const CodeExample = () => {
  const [activeTab, setActiveTab] = useState(0)

  const examples = [
    {
      id: 'conversation',
      title: 'Planning Conversation',
      icon: MessageSquare,
      description: 'Natural conversation about project requirements',
      code: `User: I need to build a user authentication system for my web app

VibeCoder: I'll help you plan a comprehensive authentication system. Let me ask a few questions to understand your requirements better:

1. What type of authentication do you need?
   - Email/password login
   - Social login (Google, GitHub, etc.)
   - Multi-factor authentication

2. What's your target user base size?
   - Small team (< 100 users)
   - Medium business (100-10k users)  
   - Large scale (10k+ users)

3. Do you have any specific security requirements?
   - GDPR compliance
   - Industry-specific regulations
   - Data residency requirements

User: Email/password for now, maybe 500 users, and basic security

VibeCoder: Perfect! I'll design a secure authentication system for your medium-scale application. Let me generate a comprehensive plan...`,
      highlight: ['authentication system', 'requirements', 'security']
    },
    {
      id: 'prd',
      title: 'Generated PRD',
      icon: FileText,
      description: 'Automatically generated Product Requirements Document',
      code: `# Product Requirements Document: User Authentication System

## Executive Summary
Develop a secure email/password authentication system for a web application supporting up to 500 users with standard security practices.

## User Stories
- As a user, I want to register with email/password
- As a user, I want to login securely
- As a user, I want to reset my password
- As an admin, I want to manage user accounts

## Technical Requirements
### Authentication Flow
- User registration with email verification
- Secure password hashing (bcrypt)
- JWT token-based sessions
- Password reset functionality

### Security Measures
- Rate limiting on auth endpoints
- Input validation and sanitization
- HTTPS enforcement
- Secure session management

## Acceptance Criteria
✓ Users can register with valid email/password
✓ Email verification required for activation
✓ Secure login with JWT tokens
✓ Password reset via email
✓ Session management and logout`,
      highlight: ['Technical Requirements', 'Security Measures', 'Acceptance Criteria']
    },
    {
      id: 'implementation',
      title: 'Implementation Plan',
      icon: Code,
      description: 'Detailed implementation roadmap with tasks',
      code: `# Implementation Plan: User Authentication System

## Phase 1: Core Authentication (Complexity: 5/10)
### Tasks:
1. Set up user model and database schema
   - Duration: 2 hours
   - Dependencies: Database setup
   
2. Implement user registration endpoint
   - Duration: 3 hours
   - Dependencies: User model
   
3. Add password hashing with bcrypt
   - Duration: 1 hour
   - Dependencies: Registration endpoint

## Phase 2: Security & Validation (Complexity: 6/10)
### Tasks:
1. Implement JWT token generation
   - Duration: 2 hours
   - Dependencies: Login endpoint
   
2. Add input validation middleware
   - Duration: 2 hours
   - Dependencies: Core endpoints
   
3. Implement rate limiting
   - Duration: 1.5 hours
   - Dependencies: All endpoints

## Phase 3: Advanced Features (Complexity: 7/10)
### Tasks:
1. Email verification system
   - Duration: 4 hours
   - Dependencies: Email service setup
   
2. Password reset functionality
   - Duration: 3 hours
   - Dependencies: Email system

## Estimated Timeline: 18.5 hours over 2 weeks`,
      highlight: ['Phase 1', 'Phase 2', 'Phase 3', 'Complexity', 'Duration']
    }
  ]

  const tabs = [
    { id: 0, name: 'Conversation', icon: MessageSquare },
    { id: 1, name: 'PRD', icon: FileText },
    { id: 2, name: 'Implementation', icon: Code }
  ]

  console.log('CodeExample component rendered, activeTab:', activeTab)

  return (
    <section className="section-padding bg-gradient-to-b from-vibe-900 to-vibe-800">
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
            <Terminal className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              See It In Action
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-vibe-100">From Idea to</span>
            <br />
            <span className="gradient-text">Implementation</span>
          </h2>
          
          <p className="text-xl text-vibe-300 max-w-3xl mx-auto">
            Watch how a simple conversation transforms into comprehensive documentation 
            and actionable implementation plans.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-lg p-2 flex space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                      : 'text-vibe-300 hover:text-vibe-100 hover:bg-vibe-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-xl p-6 sticky top-24">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
                    {(() => {
                      const IconComponent = examples[activeTab].icon
                      return <IconComponent className="w-5 h-5 text-white" />
                    })()}
                  </div>
                  <h3 className="text-xl font-semibold text-vibe-100">
                    {examples[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-vibe-300 mb-6 leading-relaxed">
                  {examples[activeTab].description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium text-vibe-200">Key Features:</h4>
                  {examples[activeTab].highlight.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-vibe-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-vibe-700">
                  <motion.button
                    onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                    disabled={activeTab === 0}
                    className="flex items-center space-x-1 text-sm text-vibe-400 hover:text-vibe-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ x: -3 }}
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Previous</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
                    disabled={activeTab === tabs.length - 1}
                    className="flex items-center space-x-1 text-sm text-vibe-400 hover:text-vibe-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ x: 3 }}
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Code Display */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="code-block h-full min-h-[600px] relative">
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-vibe-600">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-vibe-300">
                      VibeCoder Stack Planner
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Code content with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <pre className="text-sm text-vibe-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {examples[activeTab].code}
                    </pre>
                  </motion.div>
                </AnimatePresence>

                {/* Animated cursor */}
                <motion.div
                  className="inline-block w-2 h-5 bg-primary-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Play className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-medium">Try it yourself</span>
            </div>
            <h3 className="text-2xl font-bold text-vibe-100 mb-3">
              Experience Inline Planning
            </h3>
            <p className="text-vibe-300 mb-6">
              See how natural conversations become comprehensive project plans.
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
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodeExample