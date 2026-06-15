import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Entry {
  yearKey: string;
  roleKey: string;
  companyKey: string;
  locationKey: string;
  pointKeys: string[];
  tags: string[];
}

const experiences: Entry[] = [
  {
    yearKey: 'exp.year',
    roleKey: 'exp.role',
    companyKey: 'exp.company',
    locationKey: 'exp.location',
    pointKeys: [
      'exp.point1',
      'exp.point2',
      'exp.point3',
      'exp.point4',
    ],
    tags: ['Laravel', 'ReactJS', 'Tailwind CSS', 'MySQL', 'PostgreSQL'],
  },
];

import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Outlined Heading Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">
            <span className="text-outline">{t('exp.titleBold')}</span>{' '}
            <span className="text-violet-600">{t('exp.titleHighlight')}</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm"
            >
              {/* Header Info Grid */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                {/* Logo & Company info */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-500">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {t(exp.roleKey)}
                    </h3>
                    <p className="text-sm font-bold text-slate-500 mt-1">
                      {t(exp.companyKey)}
                    </p>
                  </div>
                </div>

                {/* Calendar / Location info */}
                <div className="flex flex-col gap-2 text-xs font-semibold text-slate-400 md:text-right">
                  <div className="flex items-center md:justify-end gap-2">
                    <Calendar size={14} className="text-slate-400" />
                    <span>{t(exp.yearKey)}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{t(exp.locationKey)}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-8 flex flex-col gap-4">
                {exp.pointKeys.map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag Section */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">
                  {t('exp.techUsed')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/50 text-slate-600"
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
