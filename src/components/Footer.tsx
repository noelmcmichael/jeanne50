
import { motion } from 'framer-motion'
import { 
  Code2, 
  Github, 
  ExternalLink, 
  Heart, 
  Zap,
  Mail,
  Twitter,
  BookOpen
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Get Started', href: '#get-started' }
    ],
    resources: [
      { name: 'Documentation', href: 'https://github.com/crazyrabbitLTC/mcp-vibecoder#readme', external: true },
      { name: 'GitHub', href: 'https://github.com/crazyrabbitLTC/mcp-vibecoder', external: true },
      { name: 'MCP Protocol', href: 'https://modelcontextprotocol.io/', external: true },
      { name: 'Support', href: '#', external: false }
    ],
    community: [
      { name: 'Discord', href: '#', external: true },
      { name: 'Twitter', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Newsletter', href: '#', external: false }
    ]
  }

  const handleLinkClick = (href: string, external: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer')
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  console.log('Footer component rendered')

  return (
    <footer className="bg-gradient-to-b from-darkula-700 to-darkula-700 border-t border-darkula-400">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                VibeCoder
              </span>
            </motion.div>
            
            <p className="text-darkula-200 mb-6 leading-relaxed">
              Revolutionary MCP server that brings intelligent software planning 
              directly into your coding environment. Plan where you code.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/crazyrabbitLTC/mcp-vibecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-darkula-200 hover:text-darkula-50 hover:bg-darkula-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-lg text-vibe-400 hover:text-white hover:bg-vibe-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-lg text-vibe-400 hover:text-white hover:bg-vibe-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-vibe-100 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleLinkClick(link.href, false)}
                    className="text-vibe-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-vibe-100 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="flex items-center space-x-1 text-vibe-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold text-vibe-100 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {links.community.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="flex items-center space-x-1 text-vibe-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-vibe-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-vibe-400">
              <span>© {currentYear} VibeCoder Stack Planner</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400" />
                </motion.div>
                <span>for developers</span>
              </span>
            </div>

            {/* Credits */}
            <div className="flex items-center space-x-4 text-sm text-vibe-400">
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-primary-400" />
                <span>Powered by MCP</span>
              </motion.div>
              
              <span>•</span>
              
              <motion.a
                href="https://memex.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-vibe-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span>Built with Memex</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-vibe-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 text-vibe-400">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">
              Experience the future of software planning - plan directly in your code
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer