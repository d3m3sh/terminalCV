'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface FormationProps {
  school: string;
  logo: string;
  period: string;
  title: string;
}

export function FormationOutput({ content }: { content: FormationProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-4 p-4 rounded-md bg-green-500/5 border border-green-500/20"
    >
      <div className="flex items-center gap-2">
        <GraduationCap size={20} className="text-yellow-500" />
        <h3 className="text-xl font-semibold text-yellow-500">{content.school}</h3>
      </div>
      
      <div className="flex items-center gap-2 mt-2 text-gray-400">
        <Calendar size={16} />
        <span>{content.period}</span>
      </div>
      
      <p className="mt-2 text-white pl-6 border-l border-green-500/20">
        {content.title}
      </p>
    </motion.div>
  );
}