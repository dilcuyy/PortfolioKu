import { motion } from 'framer-motion';
import { Github } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function GithubContributions() {
  const { t } = useLanguage();
  return (
    <section id="github" className="py-24 bg-[#fafafa] scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            GitHub <span className="text-blue-600">{t('github.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light text-sm md:text-base">
            {t('github.desc')}
          </p>
        </div>

        {/* Contributions Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4">
            <Github size={20} className="text-slate-800" />
            <span className="text-sm font-bold text-slate-855">{t('github.handle')}</span>
          </div>

          {/* Embed Calendar SVG */}
          <div className="w-full overflow-x-auto py-2">
            <div className="min-w-[700px] flex justify-center">
              <img
                src="https://ghchart.rshah.org/2563eb/dilcuyy"
                alt="dilcuyy's GitHub contribution calendar"
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
