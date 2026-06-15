import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Folder, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

// Import the sashed portrait photo
import devHeroImg from '../assets/developer_hero.png';

export default function Hero() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width to restrict 3D tilt interaction on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for tracking mouse coordinate percentage relative to the card dimensions
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Maps coordinates to rotational degrees (reduced to make the tilt subtle)
  const rotateXSpring = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 250, damping: 25 });
  const rotateYSpring = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-[#fafafa] overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Welcome Tag */}
          <motion.span
            variants={itemVariants}
            className="text-xs font-black text-slate-400 uppercase tracking-widest"
          >
            {t('hero.hello')}
          </motion.span>

          {/* Heading Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]"
          >
            Abdila Asy <span className="text-blue-600">Syafiq</span>.
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-extrabold text-slate-800"
          >
            Fullstack Developer
          </motion.h2>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="https://github.com/dilcuyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors p-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com/a.dilasy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors p-1"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdila-asy-syafiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors p-1"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Bio text */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-xl"
          >
            {t('hero.bio')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-md shadow-violet-500/20 hover:scale-103"
            >
              <Folder size={16} />
              <span>{t('hero.viewProjects')}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 font-bold text-sm transition-all hover:scale-103"
            >
              <Mail size={16} className="text-slate-400" />
              <span>{t('hero.contactMe')}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Stand Developer Card (with 3D perspective wrapper) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
          style={{ perspective: 1000 }}
        >
          {/* Animated 3D Card container */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: isMobile ? 0 : rotateXSpring,
              rotateY: isMobile ? 0 : rotateYSpring,
              transformStyle: 'preserve-3d',
            }}
            whileHover={isMobile ? {} : { scale: 1.02 }}
            className="relative w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 shadow-2xl border border-white/10 group cursor-pointer"
          >
            {/* Main Portrait Image */}
            <img
              src={devHeroImg}
              alt="Abdila Asy Syafiq"
              className="w-full h-full object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Top Info Overlay (Floating 3D Layer) */}
            <div
              style={{
                transform: isMobile ? 'none' : 'translateZ(20px)',
                transformStyle: 'preserve-3d',
              }}
              className="absolute top-6 left-6 pointer-events-none transition-transform duration-300"
            >
              <h3 className="text-white font-black text-xl tracking-tight leading-none">
                Abdila Asy Syafiq
              </h3>
              <p className="text-blue-200 text-xs mt-1.5 font-bold tracking-wide uppercase">
                Fullstack Developer
              </p>
            </div>

            {/* Bottom Panel - Online Status & Contact glass button (Floating 3D Layer) */}
            <div
              style={{
                transform: isMobile ? 'none' : 'translateZ(15px)',
                transformStyle: 'preserve-3d',
              }}
              className="absolute bottom-6 left-6 right-6 flex items-center justify-between transition-transform duration-300"
            >
              {/* Online indicator */}
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white text-[10px] font-bold">@dilcuyy</span>
                  <span className="text-[8px] text-emerald-400 font-bold mt-0.5">Online</span>
                </div>
              </div>

              {/* Glass contact button */}
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] uppercase tracking-wider transition-all"
              >
                {t('hero.contactMe')}
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
