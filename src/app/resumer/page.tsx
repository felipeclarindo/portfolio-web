import AnimatedBackground from "@/components/ui/BackgroundAnimated";

export default function ResumerPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <AnimatedBackground />

      <h1 className="mt-20 text-green-400 z-1 font-mono text-2xl">Currículo</h1>
      {/* Add your resume content here */}
    </main>
  );
}
