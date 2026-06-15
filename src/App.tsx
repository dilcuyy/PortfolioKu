import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import BentoGrid from './components/BentoGrid';
import type { Project } from './components/BentoGrid';
import Certificates from './components/Certificates';
import ExperienceTimeline from './components/ExperienceTimeline';
import GithubContributions from './components/GithubContributions';
import ProjectModal from './components/ProjectModal';
import { Sparkles, Mail, MapPin } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const words = ['Hello', 'Selamat Datang', 'Hola', 'Bonjour', 'Konnichiwa', 'Ciao', 'Abdila Asy Syafiq'];

export default function App() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (wordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setWordIndex((prev) => prev + 1);
      }, 250);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [wordIndex]);

  return (
    <>
      {/* Intro Loader Animation (Light Background) */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 bg-[#fafafa] z-50 flex items-center justify-center will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-slate-900 text-4xl md:text-6xl font-extrabold flex items-center gap-3"
            >
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="gradient-text font-black tracking-tight"
              >
                {words[wordIndex]}
              </motion.span>
              <span className="text-blue-600 font-black">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="min-h-screen flex flex-col bg-[#fafafa] text-slate-900"
        >
          {/* Floating Sticky Header */}
          <Navbar />

          <main className="flex-grow">
            {/* Hero Banner Section */}
            <Hero />

            {/* About Profile Section */}
            <About />

            {/* Tech Skills Section */}
            <TechSkills />

            {/* Experiences Section */}
            <ExperienceTimeline />

            {/* Certificates & Awards Section */}
            <Certificates />

            {/* Projects Section */}
            <BentoGrid onSelectProject={setSelectedProject} />

            {/* GitHub Contributions Section */}
            <GithubContributions />

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white scroll-mt-20 overflow-hidden">
              <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left Side - Details */}
                <div className="md:col-span-6 flex flex-col justify-center gap-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                      {t('contact.titleBold')}<span className="text-violet-600">{t('contact.titleHighlight')}</span>
                    </h2>
                    <p className="text-slate-500 mt-4 font-light text-sm md:text-base leading-relaxed">
                      {t('contact.desc')}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* Email Contact */}
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{t('contact.email')}</span>
                        <a href="mailto:abdilaasy00@gmail.com" className="text-sm md:text-base font-extrabold text-slate-800 hover:text-blue-600 transition-colors">
                          abdilaasy00@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Location Contact */}
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-full bg-pink-50 border border-pink-100 text-pink-500 flex items-center justify-center shadow-sm">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{t('contact.location')}</span>
                        <span className="text-sm md:text-base font-extrabold text-slate-800">
                          Bekasi, Indonesia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Google Map of Bekasi */}
                <div className="md:col-span-6">
                  <div className="w-full h-80 md:h-96 rounded-[32px] border border-slate-200 shadow-sm overflow-hidden bg-slate-50 relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96028124237!2d106.9366624949557!3d-6.284795325850974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8557b44747%3A0xa9ffbc860ad74274!2sBekasi%2C%20Bekasi%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1718471182390!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Peta Bekasi"
                      className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200/60 bg-white py-8 text-center text-xs text-slate-500">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>{t('footer.madeWith')}</span>
                <Sparkles size={12} className="text-blue-500 animate-pulse" />
                <span>React, Tailwind & Motion</span>
              </div>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Details modal popup (rendered outside the stacking context) */}
      {!loading && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
