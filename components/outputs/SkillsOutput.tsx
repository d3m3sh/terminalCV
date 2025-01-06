'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Command, Terminal, Code, Star } from 'lucide-react';

interface TechnicalSkillProps {
  name: string;
  icon: string;
}

interface SkillsProps {
  technicalSkills: TechnicalSkillProps[];
  softSkills: string[];
}

const iconMap = {
  assembly: Command,
  c: Code,
  // Add more icon mappings as needed
};

export function SkillsOutput({ content }: { content: SkillsProps }) {
  return (
    <div className="space-y-6 mb-4 overflow-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-yellow-500 text-lg mb-3 flex items-center gap-2">
          <Code size={18} />
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mr-2">
          {content.technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-2 rounded-md bg-green-500/10 border border-green-500/20"
            >
              {iconMap[skill.icon as keyof typeof iconMap] ? (
                <span className="text-green-500">
                  {React.createElement(iconMap[skill.icon as keyof typeof iconMap], { size: 18 })}
                </span>
              ) : (
                <Terminal size={18} className="text-green-500" />
              )}
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-yellow-500 text-lg mb-3 flex items-center gap-2">
          <Star size={18} />
          Soft Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mr-2">
          {content.softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 p-2 rounded-md bg-green-500/10 border border-green-500/20"
            >
              <Star size={18} className="text-green-500" />
              <span className="text-white text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}