'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectProps {
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  source_code_link: string;
}

export function ProjectOutput({ content }: { content: ProjectProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-4 p-4 rounded-md bg-green-500/5 border border-green-500/20"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-yellow-500">{content.name}</h3>
        <a
          href={content.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
      
      <p className="mt-2 text-white">{content.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {content.tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "px-2 py-1 rounded text-sm",
              tag.color === "blue-text-gradient" && "bg-blue-500/20 text-blue-400",
              tag.color === "green-text-gradient" && "bg-green-500/20 text-white",
              tag.color === "pink-text-gradient" && "bg-pink-500/20 text-pink-400"
            )}
          >
            {tag.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}