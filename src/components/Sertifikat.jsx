import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sertifikat() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    {
      title: 'UI/UX Design Training',
      issuer: 'PT Digital Solusi Master',
      date: '14 Juli 2025 - 14 Agustus 2025',
      image: '/sertifikat/Screenshot 2026-06-25 053721.png',
      description: 'Sertifikat pelatihan Fundamental UI/UX dan Design Thinking dari PT Digital Solusi Master',
    },
    {
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: '24 Juni 2026',
      image: '/sertifikat/image.png',
      description: 'Sertifikat kompetensi kelulusan untuk kelas Belajar Membuat Front-End Web untuk Pemula dari Dicoding',
    },
    {
      title: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: '23 Juni 2026',
      image: '/sertifikat/Screenshot 2026-06-25 053839.png',
      description: 'Sertifikat kompetensi kelulusan untuk kelas Belajar Dasar Pemrograman Web dari Dicoding',
    },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="sertifikat" className="py-16 px-4 md:py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sertifikat & Penghargaan
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Sertifikat pelatihan dan penghargaan yang telah saya raih
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 bg-slate-900/50">
                {/* Image Container */}
                <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain md:group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 md:p-6 w-full">
                      <p className="text-sm text-blue-400 mb-2">Klik untuk lihat lebih besar</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2 md:mb-3">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3 md:mb-4">{cert.date}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto"
            >
              {/* Image */}
              <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                <img
                  src={certificates[currentImageIndex].image}
                  alt={certificates[currentImageIndex].title}
                  className="w-full max-h-[62vh] object-contain bg-slate-950"
                />

                {/* Navigation Buttons */}
                {certificates.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full transition-colors z-10"
                    >
                      <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 md:top-4 md:right-4 bg-red-500 hover:bg-red-600 text-white p-2 md:p-3 rounded-full transition-colors z-10"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Certificate Info */}
                <div className="p-4 md:p-6 bg-gradient-to-r from-slate-900 to-slate-800">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 text-white leading-snug">
                    {certificates[currentImageIndex].title}
                  </h3>
                  <p className="text-blue-400 mb-2 text-sm md:text-base">{certificates[currentImageIndex].issuer}</p>
                  <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{certificates[currentImageIndex].date}</p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{certificates[currentImageIndex].description}</p>

                  {/* Image Counter */}
                  {certificates.length > 1 && (
                    <p className="text-gray-500 text-sm mt-4">
                      {currentImageIndex + 1} dari {certificates.length}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
