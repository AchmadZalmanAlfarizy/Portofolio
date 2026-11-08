import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 'dsm-group',
      category: 'work',
      title: 'Fullstack Developer (Internship)',
      company: 'DSM Group (Software House)',
      period: 'Juni 2025 – Desember 2025',
      badge: 'Pengalaman Kerja',
      badgeColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: <Briefcase className="w-6 h-6" />,
      description:
        'Mengembangkan dan memelihara aplikasi web berbasis Laravel dan MySQL, mencakup implementasi backend yang aman, optimasi basis data, hingga integrasi antarmuka pengguna yang responsif.',
      points: [
        'Mengembangkan dan memelihara aplikasi web menggunakan Laravel dan MySQL dengan operasi CRUD yang aman, pemrosesan data dinamis, dan integrasi frontend-backend yang lancar.',
        'Melakukan performance debugging dan profiling query database untuk mempercepat waktu respons data serta meminimalisir latensi server.',
        'Key Impact: Berperan utama dalam perancangan dan pengembangan modul "di_akad", mendigitalisasi alur administrasi sekolah-sekolah di wilayah Sidoarjo.',
      ],
      skills: ['Laravel', 'PHP', 'MySQL', 'Database Profiling', 'CRUD & REST API', 'Clean Code'],
    },
    {
      id: 'padel-garden',
      category: 'work',
      title: 'IT Support',
      company: 'Padel Garden Malang',
      period: 'Agustus 2025 – September 2025',
      badge: 'Pengalaman Kerja',
      badgeColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: <Briefcase className="w-6 h-6" />,
      description:
        'Bertanggung jawab dalam pengembangan dan penerapan sistem scoring turnamen berbasis web, pemeliharaan live website, serta troubleshooting sistem secara real-time selama pertandingan.',
      points: [
        'Berkontribusi dalam tim IT pada pengembangan dan penerapan sistem penilaian (scoring system) berbasis web dan platform manajemen pemain untuk Padel Garden Malang.',
        'Menangani live website maintenance dan penanganan kendala teknis (real-time troubleshooting) saat pertandingan berlangsung untuk memastikan keandalan sistem tanpa gangguan.',
        'Mengoptimalkan penjadwalan pertandingan, live score tracking secara langsung, dan tata kelola administrasi data peserta untuk kelancaran turnamen.',
      ],
      skills: ['Web-based Scoring System', 'Live Troubleshooting', 'System Maintenance', 'Data Administration'],
    },
    {
      id: 'kkn-umm',
      category: 'organization',
      title: 'Ketua KKN (Kuliah Kerja Nyata)',
      company: 'Program Pengabdian Masyarakat UMM',
      period: 'Agustus 2024 – September 2024',
      badge: 'Pengalaman Organisasi',
      badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      icon: <Award className="w-6 h-6" />,
      description:
        'Memimpin inisiatif pengabdian masyarakat multidisiplin tingkat desa, mengoordinasikan hubungan dengan pemerintah lokal, serta memandu program literasi dan solusi teknologi bagi warga.',
      points: [
        'Memimpin tim mahasiswa dalam merancang dan mengeksekusi program kerja pengabdian masyarakat yang berorientasi pada kebutuhan warga desa.',
        'Membangun komunikasi strategis dan koordinasi intensif dengan jajaran perangkat pemerintah desa serta tokoh masyarakat setempat.',
        'Menginisiasi program literasi digital dan pengembangan solusi teknologi tepat guna guna mendukung administrasi komunitas lokal.',
      ],
      skills: ['Leadership', 'Project Coordination', 'Stakeholder Management', 'Public Communication'],
    },
    {
      id: 'pesmaba-umm',
      category: 'organization',
      title: 'Liaison Officer (LO)',
      company: 'Pesmaba UMM (Orientasi Mahasiswa Baru)',
      period: 'September 2023 – Oktober 2023',
      badge: 'Pengalaman Organisasi',
      badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      icon: <Award className="w-6 h-6" />,
      description:
        'Memfasilitasi alur komunikasi dan manajemen logistik dalam penyelenggaraan kegiatan Pengenalan Studi Mahasiswa Baru skala universitas.',
      points: [
        'Menjadi penghubung utama dan memfasilitasi komunikasi antar divisi panitia serta ribuan mahasiswa baru skala universitas.',
        'Mengelola alur logistik, time management, dan kedisiplinan alur acara agar seluruh rangkaian kegiatan terlaksana secara terstruktur dan tepat waktu.',
        'Menangani koordinasi cepat saat terjadi dinamika lapangan untuk menjaga kondusivitas acara.',
      ],
      skills: ['Event Management', 'Public Speaking', 'Crisis Coordination', 'Time Management'],
    },
  ];

  const filteredExperiences =
    activeTab === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === activeTab);

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
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4" />
          <p className="text-gray-400 text-base md:text-lg">
            Rekam jejak pengalaman kerja profesional, kontribusi organisasi, serta latar belakang pendidikan saya.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: 'all', label: 'Semua Pengalaman' },
            { id: 'work', label: 'Pengalaman Kerja' },
            { id: 'organization', label: 'Pengalaman Organisasi' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105'
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
                  {/* Timeline Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative flex-shrink-0 hidden md:flex"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      {exp.icon}
                    </div>
                  </motion.div>

                  {/* Card Content */}
                  <div className="flex-1 w-full bg-gradient-to-br from-blue-600/10 via-slate-900/60 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 md:p-8 card-hover shadow-xl">
                    {/* Header Card */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-xs px-3 py-1 rounded-full border bg-gradient-to-r font-medium ${exp.badgeColor}`}
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

        {/* Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600/10 via-slate-900/60 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-600/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Latar Belakang Pendidikan</h3>
              <p className="text-gray-400 text-sm">Pendidikan formal dan pengembangan keahlian berkelanjutan</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-blue-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-blue-500/30 font-semibold">
                  Pendidikan Formal
                </span>
                <span className="text-xs text-gray-400">Sep 2022 – Okt 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                S1 Teknik Informatika (Sarjana Komputer)
              </h4>
              <p className="text-blue-400 font-medium text-sm mb-2">
                Universitas Muhammadiyah Malang
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lulus: 2 Oktober 2026. Fokus pada Full-stack Web & Mobile Development, Optimasi Basis Data, serta Perancangan Sistem Terintegrasi.
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-semibold">
                  Pengembangan Keahlian
                </span>
                <span className="text-xs text-gray-400">Berkelanjutan</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Pelatihan & Pembelajaran Mandiri
              </h4>
              <p className="text-blue-400 font-medium text-sm mb-2">
                Sertifikasi & Program Industri
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tersertifikasi dalam CCNAv7 (Cisco), React & Front-End Web (Dicoding), UI/UX Design Training (PT DSM), serta Database Management & Optimization (Lab Informatika UMM).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
