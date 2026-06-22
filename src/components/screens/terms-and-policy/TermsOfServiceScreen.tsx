"use client";

import Introduction from "@/components/ui/Introduction";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfServiceScreen() {
  const { translate } = useLanguage();

  return (
    <section
      className="
     relative z-10
     min-h-screen
     px-6
     pt-28
     pb-20
     flex flex-col
     items-center
   "
    >
      {/* Decorative Grid */}{" "}
      <div
        aria-hidden
        className="
       pointer-events-none
       absolute inset-0
       bg-[linear-gradient(to_right,rgba(0,255,140,0.05)_1px,transparent_1px)]
       bg-size-[48px_48px]
       opacity-20
     "
      />
      <div className="relative z-10 w-full max-w-4xl">
        <Introduction
          text={translate("termsOfService.title")}
          description={translate("termsOfService.description")}
        />

        <div
          className="
        mt-12
        space-y-8
        text-gray-300
        text-sm md:text-base
        leading-relaxed
        font-mono
      "
        >
          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              1. {translate("termsOfService.section1.title")}
            </h2>
            <p>{translate("termsOfService.section1.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              2. {translate("termsOfService.section2.title")}
            </h2>
            <p>{translate("termsOfService.section2.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              3. {translate("termsOfService.section3.title")}
            </h2>
            <p>{translate("termsOfService.section3.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              4. {translate("termsOfService.section4.title")}
            </h2>
            <p>{translate("termsOfService.section4.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              5. {translate("termsOfService.section5.title")}
            </h2>
            <p>{translate("termsOfService.section5.content")}</p>
          </div>

          <p className="text-gray-400 text-xs pt-10 text-center">
            {translate("termsOfService.lastUpdate")}
          </p>
        </div>
      </div>
    </section>
  );
}
