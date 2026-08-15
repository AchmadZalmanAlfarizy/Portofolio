import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
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
              <span className="text-blue-400 font-semibold">Welcome to my portfolio 👋</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Achmad Zalman Alfarizy
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              className="text-lg sm:text-xl text-gray-300 mb-6"
            >
              Informatics Student | Web Developer
            </motion.p>

            <motion.p
              custom={3}
              variants={textVariants}
              className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-8"
            >
              Mahasiswa Informatika dengan pengalaman dalam pengembangan web berbasis Laravel dan React.
              Terbiasa membangun sistem, memperbaiki bug, serta mengembangkan fitur sesuai kebutuhan pengguna.
            </motion.p>

            <motion.div
              custom={4}
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/CV ACHMAD ZALMAN ALFARIZY (1).pdf"
                download
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center flex-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-3xl opacity-30 animate-float" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-1 overflow-hidden">
                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/zalmanfoto.jpeg" alt="Achmad Zalman Alfarizy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
