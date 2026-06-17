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

export type StackProps = {
  id: string;
  name: string;
}

export type ProjectProps = {
  id: string;
  slug: string;
  title: string;
  description: string;
  github_url?: string;
  host_url?: string;
  stacks: StackProps[];
  demonstration_url: string;
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