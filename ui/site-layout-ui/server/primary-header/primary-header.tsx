import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faTents } from "@fortawesome/free-solid-svg-icons";

import { combineCss } from "@/common";
import { BrandAppTitle, BrandLogo } from "@/ui/base-ui/server";


import styles from "./primary-header.module.css";

export function PrimaryHeader() {

  const css = combineCss(
    "fixed top-0 left-0 w-full",
    "text-xl border-b-4 z-10",
    "bg-hallpass-primary-dark",
    "border-hallpass-neutral/50",
    styles["header"],
  );

  return (
    <header className={css}>
      <div className="group view-area">
        <nav className="py-3 flex items-center gap-8 w-full text-hallpass-on-primary-dark/90 group-hover:text-hallpass-on-primary-dark contrast-more:text-hallpass-on-primary-dark transition-colors">
          <Link href="/" className="flex items-center font-medium gap-2">
            <BrandLogo />
            <BrandAppTitle className="text-3xl" />
          </Link>
          <span className="flex-1"></span>

          {/* DESKTOP / TABLET BUTTONS */}
          <span className="hidden md:inline-flex md:items-center md:flex-1 md:gap-4 lg:gap-6">
            {/* todo: update as needed */}
            <Link href="/demo/challenge">
              <button>
                <FontAwesomeIcon icon={faTents} />
                <span>Static Challenge</span>
              </button>
            </Link>
            <Link href="/demo/theme">
              <button>
                <FontAwesomeIcon icon={faSmile} />
                <span>Theme</span>
              </button>
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
