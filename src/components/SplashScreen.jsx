import { useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NAME = 'Achmad Zalman Alfarizy';
const DURATION = 3600; // ms until the curtain lifts
const PREPARE_AT = 300; // ms before the end: mount the site underneath (so the curtain never fights a heavy render)

/* ---------- Illustrations (no filters = cheap to paint on phones) ---------- */

function Rocket() {
  return (
    <svg viewBox="0 0 60 100" className="w-full h-auto" aria-hidden="true">
      <path d="M16 56 L3 80 L17 74 Z" fill="#3b82f6" />
      <path d="M44 56 L57 80 L43 74 Z" fill="#3b82f6" />
      <path d="M30 2 C47 22 49 48 44 74 L16 74 C11 48 13 22 30 2 Z" fill="#f1f5f9" />
      <path d="M30 2 C47 22 49 48 44 74 L36 74 C40 48 38 22 30 2 Z" fill="#cbd5e1" />
      <path d="M30 2 C37 10 40 17 41 22 L19 22 C20 17 23 10 30 2 Z" fill="#3b82f6" />
      <circle cx="30" cy="40" r="9" fill="#e2e8f0" />
      <circle cx="30" cy="40" r="6.5" fill="#0ea5e9" />
      <ellipse cx="28" cy="38" rx="2" ry="1.4" fill="#e0f2fe" opacity="0.8" />
      <rect x="21" y="74" width="18" height="6" rx="2" fill="#64748b" />
      <path className="splash-flame" d="M23 80 Q30 112 37 80 Z" fill="#fb923c" />
      <path className="splash-flame" d="M26 80 Q30 100 34 80 Z" fill="#fde68a" style={{ animationDuration: '0.35s' }} />
    </svg>
  );
}

function Astronaut() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect x="30" y="58" width="60" height="52" rx="12" fill="#94a3b8" />
      <rect x="42" y="100" width="15" height="28" rx="7.5" fill="#e2e8f0" />
      <rect x="63" y="100" width="15" height="28" rx="7.5" fill="#e2e8f0" />
      <rect x="40" y="122" width="19" height="11" rx="5.5" fill="#3b82f6" />
      <rect x="61" y="122" width="19" height="11" rx="5.5" fill="#3b82f6" />
      <rect x="36" y="60" width="48" height="50" rx="18" fill="#f1f5f9" />
      <rect x="50" y="75" width="20" height="13" rx="3.5" fill="#38bdf8" />
      <circle cx="55" cy="81.5" r="2" fill="#0f172a" />
      <circle cx="62" cy="81.5" r="2" fill="#f97316" />
      <rect x="16" y="64" width="26" height="15" rx="7.5" fill="#f1f5f9" transform="rotate(-25 29 71)" />
      <rect x="78" y="64" width="26" height="15" rx="7.5" fill="#f1f5f9" transform="rotate(25 91 71)" />
      <circle cx="17" cy="82" r="7.5" fill="#3b82f6" />
      <circle cx="103" cy="82" r="7.5" fill="#3b82f6" />
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
      left: `${(rand() * 100).toFixed(1)}%`,
      top: `${(rand() * 100).toFixed(1)}%`,
      size: 1 + rand() * 1.6,
      delay: (rand() * 2.5).toFixed(2),
      duration: (1.8 + rand() * 2).toFixed(2),
    }));
  }, [count]);
}

// Smooth blue -> cyan across the letters (solid colours: no per-letter background-clip, which is slow on mobile)
const LETTER_COUNT = NAME.replace(/ /g, '').length;
const letterColor = (i) => {
  const t = i / (LETTER_COUNT - 1);
  const from = [96, 165, 250];
  const to = [103, 232, 249];
  const c = from.map((f, k) => Math.round(f + (to[k] - f) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
};

/* ---------- Splash ---------- */

export default function SplashScreen({ onPrepare, onDone }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const stars = useStars(22);
  const welcome = t.hero.welcome.replace(/\s*👋\s*$/u, '');
  const total = reduceMotion ? 1200 : DURATION;

  useEffect(() => {
    const prepare = setTimeout(onPrepare, total - PREPARE_AT);
    const done = setTimeout(onDone, total);
    return () => {
      clearTimeout(prepare);
      clearTimeout(done);
    };
  }, [onPrepare, onDone, total]);

  const skip = () => {
    onPrepare();
    onDone();
  };

  const charVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  let letterIndex = 0;

  return (
    <motion.div
      onClick={skip}
      initial={{ y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{ willChange: 'transform', touchAction: 'manipulation' }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer select-none"
      role="status"
      aria-label={`${welcome} ${NAME}`}
    >
      {/* Ambient glow — radial gradients instead of blur filters (much lighter to render) */}
      <div
        className="absolute -top-[10%] -left-[20%] w-[90vw] h-[90vw] max-w-[640px] max-h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0) 65%)' }}
      />
      <div
        className="absolute -bottom-[10%] -right-[20%] w-[90vw] h-[90vw] max-w-[640px] max-h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0) 65%)' }}
      />

      {/* Stars (pure CSS animation, fewer on small screens) */}
      {stars.map((s, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-white splash-star ${i >= 12 ? 'hidden sm:block' : ''}`}
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            '--d': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}

      {/* Rocket flying across the screen */}
      {!reduceMotion && (
        <motion.div
          className="absolute top-0 left-0 w-7 sm:w-12 pointer-events-none"
          style={{ willChange: 'transform' }}
          initial={{ x: '-12vw', y: '104vh' }}
          animate={{ x: '108vw', y: '-24vh' }}
          transition={{ duration: 2.6, delay: 0.5, ease: [0.4, 0, 0.6, 1] }}
        >
          <div className="relative rotate-45">
            <div className="absolute top-[78%] left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-28 sm:h-52 bg-gradient-to-b from-orange-300/70 via-cyan-300/20 to-transparent rounded-full" />
            <Rocket />
          </div>
        </motion.div>
      )}

      {/* Floating astronaut */}
      <motion.div
        className="absolute top-[7%] right-[5%] sm:top-[14%] sm:right-[12%] w-14 sm:w-28 md:w-32 pointer-events-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
      >
        <div className="splash-float">
          <Astronaut />
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 text-center">
        {/* Welcome line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-4 sm:mb-6 text-[10px] sm:text-sm uppercase font-medium tracking-[0.16em] sm:tracking-[0.28em] text-cyan-300/90 leading-relaxed"
        >
          {welcome} <span className="normal-case">👋</span>
        </motion.p>

        {/* Name — one line, fluid size so it always fits the screen */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } } }}
          className="flex flex-nowrap justify-center whitespace-nowrap gap-x-[0.28em] font-bold leading-[1.15] text-[clamp(1rem,6.2vw,4rem)]"
          aria-hidden="true"
        >
          {NAME.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden pb-[0.12em]">
              {word.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={charVariants}
                  className="inline-block"
                  style={{ color: letterColor(letterIndex++) }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: 'easeOut' }}
          className="mt-4 sm:mt-6 mx-auto max-w-[17rem] sm:max-w-none text-xs sm:text-lg leading-relaxed text-gray-400"
        >
          {t.hero.role}
        </motion.p>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2 w-36 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: total / 1000 - 0.2, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left', willChange: 'transform' }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}
