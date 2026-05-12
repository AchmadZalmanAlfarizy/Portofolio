import { motion } from 'framer-motion';
import { Mail, Code, Send, Share2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'azalmana27@gmail.com',
      href: 'mailto:azalmana27@gmail.com',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: <Code size={24} />,
      label: 'GitHub',
      value: 'github.com/AchmadZalmanAlfarizy',
      href: 'https://github.com/AchmadZalmanAlfarizy',
      color: 'from-gray-600 to-slate-600',
    },
    {
      icon: <Send size={24} />,
      label: 'WhatsApp',
      value: '+62 899-926-8988',
      href: 'https://wa.me/6289992268988',
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: <Share2 size={24} />,
      label: 'Location',
      value: 'Sidoarjo, Indonesia',
      href: '#',
      color: 'from-pink-600 to-purple-600',
    },
  ];

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
    <section id="contact" className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Saya terbuka untuk diskusi, kolaborasi, atau kesempatan baru. Jangan ragu untuk menghubungi saya!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 border border-blue-600/20 rounded-2xl p-8 card-hover flex flex-col items-center text-center relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-4xl mb-4 relative z-10 p-4 rounded-xl bg-gradient-to-br ${contact.color} text-white`}
                >
                  {contact.icon}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  {contact.label}
                </h3>

                {/* Value */}
                <p className="text-gray-400 text-sm mb-4 relative z-10 break-all">
                  {contact.value}
                </p>

                {/* Arrow */}
                <motion.div
                  className="text-blue-400 relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-600/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Siap untuk Berkolaborasi?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Mari bersama-sama menciptakan solusi web yang inovatif dan memberikan dampak positif.
          </p>
          <motion.a
            href="mailto:achmadzalman@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary text-lg"
          >
            Hubungi Saya Sekarang
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Social Links - Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Atau Follow di Social Media Saya</p>
          <div className="flex justify-center gap-4">
            {contactLinks.slice(1).map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full bg-gradient-to-br ${contact.color} text-white hover:shadow-xl transition-shadow`}
              >
                {contact.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
