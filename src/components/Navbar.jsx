import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.sertifikat, href: '#sertifikat' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm z-50 border-b border-slate-800"
    >
      <div className="section-container py-3.5">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          >
            AZ
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * index }}
                className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Language Toggle Button Desktop */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold tracking-wider transition-all hover:border-cyan-400 cursor-pointer shadow-sm ml-2"
              title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              aria-label="Toggle Language"
            >
              <Globe size={14} className="text-cyan-400" />
              <span className={language === 'id' ? 'text-cyan-400 font-bold' : 'text-gray-400'}>ID</span>
              <span className="text-gray-600">|</span>
              <span className={language === 'en' ? 'text-cyan-400 font-bold' : 'text-gray-400'}>EN</span>
            </motion.button>
          </div>

          {/* Tablet & Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Language Toggle Button Mobile Header */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-500/30 bg-slate-900 text-xs font-semibold transition-all cursor-pointer"
              aria-label="Toggle Language"
            >
              <Globe size={13} className="text-cyan-400" />
              <span className={language === 'id' ? 'text-cyan-400 font-bold' : 'text-gray-400'}>ID</span>
              <span className="text-gray-600">|</span>
              <span className={language === 'en' ? 'text-cyan-400 font-bold' : 'text-gray-400'}>EN</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white active:bg-slate-800 rounded-lg cursor-pointer transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 pt-3 border-t border-slate-800 space-y-1"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.02 * index }}
                className="block py-2.5 px-3 text-gray-300 hover:text-cyan-400 active:bg-slate-800/80 rounded-lg font-medium transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
