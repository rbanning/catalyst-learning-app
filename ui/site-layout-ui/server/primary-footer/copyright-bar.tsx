import Link from "next/link";
import companyLogo from "@/public/hallpass.128.png";
import Image from "next/image";

export function CopyrightBar() {
  const copyright = process.env.copyright ?? 'Hallpass and Friends - all rights reserved';
  const size = 18;
  return (
    <div className="py-2 flex justify-center items-center gap-4 bg-hallpass-primary-dark/90 text-white text-sm">
      <span>&copy;{new Date().getFullYear()} {copyright}</span>
      <span className="py-2">
        <Image 
          src={companyLogo}
          alt="company logo"
          width={size}
          height={size}
        />

      </span>
      <Link href="/about/privacy" className="white">Privacy</Link>
      <Link href="/about/terms" className="white">Terms</Link>
    </div>    
  )
}