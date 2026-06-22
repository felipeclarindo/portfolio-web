// Texts
export type IntroductionProps= {
  text: React.ReactNode;
  description?: React.ReactNode;
  iconElement?: boolean;
}

// Footer
export type FooterLinkProps = {
  href: string;
  text: string;
  linkRapido?: boolean;
};

export type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export type CounterProps = {
  from?: number;
  to: number;
};
