"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const useBenefits = () => {
  const { translate } = useLanguage();

  return [
    {
      title: translate("home.benefits.benefitOne"),
      desc: translate("home.benefits.benefitOneDescription"),
    },
    {
      title: translate("home.benefits.benefitTwo"),
      desc: translate("home.benefits.benefitTwoDescription"),
    },
    {
      title: translate("home.benefits.benefitThree"),
      desc: translate("home.benefits.benefitThreeDescription"),
    }
  ];
};

export const useStats = () => {
  const { translate } = useLanguage();

  return [
    { number: 120, label:  translate('home.stats.projectsDelivered'), suffix: "+" },
    { number: 100, label: translate('home.stats.recomendations'), suffix: "+" },
    { number: 4, label: translate('home.stats.yearsOfExperience'), suffix: "+" },
  ];
};