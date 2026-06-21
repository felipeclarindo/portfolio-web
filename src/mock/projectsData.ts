import { ProjectProps } from "@/types/pages";

export const projectsData: ProjectProps[] = [
  {
    id: "1",
    slug: "territorio-midias-brasil",
    title: {
      pt: "Território Mídias Brasil",
      en: "Território Mídias Brasil",
    },

    description: {
      pt: "Rede nacional de comunicação popular criada em 2025 e consolidada em 2026, com o objetivo de articular, fortalecer e dar visibilidade a mídias periféricas, comunitárias e independentes de favelas, periferias e comunidades tradicionais em todo o país.",
      en: "National popular communication network created in 2025 and consolidated in 2026, with the objective of articulating, strengthening and giving visibility to peripheral, community and independent media from favelas, peripheries and traditional communities throughout the country.",
    },

    host_url: "https://territoriomidiasbrasil.com.br/",
    github_url: "",

    stacks: [
      { id: "1", name: "Wordpress" },
      { id: "2", name: "PHP" },
      { id: "3", name: "JavaScript" },
    ],
  },
  {
    id: "2",
    slug: "cripto-g",
    title: {
      pt: "Cripto G",
      en: "Cripto G",
    },

    description: {
      pt: "Sistema de geração de senha para criação de senhas seguras e únicas, utilizando algoritmos de hash para transformar informações em senhas criptografadas, garantindo a segurança dos dados dos usuários.",
      en: "Secure password generation system for creating unique passwords, utilizing hash algorithms to transform information into encrypted passwords, ensuring the security of user data.",
    },

    host_url: "",
    github_url: "https://github.com/felipeclarindo/criptog",

    stacks: [
      { id: "1", name: "Python" },
      { id: "2", name: "CustomTkInter" },
    ],
  },
  {
    id: "3",
    slug: "marketing-portfolio-web",
    title: {
      pt: "Marketing Portfolio",
      en: "Marketing Portfolio",
    },
    description: {
      pt: "Site web de marketing desenvolvido com foco em SEO, onde é exibido todos os detalhes e informações necessarias com foco em atrair clientes.",
      en: "Marketing website developed with a focus on SEO, where all the necessary details and information are displayed with the aim of attracting clients.",
    },
    host_url: "https://marketing-pamela-web.vercel.app/",
    github_url: "https://github.com/felipeclarindo/marketing-pamela-web",
    stacks: [
      { id: "1", name: "TypeScript" },
      { id: "2", name: "React" },
      { id: "3", name: "Next.js" },
      { id: "4", name: "Tailwind CSS" },
      { id: "5", name: "SEO" },
      { id: "6", name: "Google Analytics" },
    ],
  },
  {
    id: "4",
    slug: "my-energy",
    title: {
      pt: "My Energy",
      en: "My Energy",
    },
    description: {
      pt: "Dashboard de monitoramento de consumo de energia elétrica, onde os usuários podem acompanhar em tempo real o consumo de energia em suas residências, identificar padrões de uso e receber recomendações para otimizar o consumo e reduzir custos.",
      en: "Energy consumption monitoring dashboard, where users can track their electricity usage in real-time, identify usage patterns, and receive recommendations to optimize consumption and reduce costs.",
    },
    host_url: "",
    github_url: "https://github.com/felipeclarindo/my-energy",
    stacks: [
      { id: "1", name: "TypeScript" },
      { id: "2", name: "React" },
      { id: "3", name: "Next.js" },
      { id: "4", name: "Tailwind CSS" },
      { id: "5", name: "SEO" },
      { id: "6", name: "Google Analytics" },
      { id: "7", name: "Python" },
    ],
  },
];
