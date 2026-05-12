import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'Website Desa Pangedisan',
      description: 'Sistem informasi desa berbasis web yang digunakan untuk mengelola data dan informasi publik. Fitur meliputi manajemen data, tampilan informasi desa, serta pengelolaan konten menggunakan sistem CRUD.',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      image: '🏘️',
      features: ['Manajemen Data Desa', 'Tampilan Informasi Publik', 'CRUD Content Management'],
      github: 'https://github.com/AchmadZalmanAlfarizy',
      screenshots: [
        '/pangedisan/image.png',
        '/pangedisan/Screenshot 2026-05-12 152855.png',
        '/pangedisan/Screenshot 2026-05-12 153146.png',
        '/pangedisan/Screenshot 2026-05-12 153801.png',
        '/pangedisan/Screenshot 2026-05-12 153900.png',
      ],
    },
    {
      title: 'Website Booking Barbershop',
      description: 'Sistem booking online untuk memudahkan pelanggan melakukan reservasi secara real-time. Memiliki fitur pemilihan jadwal, pengelolaan booking, serta sistem validasi agar tidak terjadi bentrok waktu.',
      tech: ['React', 'PHP', 'MySQL'],
      image: '💈',
      features: ['Real-time Booking', 'Jadwal Management', 'Validasi Waktu'],
      github: 'https://github.com/AchmadZalmanAlfarizy',
      screenshots: [
        '/barber/Screenshot 2026-05-12 154301.png',
        '/barber/Screenshot 2026-05-12 154401.png',
        '/barber/Screenshot 2026-05-12 154632.png',
      ],
    },
    {
      title: 'E-Commerce Daging',
      description: 'Platform penjualan daging online dengan fitur keranjang belanja, checkout, dan manajemen produk. Sistem mendukung pengelolaan stok serta proses transaksi secara terstruktur.',
      tech: ['Laravel', 'React', 'MySQL'],
      image: '🛒',
      features: ['Keranjang Belanja', 'Checkout System', 'Stock Management'],
      github: 'https://github.com/AchmadZalmanAlfarizy',
      screenshots: [
        '/daging/Screenshot 2026-05-12 181545.png',
        '/daging/Screenshot 2026-05-12 181723.png',
        '/daging/Screenshot 2026-05-12 181759.png',
        '/daging/Screenshot 2026-05-12 181855.png',
        '/daging/Screenshot 2026-05-12 181933.png',
        '/daging/Screenshot 2026-05-12 181951.png',
        '/daging/Screenshot 2026-05-12 182053.png',
      ],
    },
    {
      title: 'Manajemen RT Desa Sedati Agung',
      description: 'Sistem administrasi RT berbasis web untuk pendataan warga, pengelolaan surat, dan laporan kegiatan. Termasuk fitur CRUD data warga serta pengelolaan arsip dokumen.',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      image: '📋',
      features: ['Pendataan Warga', 'Manajemen Surat', 'Arsip Dokumen'],
      github: 'https://github.com/AchmadZalmanAlfarizy',
      screenshots: [
        '/sedati/Screenshot 2026-05-12 184044.png',
        '/sedati/Screenshot 2026-05-12 184133.png',
        '/sedati/Screenshot 2026-05-12 184152.png',
        '/sedati/Screenshot 2026-05-12 184242.png',
        '/sedati/Screenshot 2026-05-12 184302.png',
        '/sedati/Screenshot 2026-05-12 184337.png',
        '/sedati/Screenshot 2026-05-12 184353.png',
      ],
    },
  ];

  const openModal = (project) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setCurrentProject(project);
      setCurrentImageIndex(0);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject && currentImageIndex < currentProject.screenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-600/5 to-cyan-600/5 border border-blue-600/20 rounded-2xl overflow-hidden card-hover group"
            >
              {/* Image Area */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center text-8xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10 group-hover:scale-110 transition-transform">{project.image}</span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-300 mb-3">Fitur Utama:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-600/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-blue-600/20">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 rounded-lg transition-all duration-300"
                  >
                    <Code size={18} />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                  <button
                    onClick={() => openModal(project)}
                    disabled={!project.screenshots || project.screenshots.length === 0}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 ${
                      project.screenshots && project.screenshots.length > 0
                        ? 'bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 cursor-pointer'
                        : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-semibold">
                      {project.screenshots && project.screenshots.length > 0 ? 'Live' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Fitur yang Telah Dikembangkan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'CRUD Arsip Dokumen',
              'Sistem Booking Real-Time',
              'Manajemen Data Warga',
              'Sistem Pengelolaan Request Client',
              'Validasi Form & Error Handling',
              'Dashboard Admin',
            ].map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-blue-600/10 transition-colors"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {modalOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-slate-900 rounded-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-red-600/80 hover:bg-red-600 rounded-full transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Project Title */}
              <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
                <p className="text-sm text-gray-400">
                  {currentImageIndex + 1} / {currentProject.screenshots.length}
                </p>
              </div>

              {/* Image Display */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
                <img
                  src={currentProject.screenshots[currentImageIndex]}
                  alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Navigation Buttons */}
                {currentProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className={`absolute left-4 p-3 rounded-full transition-all ${
                        currentImageIndex === 0
                          ? 'bg-gray-600/50 cursor-not-allowed'
                          : 'bg-blue-600/80 hover:bg-blue-600'
                      }`}
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === currentProject.screenshots.length - 1}
                      className={`absolute right-4 p-3 rounded-full transition-all ${
                        currentImageIndex === currentProject.screenshots.length - 1
                          ? 'bg-gray-600/50 cursor-not-allowed'
                          : 'bg-blue-600/80 hover:bg-blue-600'
                      }`}
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {currentProject.screenshots.length > 1 && (
                <div className="p-4 bg-slate-800 flex gap-2 overflow-x-auto">
                  {currentProject.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-blue-500 scale-105'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={screenshot}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
