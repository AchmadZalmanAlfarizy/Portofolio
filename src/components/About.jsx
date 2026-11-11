import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ targetNumber, suffix = '+' }) {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let startTime = null;
        const duration = 1200;
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeOut = 1 - (1 - progress) * (1 - progress);
          setCount(Math.floor(easeOut * targetNumber));
          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            setCount(targetNumber);
          }
        };
        requestAnimationFrame(animateCount);
      }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t.about.title}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.about.titleHighlight}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {t.about.p1}
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* Highlights Grid with Subtle Micro-Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-3 group cursor-default select-none"
                >
                  <CheckCircle2 className="text-cyan-400 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm sm:text-base leading-snug group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Core Capabilities Box */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600/10 via-slate-900/60 to-cyan-600/10 border border-blue-600/20 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 card-hover shadow-lg transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
                {t.about.coreSkillsTitle}
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                {t.about.coreSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 hover:border-blue-500/50 rounded-2xl p-6 text-center card-hover shadow-md cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 font-mono">
                  <AnimatedCounter targetNumber={8} suffix="+" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">{t.about.stats.projectsLabel}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 hover:border-cyan-500/50 rounded-2xl p-6 text-center card-hover shadow-md cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2 font-mono">
                  <AnimatedCounter targetNumber={3} suffix="+" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">{t.about.stats.yearsLabel}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
