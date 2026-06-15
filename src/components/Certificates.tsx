import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import certificate images
import certReact from '../assets/certificates/cert_react.png';
import certCisco from '../assets/certificates/cert_cisco.png';
import certChallenge from '../assets/certificates/cert_challenge.png';
import certCv from '../assets/certificates/cert_cv.png';
import certDigital from '../assets/certificates/cert_digital.png';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'ReactJS / Frontend Web Development Certificate',
    issuer: 'MySkill Training Platform',
    date: '2024',
    image: certReact,
  },
  {
    id: 2,
    title: 'IT Essentials: PC Hardware and Software',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: certCisco,
  },
  {
    id: 3,
    title: 'Digital Competency Challenge Program',
    issuer: 'Universitas Bani Saleh',
    date: '2024',
    image: certChallenge,
  },
  {
    id: 4,
    title: 'Seminar: Kupas Tuntas CV & Personal Branding',
    issuer: 'Himpunan Mahasiswa Sistem Informasi',
    date: '2024',
    image: certCv,
  },
  {
    id: 5,
    title: 'Sertifikat Kelulusan Literasi Digital Nasional',
    issuer: 'Kementerian Komunikasi dan Informatika (Kominfo)',
    date: '2024',
    image: certDigital,
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 bg-[#fafafa] scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t('cert.titleBold')} <span className="text-cyan-500">{t('cert.titleHighlight')}</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto font-light text-sm md:text-base">
            {t('cert.desc')}
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: cert.id * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all cursor-pointer aspect-[1.414/1] flex items-center justify-center shrink-0"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              {/* Hover Lens Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px] duration-300">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-cyan-600 font-bold text-xs shadow-sm hover:scale-105 transition-transform duration-200">
                  <ExternalLink size={12} />
                  <span>{t('cert.zoom')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox zoom modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm cursor-zoom-out"
            />
            
            {/* Modal Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex items-center justify-center p-2 border border-slate-200/40 will-change-transform"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white transition-colors cursor-pointer flex items-center justify-center shadow-md"
              >
                <X size={16} />
              </button>
              
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[82vh] object-contain rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
