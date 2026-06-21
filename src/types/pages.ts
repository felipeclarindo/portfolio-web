// Home
export type BadgeProps = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

// Projetos
export type InfoBlockProps = {
  title: string;
  content: string;
};

export type StackProps = {
  id: string;
  name: string;
};

type TranslationField = {
  pt: string;
  en: string;
};

export type ProjectProps = {
  id: string;
  slug: string;

  title: TranslationField;
  description: TranslationField;

  host_url: string;
  github_url: string;

  stacks?: StackProps[];
  cliente?: string;

  demonstration_url?: string;
  image?: string;
};

// Layout
export type LogoProps = {
  width?: number;
  height?: number;
  keyframe?: string;
};

// Services
export type ServiceProps = {
  title: string;
  description: string;
  stacks: string[];
};
