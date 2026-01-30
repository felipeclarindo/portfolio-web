import IntroductionSection from "@/components/sections/IntroductionSection";
import BackgroundAnimated from "@/components/ui/BackgroundAnimated";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <BackgroundAnimated />

      {/* Sections */}
      <IntroductionSection />
    </main>
  );
}
