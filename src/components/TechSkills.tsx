import { motion } from 'framer-motion';
import { Wind, Database, Layers, Terminal, Atom, Layout, GitBranch, FileCode, Server, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const skillsList = [
  { name: 'Tailwind CSS', icon: Wind, color: 'text-sky-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-indigo-600' },
  { name: 'Next.js', icon: Layers, color: 'text-slate-900' },
  { name: 'Laravel', icon: Terminal, color: 'text-rose-600' },
  { name: 'ReactJS', icon: Atom, color: 'text-sky-500' },
  { name: 'Figma', icon: Layout, color: 'text-orange-500' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
  { name: 'PHP', icon: FileCode, color: 'text-indigo-400' },
  { name: 'MySQL', icon: Server, color: 'text-blue-500' },
  { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
];

export default function TechSkills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 bg-[#fafafa] scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t('skills.title')}<span className="text-pink-500">.</span>
          </h2>
        </div>

        {/* Chips Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {skillsList.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 bg-white border border-slate-200/80 shadow-sm rounded-full cursor-pointer hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-1 rounded-lg bg-slate-50 ${skill.color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs font-bold text-slate-700 tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
