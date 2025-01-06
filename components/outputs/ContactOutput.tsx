'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  github: string;
  githubBis: string;
  linkedin: string;
  email: string;
}

export function ContactOutput({ content }: { content: ContactProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-4 space-y-3"
    >
      <motion.a
        href={`https://${content.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-md bg-green-500/5 border border-green-500/20 text-white hover:bg-green-500/10 transition-colors"
        whileHover={{ x: 5 }}
      >
        <Github size={20} className="text-green-500" />
        <span>{content.github}</span>
      </motion.a>

      <motion.a
        href={`https://${content.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-md bg-green-500/5 border border-green-500/20 text-white hover:bg-green-500/10 transition-colors"
        whileHover={{ x: 5 }}
      >
        <Github size={20} className="text-green-500" />
        <span>{content.githubBis}</span>
      </motion.a>

      <motion.a
        href={`https://${content.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-md bg-green-500/5 border border-green-500/20 text-white hover:bg-green-500/10 transition-colors"
        whileHover={{ x: 5 }}
      >
        <Linkedin size={20} className="text-green-500" />
        <span>{content.linkedin}</span>
      </motion.a>

      <motion.a
        href={`mailto:${content.email}`}
        className="flex items-center gap-3 p-3 rounded-md bg-green-500/5 border border-green-500/20 text-white hover:bg-green-500/10 transition-colors"
        whileHover={{ x: 5 }}
      >
        <Mail size={20} className="text-green-500" />
        <span>{content.email}</span>
      </motion.a>
    </motion.div>
  );
}