import { BookMarked, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface Project {
  id: number;
  title: string;
  headlineKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  gridClass: string;
  image: string;
  cropOffset: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neptunus - E-Commerce Aquascape',
    headlineKey: 'proj1.headline',
    descriptionKey: 'proj1.desc',
    longDescriptionKey: 'proj1.longDesc',
    tags: ['React', 'Tailwind CSS', 'E-commerce', 'Framer Motion'],
    githubUrl: 'https://github.com/dilcuyy',
    liveUrl: 'https://neptunus.vercel.app',
    gridClass: 'md:col-span-1',
    image: '/neptunus-cover.png',
    cropOffset: '14%',
  },
  {
    id: 2,
    title: 'GravitiAuto - Premium Car Rental',
    headlineKey: 'proj2.headline',
    descriptionKey: 'proj2.desc',
    longDescriptionKey: 'proj2.longDesc',
    tags: ['ReactJS', 'Next.js', 'Tailwind CSS', 'MySQL'],
    githubUrl: 'https://github.com/dilcuyy',
    liveUrl: 'https://gravitiauto.vercel.app',
    gridClass: 'md:col-span-1',
    image: '/gravitiauto-cover.png',
    cropOffset: '12%',
  },
  {
    id: 3,
    title: 'Portal Kelurahan Cimuning',
    headlineKey: 'proj3.headline',
    descriptionKey: 'proj3.desc',
    longDescriptionKey: 'proj3.longDesc',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    githubUrl: 'https://github.com/dilcuyy',
    liveUrl: 'https://cimuning-bekasi.vercel.app',
    gridClass: 'md:col-span-1',
    image: '/cimuning-cover.png',
    cropOffset: '13%',
  },
];

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
}

import { motion } from 'framer-motion';

export default function BentoGrid({ onSelectProject }: BentoGridProps) {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t('proj.titleBold')}<span className="text-emerald-500">{t('proj.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light text-sm md:text-base">
            {t('proj.desc')}
          </p>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group relative rounded-3xl border border-slate-200/80 bg-white overflow-hidden cursor-pointer shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between min-h-[440px] ${project.gridClass}`}
            >
              
              {/* Laptop Mockup Cover Backdrop */}
              <div className={`relative h-60 w-full shrink-0 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden ${
                project.id === 1 
                  ? 'bg-gradient-to-br from-[#0a0c16] via-[#101324] to-[#1a1f38]'
                  : project.id === 2
                  ? 'bg-gradient-to-br from-[#121316] via-[#1a1c23] to-[#252830]'
                  : 'bg-gradient-to-br from-[#0b2b3b] via-[#13465e] to-[#1d6485]'
              }`}>
                {/* Glow Effect */}
                <div className={`absolute w-32 h-32 rounded-full blur-2xl opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  project.id === 1
                    ? 'bg-fuchsia-500'
                    : project.id === 2
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`} />

                {/* Laptop device mockup container */}
                <div className="relative w-full max-w-[210px] aspect-[16/10] flex flex-col items-center transition-all duration-300">
                  {/* Laptop Screen / Bezel */}
                  <div className="relative w-full aspect-[16/10.2] rounded-t-xl bg-[#1e2022] p-1.5 shadow-xl border border-slate-700/40 flex flex-col justify-between">
                    {/* Webcam dot */}
                    <div className="w-1 h-1 bg-slate-950 rounded-full mx-auto mb-0.5 opacity-60" />
                    {/* Screen Content display */}
                    <div className="w-full flex-grow rounded bg-slate-950 overflow-hidden relative border border-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute w-full object-cover origin-top scale-102"
                        style={{
                          top: `-${project.cropOffset}`,
                          height: `calc(100% + ${project.cropOffset})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className={`w-[116%] h-2 rounded-b-md relative shadow-md ${
                    project.id === 3 
                      ? 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300' 
                      : 'bg-gradient-to-b from-slate-400 via-slate-300 to-slate-550'
                  }`}>
                    {/* Opening lid indentation */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-slate-500/40 rounded-b" />
                  </div>
                  {/* Drop shadow */}
                  <div className="w-[110%] h-1 bg-black/35 blur-[3px] rounded-full mt-0.5 opacity-80" />
                </div>
              </div>

              {/* Bottom Details (Text Info) */}
              <div className="relative z-10 p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900">
                      <BookMarked size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                      <h3 className="text-sm font-black tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors shadow-sm shrink-0 ml-2">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed line-clamp-2">
                    {t(project.descriptionKey)}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/50 text-slate-655"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
