import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Layers, BookMarked } from 'lucide-react';
import { Github } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

import type { Project } from './BentoGrid';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();
  // Prevent background scroll when panel is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay with Smooth Fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 cursor-pointer will-change-[opacity]"
          />

          {/* Centered Modal Card with custom Gravity Drop Exit Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ 
              opacity: 0, 
              y: 550, 
              rotate: -22,
              transition: { 
                duration: 0.45, 
                ease: [0.3, 0, 0.8, 0.15] // Accelerating gravitational pull
              } 
            }}
            style={{ originX: 0.85, originY: 0.15 }} // Pivot point near the top-right close button
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden max-h-[85vh] border border-slate-200/60 will-change-transform"
          >
            {/* Absolute Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/95 border border-slate-200/60 text-slate-500 hover:text-slate-900 transition-colors shadow-sm hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>

            {/* Project Image Header with Laptop Mockup */}
            <div className={`relative h-36 sm:h-44 shrink-0 overflow-hidden flex items-center justify-center border-b border-slate-100 ${
              project.title.includes('Neptunus')
                ? 'bg-gradient-to-br from-[#0a0c16] via-[#101324] to-[#1a1f38]'
                : project.title.includes('GravitiAuto')
                ? 'bg-gradient-to-br from-[#121316] via-[#1a1c23] to-[#252830]'
                : 'bg-gradient-to-br from-[#0b2b3b] via-[#13465e] to-[#1d6485]'
            }`}>
              
              {/* Glow Effect */}
              <div className={`absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full blur-2xl opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                project.title.includes('Neptunus')
                  ? 'bg-fuchsia-500/20'
                  : project.title.includes('GravitiAuto')
                  ? 'bg-amber-500/20'
                  : 'bg-emerald-500/20'
              }`} />

              {/* Laptop device mockup container */}
              <div className="relative w-full max-w-[120px] sm:max-w-[150px] aspect-[16/10] flex flex-col items-center z-10 mt-2">
                {/* Laptop Screen / Bezel */}
                <div className="relative w-full aspect-[16/10.2] rounded-t-lg sm:rounded-t-xl bg-[#1e2022] p-1.5 shadow-2xl border border-slate-700/40 flex flex-col justify-between">
                  {/* Webcam dot */}
                  <div className="w-1 h-1 bg-slate-950 rounded-full mx-auto mb-0.5 opacity-60" />
                  {/* Screen Content display */}
                  <div className="w-full flex-grow rounded-[2px] sm:rounded bg-slate-950 overflow-hidden relative border border-black">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute w-full object-cover origin-top scale-102"
                        style={{
                          top: `-${project.cropOffset || '0%'}`,
                          height: `calc(100% + ${project.cropOffset || '0%'})`,
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-900/10 flex items-center justify-center relative">
                        <BookMarked size={18} className="text-blue-500" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="w-[116%] h-1.5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-sm sm:rounded-b-md relative shadow-md">
                  {/* Opening lid indentation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-slate-500/40 rounded-b" />
                </div>
                {/* Shadow */}
                <div className="w-[110%] h-0.5 sm:h-1 bg-black/35 blur-[2px] sm:blur-[3px] rounded-full mt-0.5 opacity-80" />
              </div>
            </div>

            {/* Scrollable Panel Body Info */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-5 flex flex-col gap-3.5">
              <div>
                <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-blue-50 border border-blue-200/40 text-blue-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Long Description Text */}
              <div className="text-slate-600 font-light text-xs sm:text-sm leading-relaxed">
                <p>{t(project.longDescriptionKey || project.descriptionKey)}</p>
              </div>

              {/* Specs & Details Grid */}
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-slate-100 text-[11px] sm:text-xs text-slate-400 font-semibold">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-blue-500 shrink-0" />
                  <span className="text-slate-500 truncate">{t('proj.finished')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={12} className="text-blue-500 shrink-0" />
                  <span className="text-slate-500 truncate">{t('proj.category')}</span>
                </div>
              </div>

              {/* Call-to-action Links */}
              <div className="flex items-center gap-4 mt-0.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-[11px] sm:text-xs transition-all shadow-md hover:scale-103 w-full"
                  >
                    <Github size={12} className="shrink-0" />
                    <span>{t('proj.github')}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
