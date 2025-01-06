export interface Skill {
  name: string;
  icon: string;
}

export interface Formation {
  school: string;
  logo: string;
  period: string;
  title: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

export interface Command {
  name: string;
  description: string;
  action: () => {
    type: 'text' | 'table' | 'experience' | 'project' | 'contact' | 'formation' | 'multiple';
    content: any;
  };
}