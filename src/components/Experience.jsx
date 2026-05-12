import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'School Website Project',
      period: '2024 - Present',
      description: 'Mengelola dan mengembangkan website sekolah berbasis PHP & Laravel. Memperbaiki fitur CRUD dan menangani request dari client dengan responsif.',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'Liaison Officer Pesmaba',
      company: 'Student Organization',
      period: '2023',
      description: 'Memimpin tim dan mengelola koordinasi antar departemen dalam acara orientasi mahasiswa. Mengembangkan skills leadership dan communication.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Ketua KKN',
      company: 'Community Service',
      period: '2025',
      description: 'Memimpin kegiatan Kuliah Kerja Nyata di masyarakat. Mengembangkan solusi teknologi untuk kebutuhan komunitas lokal.',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent" />
              )}

              <div className="flex gap-6 md:gap-12">
                {/* Timeline Circle */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg">
                    {exp.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-8 card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 font-semibold text-sm md:text-base whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Pendidikan</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Studi Formal</h4>
              <p className="text-gray-300">Mahasiswa Informatika</p>
              <p className="text-gray-400 text-sm">Fokus pada Web Development & System Architecture</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Pembelajaran Mandiri</h4>
              <p className="text-gray-300">Continuous Learning</p>
              <p className="text-gray-400 text-sm">React, Laravel, Database Design, Clean Code Principles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
