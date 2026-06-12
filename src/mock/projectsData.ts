import { ProjectProps } from "@/types/pages";

export const projectsData: ProjectProps[] = [
  {
    id: "1",
    slug: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, showcasing my projects and skills.",
    host_url: "https://my-portfolio.com",
    github_url: "https://github.com/felipeclarindo/portfolio-web",
    stacks: [
      { id: "1", name: "Next.js" },
      { id: "2", name: "React" },
      { id: "3", name: "TypeScript" },
    ],
    project_demostration: [
      {
        id: "1",
        url: "/movies/portfolio-demo.mp4",
      },
    ],
  },
];