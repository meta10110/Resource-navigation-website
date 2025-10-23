import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { getSiteInfo } from '../utils/loadContent';

function Header({ isDarkMode, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const siteInfo = getSiteInfo();
  const categories = [
    { name: '首页', href: '#', icon: '🏠' },
    { name: '电子书', href: '#ebooks', icon: '📚', color: 'emerald' },
    { name: '漫画', href: '#comics', icon: '🎭', color: 'violet' },
    { name: '影视', href: '#movies', icon: '🎬', color: 'rose' },
    { name: '游戏', href: '#games', icon: '🎮', color: 'cyan' },
    { name: '学习', href: '#study', icon: '📖', color: 'amber' },
    { name: '导航', href: '#navigation', icon: '🧭', color: 'indigo' }
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getColorClass = (color) => {
    const colors = {
      emerald: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400',
      violet: 'hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400',
      rose: 'hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400',
      cyan: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400',
      amber: 'hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400',
      indigo: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400'
    };
    return colors[color] || 'hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400';
  };

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors">
      <div className="container mx-auto py-3 px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <svg className="relative w-10 h-10 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent hidden md:inline">
              {siteInfo.title}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200 ${getColorClass(cat.color)}`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-gray-200 dark:border-gray-700 pt-3">
            <ul className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    onClick={handleMenuClick}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-200 ${getColorClass(cat.color)}`}
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;