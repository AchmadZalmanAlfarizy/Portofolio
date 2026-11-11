import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div initial="hidden" animate="visible" className="flex-1">
            <motion.div
              custom={0}
              variants={textVariants}
              className="mb-6"
            >
              <span className="text-blue-400 font-semibold">{t.hero.welcome}</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              {t.hero.greeting}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Achmad Zalman Alfarizy
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              className="text-lg sm:text-xl text-gray-300 mb-6 font-medium"
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              custom={3}
              variants={textVariants}
              className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-8"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              custom={4}
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20"
              >
                {t.hero.viewProjects}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/CV_ACHMAD_ZALMAN_ALFARIZY.pdf"
                download="CV_ACHMAD_ZALMAN_ALFARIZY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10"
              >
                <Download size={20} />
                {t.hero.downloadCv}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Gentle Interactive Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="flex justify-center flex-1"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-35 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-1 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center overflow-hidden">
                  <img src="/zalmanfoto.jpeg" alt="Achmad Zalman Alfarizy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
