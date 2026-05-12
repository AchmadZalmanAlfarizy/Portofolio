import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlights = [
    'Pengalaman dengan Laravel & React',
    'Problem Solving & Debugging',
    'Pengembangan Sistem Berbasis User',
    'CRUD & Maintenance',
    'Real-time System Development',
    'Clean Code & Best Practice',
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              Saya adalah seorang Mahasiswa Informatika dengan passion terhadap pengembangan web.
              Melalui pengalaman belajar dan proyek-proyek praktis, saya telah mengembangkan keahlian
              dalam membangun aplikasi web yang robust dan user-friendly.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Fokus saya adalah menciptakan solusi yang tidak hanya fungsional tetapi juga memberikan
              pengalaman pengguna yang optimal. Saya percaya bahwa setiap kode harus ditulis dengan
              clean code principle dan mudah dimaintain untuk jangka panjang.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats / Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Keahlian Utama</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Full Stack Web Development</li>
                <li>• Database Design & Optimization</li>
                <li>• System Architecture & Planning</li>
                <li>• Bug Fixing & Debugging</li>
                <li>• Client Communication & Requirement Analysis</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
                <p className="text-gray-400">Projects</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">3+</div>
                <p className="text-gray-400">Years Tech Stack</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
