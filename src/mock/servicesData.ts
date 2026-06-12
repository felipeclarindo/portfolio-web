"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const useServices = () => {
    const { translate } = useLanguage();

  return [
    {
      title: translate("services.serviceOneTitle"),
      description: translate("services.serviceOneDescription"),
      stacks: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
      title: translate("services.serviceTwoTitle"),
      description: translate("services.serviceTwoDescription"),
      stacks: ["Node.js", "Python", "PostgreSQL", "Supabase", "Firebase"],
    },
    {
      title: translate("services.serviceThreeTitle"),
      description: translate("services.serviceThreeDescription"),
      stacks: ["Python", "Selenium", "APIs", "Scrapping"],
    },
    {
      title: translate("services.serviceFourTitle"),
      description: translate("services.serviceFourDescription"),
      stacks: ["Python", "Pandas", "Scikit-learn", "OpenCV", "yolo", "PyTorch"],
    },
  ]
}