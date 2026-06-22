"use client";

import Introduction from "@/components/ui/Introduction";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicyScreen() {
  const { translate } = useLanguage();

  return (
    <section
      className="
        relative z-10
        min-h-screen
        px-6
        pt-28
        pb-20
      "
    >
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

      <div className="relative z-10 max-w-4xl mx-auto">
        <Introduction
          text={translate("privacyPolicy.title")}
          description={translate("privacyPolicy.description")}
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
              1. {translate("privacyPolicy.section1.title")}
            </h2>
            <p>{translate("privacyPolicy.section1.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              2. {translate("privacyPolicy.section2.title")}
            </h2>
            <p>{translate("privacyPolicy.section2.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              3. {translate("privacyPolicy.section3.title")}
            </h2>
            <p>{translate("privacyPolicy.section3.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              4. {translate("privacyPolicy.section4.title")}
            </h2>
            <p>{translate("privacyPolicy.section4.content")}</p>
          </div>

          <div>
            <h2 className="text-(--primary-color) text-lg mb-2">
              5. {translate("privacyPolicy.section5.title")}
            </h2>
            <p>{translate("privacyPolicy.section5.content")}</p>
          </div>

          <p className="text-gray-400 text-xs pt-10 text-center">
            {translate("privacyPolicy.lastUpdate")}
          </p>
        </div>
      </div>
    </section>
  );
}
