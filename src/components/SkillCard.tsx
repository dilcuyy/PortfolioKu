import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  category: string;
  icon: LucideIcon;
  level: string;
  description: string;
  colorClass: string;
}

export default function SkillCard({ name, category, icon: Icon, level, description, colorClass }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl border border-white/5 bg-slate-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/30 overflow-hidden"
    >
      {/* Dynamic Glowing Border Highlight */}
      <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
      
      {/* Light glow inside the card */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          {/* Skill Icon */}
          <div className={`p-3 rounded-xl bg-slate-900/80 border border-white/5 group-hover:border-indigo-500/30 transition-colors ${colorClass}`}>
            <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          {/* Skill Level Badge */}
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all">
            {level}
          </span>
        </div>
        
        {/* Info */}
        <div>
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{category}</span>
          <h3 className="text-lg font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">{name}</h3>
          <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
