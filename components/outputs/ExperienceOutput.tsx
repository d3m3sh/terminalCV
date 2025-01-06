'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceProps {
  title: string;
  company_name: string;
  date: string;
  points: string[];
}

export function ExperienceOutput({ content }: { content: ExperienceProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-4 p-4 rounded-md bg-green-500/5 border border-green-500/20"
    >
      <h3 className="text-xl font-semibold text-yellow-500">{content.title}</h3>
      
      <div className="flex items-center gap-2 mt-2 text-blue-400">
        <Building2 size={16} />
        <span>{content.company_name}</span>
      </div>
      
      <div className="flex items-center gap-2 mt-1 text-gray-400">
        <Calendar size={16} />
        <span>{content.date}</span>
      </div>
      
      <ul className="mt-4 space-y-2">
        {content.points.map((point, index) => (
          <motion.li
            key={index}
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-white pl-4 border-l border-green-500/20"
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}