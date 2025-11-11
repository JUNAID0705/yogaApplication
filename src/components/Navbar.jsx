import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { user } = useAuth()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Online Classes', path: '/online-classes' },
    { name: 'Pregnancy Yoga', path: '/pregnancy-yoga' },
    { name: 'Calendar', path: '/schedule' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center relative shadow-lg">
                <span className="text-white text-2xl font-serif">ॐ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">
                Astthitva
              </span>
              <span className="text-lg font-light text-orange-600 tracking-wide leading-none">
                अस्तित्व योग
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Sign In / Profile Button */}
            <Link
              to={user ? '/profile' : '/login'}
              className="ml-4 px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {user ? 'Profile' : 'Sign In'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={user ? '/profile' : '/login'}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-2 bg-primary-600 text-white text-center rounded-lg font-medium hover:bg-primary-700 transition-all"
            >
              {user ? 'Profile' : 'Sign In'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
