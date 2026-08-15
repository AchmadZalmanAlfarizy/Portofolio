import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-900 border-t border-slate-800 py-12"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Achmad Zalman Alfarizy
            </h3>
            <p className="text-gray-400 text-sm">Web Developer & Informatics Student</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
              <span>© {currentYear}</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-red-500" />
              </motion.span>
              <span>using React & Tailwind</span>
            </div>
            <p className="text-gray-500 text-sm">All rights reserved</p>
          </div>

          {/* Scroll to Top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white hover:shadow-xl transition-shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
