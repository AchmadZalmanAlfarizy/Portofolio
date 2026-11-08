import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-slate-900/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t.education.title}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.education.titleHighlight}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4" />
          <p className="text-gray-400 text-base md:text-lg">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formal Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-blue-600/10 via-slate-900/70 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 sm:p-8 card-hover shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-blue-500/20 text-cyan-300 px-3 py-1 rounded-full border border-blue-500/30 font-semibold tracking-wide">
                  {t.education.formalBadge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-slate-950/60 px-3 py-1 rounded-lg border border-slate-800">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{t.education.formalPeriod}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-600/30 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {t.education.formalDegree}
                  </h3>
                  <p className="text-blue-400 font-semibold text-base">
                    {t.education.formalSchool}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                {t.education.formalDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-600/20 flex items-center gap-2 text-xs text-gray-400">
              <BookOpen size={14} className="text-cyan-400" />
              <span>Bachelor of Informatics • GPA / Focus on Software Engineering</span>
            </div>
          </motion.div>

          {/* Industry Training & Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-blue-600/10 via-slate-900/70 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 sm:p-8 card-hover shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 font-semibold tracking-wide">
                  {t.education.certBadge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-slate-950/60 px-3 py-1 rounded-lg border border-slate-800">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{t.education.certPeriod}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {t.education.certTitle}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-base">
                    {t.education.certSchool}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                {t.education.certDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-600/20 flex items-center gap-2 text-xs text-gray-400">
              <Award size={14} className="text-cyan-400" />
              <span>Cisco Networking Academy • Dicoding • PT DSM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

