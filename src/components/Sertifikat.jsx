import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Sertifikat() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch Swipe Gesture State for Mobile (iOS & Android)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  const certificates = t.sertifikat.items;

  // Lock body scroll on mobile/desktop when modal is active
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [modalOpen]);

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
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
            {t.sertifikat.title} {t.sertifikat.titleHighlight}
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            {t.sertifikat.subtitle}
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
              className="group cursor-pointer active:scale-[0.98] transition-transform"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 bg-slate-900/50 shadow-lg">
                {/* Image Container */}
                <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain md:group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 md:p-6 w-full">
                      <p className="text-sm text-blue-400 mb-2">{t.sertifikat.clickToEnlarge}</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2 md:mb-3 font-medium">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-4">{cert.date}</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Touch Gesture Support */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92dvh] overflow-y-auto touch-scroll rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
            >
              {/* Close Button - 44px Touch Target */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-11 h-11 flex items-center justify-center bg-red-600/90 active:bg-red-700 hover:bg-red-600 text-white rounded-full shadow-xl transition-all active:scale-90 cursor-pointer"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Image Area with Swipe Support */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative bg-slate-950 flex items-center justify-center min-h-[300px] select-none touch-none"
              >
                <motion.img
                  key={currentImageIndex}
                  src={certificates[currentImageIndex].image}
                  alt={certificates[currentImageIndex].title}
                  initial={{ opacity: 0.7, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full max-h-[60dvh] object-contain bg-slate-950 pointer-events-none"
                />

                {/* Navigation Buttons */}
                {certificates.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600/80 active:bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all active:scale-90 z-20 shadow-lg cursor-pointer"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600/80 active:bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all active:scale-90 z-20 shadow-lg cursor-pointer"
                      aria-label="Next certificate"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-5 sm:p-7 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-800">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 text-white leading-snug">
                  {certificates[currentImageIndex].title}
                </h3>
                <p className="text-blue-400 mb-1.5 text-sm sm:text-base font-medium">{certificates[currentImageIndex].issuer}</p>
                <p className="text-gray-400 mb-3 text-xs sm:text-sm">{certificates[currentImageIndex].date}</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{certificates[currentImageIndex].description}</p>

                {/* Image Counter */}
                {certificates.length > 1 && (
                  <p className="text-gray-400 text-xs sm:text-sm mt-4 font-mono">
                    {t.sertifikat.counterTemplate(currentImageIndex + 1, certificates.length)}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
