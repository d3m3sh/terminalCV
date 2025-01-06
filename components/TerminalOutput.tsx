'use client';

import { motion } from 'framer-motion';
import { SkillsOutput } from './outputs/SkillsOutput';
import { ExperienceOutput } from './outputs/ExperienceOutput';
import { ProjectOutput } from './outputs/ProjectOutput';
import { ContactOutput } from './outputs/ContactOutput';
import { FormationOutput } from './outputs/FormationOutput';

interface OutputProps {
  type: 'text' | 'table' | 'experience' | 'project' | 'contact' | 'formation' | 'multiple';
  content: any;
}

export function TerminalOutput({ type, content }: OutputProps) {
  if (type === 'table') {
    return <SkillsOutput content={content} />;
  }

  if (type === 'experience') {
    return <ExperienceOutput content={content} />;
  }

  if (type === 'project') {
    return <ProjectOutput content={content} />;
  }

  if (type === 'contact') {
    return <ContactOutput content={content} />;
  }

  if (type === 'formation') {
    return <FormationOutput content={content} />;
  }

  if (type === 'multiple') {
    return (
      <div className="space-y-4">
        {content.map((item: any, index: number) => (
          <TerminalOutput key={index} type={item.type} content={item.content} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white whitespace-pre-wrap break-words my-2"
    >
      {content}
    </motion.div>
  );
}