import Link from "next/link";
import {
  combineCss
} from "@/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AySection, BrandAppTitle, BrandLogo } from "@/ui/base-ui/server";

export function PrimaryFooter() {
  const css = combineCss("max-w-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-hallpass-primary-dark");

  return (
    <AySection
      color="primary"
      opacity="quarter"
      verticalPadding="none"
      className="mt-24"
    >
      <footer className="group pt-12">
        <div className={css}>
          <div className="flex gap-1">
            <div>
              <BrandLogo size={32} />            
            </div>
            <BrandAppTitle invert />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {/* todo: add links as needed */}
            <Link href="/about" className="simple">
              About
            </Link>
            <Link href="/contact" className="simple">
              Contact
            </Link>
            <a href="https://github.com/rbanning/catalyst-learning-app" target="_blank" className="simple">
              <span>Source Repo</span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="my-4 py-2 flex justify-center gap-4 bg-hallpass-primary-dark/70 text-white rounded text-sm">
          <span>&copy;{new Date().getFullYear()} Hallpass and Friends (a Banning Applications Pivot) - all rights reserved</span>
          <Link href="/about/privacy">Privacy</Link>
          <Link href="/about/terms">Terms</Link>
        </div>
      </footer>
    </AySection>
  );
}
