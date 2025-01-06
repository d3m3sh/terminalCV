import { technicalSkills, softSkills } from './data/skills';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { formations } from './data/formations';
import { contact } from './data/contact';
import { about } from './data/about';
import { Command } from './types';
import { formatMultipleOutputs } from './utils/display';

export const commands: Command[] = [
  {
    name: 'help',
    description: 'Show available commands',
    action: () => ({
      type: 'text',
      content: `Available commands:
  help       - Show this help message
  clear      - Clear the terminal
  about      - Display information about me
  skills     - List my technical and soft skills
  exp        - Show my work experience
  projects   - View my projects
  formations - View my education history
  contact    - Get my contact information`
    }),
  },
  {
    name: 'about',
    description: 'Display information about me',
    action: () => ({
      type: 'text',
      content: about
    }),
  },
  {
    name: 'skills',
    description: 'List technical and soft skills',
    action: () => ({
      type: 'table',
      content: { technicalSkills, softSkills }
    }),
  },
  {
    name: 'exp',
    description: 'Show work experience',
    action: () => ({
      type: 'multiple',
      content: formatMultipleOutputs(experiences, 'experience')
    }),
  },
  {
    name: 'projects',
    description: 'View projects',
    action: () => ({
      type: 'multiple',
      content: formatMultipleOutputs(projects, 'project')
    }),
  },
  {
    name: 'formations',
    description: 'View education history',
    action: () => ({
      type: 'multiple',
      content: formatMultipleOutputs(formations, 'formation')
    }),
  },
  {
    name: 'contact',
    description: 'Get contact information',
    action: () => ({
      type: 'contact',
      content: contact
    }),
  },
];