import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/products', label: t('nav.products') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3a86ff] to-[#ff006e] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <i className="fas fa-code text-white text-lg"></i>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-[#3a86ff] via-[#8338ec] to-[#ff006e] bg-clip-text text-transparent">
              {t('nav.brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#3a86ff] dark:hover:text-[#3a86ff] transition-all duration-300 relative group ${
                    isActive ? 'text-[#3a86ff] dark:text-[#3a86ff]' : ''
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#3a86ff] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            
            <LanguageSwitcher />
            
            <button
              onClick={toggleTheme}
              className="ml-2 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#3a86ff]/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-600'} text-lg`}></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-[#3a86ff]/10 transition-all duration-300"
            aria-label="Menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-bg border-t dark:border-gray-800 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-[#3a86ff]/10 hover:text-[#3a86ff] transition-all duration-300 ${
                      isActive ? 'text-[#3a86ff] bg-[#3a86ff]/10' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-4 pt-2 pb-1">
                <LanguageSwitcher />
              </div>
              <div className="px-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#3a86ff]/10 transition-all duration-300"
                >
                  <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}