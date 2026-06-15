import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import the yellow portrait photo
import devAboutImg from '../assets/developer_about.png';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Portrait in yellow container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[32px] overflow-hidden bg-amber-400 p-2 shadow-lg">
            <img
              src={devAboutImg}
              alt="Abdila Asy Syafiq"
              className="w-full h-full object-cover rounded-[26px]"
            />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          {/* Badge Headers */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider">
              {t('about.badge')}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-black uppercase tracking-wider">
              FULLSTACK DEVELOPER
            </span>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-4 text-slate-600 font-light text-base leading-relaxed">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>

          {/* Download CV CTA */}
          <div className="mt-2">
            <a
              href="/Abdila-Asy-Syafiq-resume.pdf"
              download="Abdila-Asy-Syafiq-resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md hover:scale-103"
            >
              <Download size={14} />
              <span>{t('about.downloadCv')}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
