import { IntroductionProps } from "@/types/ui";

export default function Introduction(props: Readonly<IntroductionProps>) {
  return (
    <div className="max-w-5xl mx-auto mb-20 text-center">
      <h1 className="font-mono text-4xl md:text-6xl text-[var(--primary-color)] mb-6">
        <span className="opacity-50">&gt;_</span> {props.text}
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto">{props.description}</p>
    </div>
  );
}
