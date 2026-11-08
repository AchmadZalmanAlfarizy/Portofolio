import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch Swipe Gesture State for Mobile (iOS & Android)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            {t.projects.title}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
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
          {t.projects.items.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-600/5 to-cyan-600/5 border border-blue-600/20 rounded-2xl overflow-hidden card-hover group flex flex-col justify-between"
            >
              {/* Image Area */}
              <div>
                <div className="h-52 relative overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2.5">
                      {t.projects.featuresLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-600/30 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2.5">
                      {t.projects.techStackLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-600/30 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <div className="flex gap-3 pt-4 border-t border-blue-600/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-2.5 px-4 bg-blue-600/20 hover:bg-blue-600/40 active:scale-95 text-blue-300 rounded-xl transition-all duration-200 font-semibold text-sm cursor-pointer"
                  >
                    <Code size={18} />
                    <span>{t.projects.githubBtn}</span>
                  </a>
                  <button
                    onClick={() => openModal(project)}
                    disabled={!project.screenshots || project.screenshots.length === 0}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-2.5 px-4 rounded-xl transition-all duration-200 font-semibold text-sm ${
                      project.screenshots && project.screenshots.length > 0
                        ? 'bg-cyan-600/20 hover:bg-cyan-600/40 active:scale-95 text-cyan-300 cursor-pointer'
                        : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink size={18} />
                    <span>
                      {project.screenshots && project.screenshots.length > 0
                        ? t.projects.liveBtn
                        : t.projects.comingSoonBtn}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[92dvh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            >
              {/* Close Button - Optimized 44px Touch Target for Android/iOS */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-11 h-11 flex items-center justify-center bg-red-600/90 active:bg-red-700 hover:bg-red-600 text-white rounded-full shadow-xl transition-all active:scale-90 cursor-pointer"
                aria-label="Close Preview"
              >
                <X size={22} />
              </button>

              {/* Image Display Area with Touch Swipe Support */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative aspect-video sm:aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden touch-none select-none"
              >
                <img
                  src={currentProject.screenshots[currentImageIndex]}
                  alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />

                {/* Subtile Mobile Counter Pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 bg-slate-900/85 backdrop-blur-md rounded-full text-xs text-gray-200 border border-slate-700/60 font-mono pointer-events-none shadow-md">
                  {currentImageIndex + 1} / {currentProject.screenshots.length}
                </div>

                {/* Navigation Buttons for Click / Tap */}
                {currentProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className={`absolute left-3 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                        currentImageIndex === 0
                          ? 'bg-gray-800/40 text-gray-600 cursor-not-allowed opacity-0 sm:opacity-50'
                          : 'bg-blue-600/80 active:bg-blue-700 hover:bg-blue-600 text-white cursor-pointer shadow-lg'
                      }`}
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === currentProject.screenshots.length - 1}
                      className={`absolute right-3 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                        currentImageIndex === currentProject.screenshots.length - 1
                          ? 'bg-gray-800/40 text-gray-600 cursor-not-allowed opacity-0 sm:opacity-50'
                          : 'bg-blue-600/80 active:bg-blue-700 hover:bg-blue-600 text-white cursor-pointer shadow-lg'
                      }`}
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip with Smooth Mobile Touch Scroll */}
              {currentProject.screenshots.length > 1 && (
                <div className="p-3 sm:p-4 bg-slate-900/95 border-t border-slate-800 flex gap-2.5 overflow-x-auto touch-scroll">
                  {currentProject.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer active:scale-95 ${
                        currentImageIndex === index
                          ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/25 ring-2 ring-cyan-500/20'
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
