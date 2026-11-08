import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

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

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t.skills.title}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.skills.titleHighlight}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.skills.categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-600/10 via-slate-900/60 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 sm:p-8 card-hover"
            >
              <div className="text-4xl sm:text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
