import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const filteredExperiences =
    activeTab === 'all'
      ? t.experience.items
      : t.experience.items.filter((exp) => exp.category === activeTab);

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
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t.experience.title}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.experience.titleHighlight}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4" />
          <p className="text-gray-400 text-base md:text-lg">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: 'all', label: t.experience.tabs.all },
            { id: 'work', label: t.experience.tabs.work },
            { id: 'organization', label: t.experience.tabs.organization },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== filteredExperiences.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-blue-600/50 to-transparent -mb-8 hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative flex-shrink-0 hidden md:flex"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      {exp.category === 'work' ? (
                        <Briefcase className="w-6 h-6" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>
                  </motion.div>

                  {/* Card Content */}
                  <div className="flex-1 w-full bg-gradient-to-br from-blue-600/10 via-slate-900/60 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 md:p-8 card-hover shadow-xl">
                    {/* Header Card */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-xs px-3 py-1 rounded-full border font-medium ${
                              exp.category === 'work'
                                ? 'bg-blue-500/20 text-cyan-300 border-cyan-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            }`}
                          >
                            {exp.badge}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold text-base md:text-lg">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg self-start whitespace-nowrap">
                        <Calendar size={15} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-5">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-gray-300 text-sm md:text-base">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-400 flex-shrink-0 mt-1"
                          />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-600/20">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-950/70 text-gray-300 px-3 py-1 rounded-lg border border-slate-800 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
