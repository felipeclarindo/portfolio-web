// Texts
export type IntroductionProps = {
  text: string;
  description: string | React.ReactNode;
};

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
}