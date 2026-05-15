// Home
export type BadgeProps = {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

// Projetos
export type InfoBlockProps = {
  title: string;
  content: string;
}

export type Stack = {
  id: string;
  name: string;
}

export type Demo = {
  id: string;
  url: string;
}

export type Project = {
  id: string;
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  github_url?: string;
  host_url?: string;
  stacks: Stack[];
  projects_demos: Demo[];
}


// Layout
export type LogoProps = {
  width?: number;
  height?: number;
  keyframe?: string;
}

// Services
export type ServiceProps = {
  title: string;
  description: string;
  stacks: string[];
}