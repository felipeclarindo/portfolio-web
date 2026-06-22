import { LogoProps } from "@/types/pages";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ height, width }: Readonly<LogoProps>) {
  return (
    <Link href="/" className={`flex items-center`}>
      <Image
        src="/images/favicon.png"
        alt="Felipe Clarindo Logo"
        width={width}
        height={height}
        priority
        className="w-auto h-auto"
      />
    </Link>
  );
}
