import { useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NAME = 'Achmad Zalman Alfarizy';
const DURATION = 3600; // ms before the curtain lifts

/* ---------- Illustrations ---------- */

function Rocket() {
  return (
    <svg viewBox="0 0 60 100" className="w-full h-auto drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]" aria-hidden="true">
      {/* fins */}
      <path d="M16 56 L3 80 L17 74 Z" fill="#3b82f6" />
      <path d="M44 56 L57 80 L43 74 Z" fill="#3b82f6" />
      {/* body */}
      <path d="M30 2 C47 22 49 48 44 74 L16 74 C11 48 13 22 30 2 Z" fill="#f1f5f9" />
      <path d="M30 2 C47 22 49 48 44 74 L36 74 C40 48 38 22 30 2 Z" fill="#cbd5e1" />
      {/* nose stripe */}
      <path d="M30 2 C37 10 40 17 41 22 L19 22 C20 17 23 10 30 2 Z" fill="#3b82f6" />
      {/* window */}
      <circle cx="30" cy="40" r="9" fill="#e2e8f0" />
      <circle cx="30" cy="40" r="6.5" fill="#0ea5e9" />
      <ellipse cx="28" cy="38" rx="2" ry="1.4" fill="#e0f2fe" opacity="0.8" />
      {/* nozzle */}
      <rect x="21" y="74" width="18" height="6" rx="2" fill="#64748b" />
      {/* flame */}
      <motion.path
        d="M23 80 Q30 112 37 80 Z"
        fill="#fb923c"
        style={{ originX: 0.5, originY: 0 }}
        animate={{ scaleY: [1, 1.35, 0.9, 1.25, 1], opacity: [0.9, 1, 0.85, 1, 0.9] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M26 80 Q30 100 34 80 Z"
        fill="#fde68a"
        style={{ originX: 0.5, originY: 0 }}
        animate={{ scaleY: [1, 1.25, 0.9, 1.2, 1] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function Astronaut() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-auto drop-shadow-[0_0_18px_rgba(96,165,250,0.35)]" aria-hidden="true">
      <defs>
        <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      {/* backpack */}
      <rect x="30" y="58" width="60" height="52" rx="12" fill="#94a3b8" />
      {/* legs */}
      <rect x="42" y="100" width="15" height="28" rx="7.5" fill="#e2e8f0" />
      <rect x="63" y="100" width="15" height="28" rx="7.5" fill="#e2e8f0" />
      <rect x="40" y="122" width="19" height="11" rx="5.5" fill="#3b82f6" />
      <rect x="61" y="122" width="19" height="11" rx="5.5" fill="#3b82f6" />
      {/* body */}
      <rect x="36" y="60" width="48" height="50" rx="18" fill="#f1f5f9" />
      <rect x="50" y="75" width="20" height="13" rx="3.5" fill="#38bdf8" />
      <circle cx="55" cy="81.5" r="2" fill="#0f172a" />
      <circle cx="62" cy="81.5" r="2" fill="#f97316" />
      {/* arms */}
      <rect x="16" y="64" width="26" height="15" rx="7.5" fill="#f1f5f9" transform="rotate(-25 29 71)" />
      <rect x="78" y="64" width="26" height="15" rx="7.5" fill="#f1f5f9" transform="rotate(25 91 71)" />
      <circle cx="17" cy="82" r="7.5" fill="#3b82f6" />
      <circle cx="103" cy="82" r="7.5" fill="#3b82f6" />
      {/* helmet */}
      <circle cx="60" cy="38" r="30" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="38" y="24" width="44" height="28" rx="14" fill="url(#visorGrad)" />
      <ellipse cx="50" cy="31" rx="8" ry="3.5" fill="#93c5fd" opacity="0.55" transform="rotate(-20 50 31)" />
    </svg>
  );
}

function useStars(count) {
  return useMemo(() => {
    let seed = 7;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    return Array.from({ length: count }, () => ({
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      size: 1 + rand() * 1.8,
      delay: rand() * 2.5,
      duration: 1.6 + rand() * 2,
    }));
  }, [count]);
}

/* ---------- Splash ---------- */

export default function SplashScreen({ onDone }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const stars = useStars(36);
  const welcome = t.hero.welcome.replace(/\s*👋\s*$/u, '');

  useEffect(() => {
    const timer = setTimeout(onDone, reduceMotion ? 1200 : DURATION);
    return () => clearTimeout(timer);
  }, [onDone, reduceMotion]);

  const charVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: '110%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      onClick={onDone}
      initial={{ y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer select-none"
      role="status"
      aria-label={`${welcome} ${NAME}`}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" />

      {/* Stars */}
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          initial={{ opacity: 0.15 }}
          animate={reduceMotion ? { opacity: 0.5 } : { opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Rocket flying across the screen */}
      {!reduceMotion && (
        <motion.div
          className="absolute top-0 left-0 w-9 sm:w-12"
          initial={{ x: '-12vw', y: '104vh', opacity: 1 }}
          animate={{ x: '108vw', y: '-24vh' }}
          transition={{ duration: 2.6, delay: 0.5, ease: [0.4, 0, 0.6, 1] }}
        >
          <div className="relative rotate-45">
            <div className="absolute top-[78%] left-1/2 -translate-x-1/2 w-1.5 h-40 sm:h-56 bg-gradient-to-b from-orange-300/70 via-cyan-300/20 to-transparent rounded-full blur-[1.5px]" />
            <Rocket />
          </div>
        </motion.div>
      )}

      {/* Floating astronaut */}
      <motion.div
        className="absolute top-[10%] right-[6%] sm:top-[14%] sm:right-[12%] w-16 sm:w-28 md:w-32"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -14, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Astronaut />
        </motion.div>
      </motion.div>

      <div className="relative z-10 px-6 text-center">
        {/* Welcome line */}
        <motion.p
          initial={{ opacity: 0, y: 10, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.28em' }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="text-[11px] sm:text-sm uppercase font-medium text-cyan-300/90 mb-5 sm:mb-6"
        >
          {welcome}{' '}
          <motion.span
            className="inline-block normal-case"
            animate={reduceMotion ? {} : { rotate: [0, 18, -10, 18, -6, 0] }}
            transition={{ delay: 1.2, duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
            style={{ originX: 0.7, originY: 0.7 }}
          >
            👋
          </motion.span>
        </motion.p>

        {/* Name — each word masked, letters rise in */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 0.6 } } }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
          aria-hidden="true"
        >
          {NAME.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden align-bottom pb-1 mr-3 sm:mr-5 last:mr-0">
              {word.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={charVariants}
                  className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: 'easeOut' }}
          className="mt-5 sm:mt-6 text-sm sm:text-lg text-gray-400"
        >
          {t.hero.role}
        </motion.p>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-40 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: (reduceMotion ? 1.2 : DURATION / 1000) - 0.2, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left' }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}
