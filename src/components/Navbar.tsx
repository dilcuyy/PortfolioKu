import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';

interface NavItem {
  name: string;
  href: string;
  activeColor: string;
  key: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', activeColor: 'bg-blue-600 text-white', key: 'nav.home' },
  { name: 'About', href: '#about', activeColor: 'bg-pink-500 text-white', key: 'nav.about' },
  { name: 'Experience', href: '#experience', activeColor: 'bg-purple-500 text-white', key: 'nav.experience' },
  { name: 'Certificates', href: '#certificates', activeColor: 'bg-cyan-500 text-white', key: 'nav.certificates' },
  { name: 'Projects', href: '#projects', activeColor: 'bg-emerald-500 text-white', key: 'nav.projects' },
  { name: 'Contact', href: '#contact', activeColor: 'bg-orange-500 text-white', key: 'nav.contact' },
];

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'ID', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'JA', label: '日本語', flag: '🇯🇵' },
  { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'certificates', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // trigger when section is in active center view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    // Detect when user scrolls all the way to the bottom to force active Contact state
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none will-change-transform"
    >
      <div
        className={`w-full max-w-4xl glass-panel rounded-full px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 shadow-sm border border-slate-200/60 bg-white/90`}
      >
        {/* Logo */}
        <a href="#home" className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1 group">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs text-white font-black shadow-sm group-hover:scale-105 transition-transform">
            AA
          </span>
          <span className="font-extrabold group-hover:text-blue-600 transition-colors">
            .
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isSelected = activeSection === item.href.slice(1);
            const bgClass = item.activeColor.split(' ')[0]; // Extract just the bg color class
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 z-10 ${
                  isSelected
                    ? 'text-white font-extrabold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="active-pill-bg"
                    className={`absolute inset-0 rounded-full -z-10 will-change-transform ${bgClass}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {t(item.key)}
              </a>
            );
          })}
        </nav>

        {/* Action (Language selector & Socials) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-3">
            <a
              href="https://github.com/dilcuyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors p-1"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdila-asy-syafiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors p-1"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Globe size={12} className="text-slate-500" />
              <span>{language}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-2 z-20 flex flex-col gap-0.5"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all text-left cursor-pointer ${
                          language === lang.code
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900 transition-colors p-1 cursor-pointer"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 bg-white border border-slate-200 shadow-xl rounded-3xl p-5 flex flex-col gap-3 pointer-events-auto will-change-[opacity,transform]"
          >
            {navItems.map((item) => {
              const isSelected = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-bold tracking-wide transition-all ${
                    isSelected ? item.activeColor : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
              <div className="flex gap-3">
                <a href="https://github.com/dilcuyy" target="_blank" rel="noopener noreferrer" className="text-slate-500 p-1">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/abdila-asy-syafiq" target="_blank" rel="noopener noreferrer" className="text-slate-500 p-1">
                  <Linkedin size={18} />
                </a>
              </div>
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer"
                >
                  <Globe size={12} />
                  <span>{language}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 bottom-8 w-32 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-2 z-20 flex flex-col gap-0.5"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setLangOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all text-left cursor-pointer ${
                              language === lang.code
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
