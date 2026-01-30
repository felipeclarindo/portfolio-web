import AnimatedBackground from "@/components/ui/BackgroundAnimated";

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <AnimatedBackground />

      <h1 className="mt-20 text-green-400 z-1 font-mono text-2xl">Projetos</h1>
      {/* Add your projects content here */}
    </main>
  );
}
