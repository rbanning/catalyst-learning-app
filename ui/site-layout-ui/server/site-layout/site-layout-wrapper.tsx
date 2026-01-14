import { OfflineWrapper } from "../../client";
import { PrimaryFooter } from "../primary-footer/primary-footer";
import { PrimaryHeader } from "../primary-header/primary-header";
import { NoScript } from "./no-script";

export function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-0 pt-18">
      <NoScript />
      <OfflineWrapper />
      <PrimaryHeader />
        <main>{children}</main>
       <PrimaryFooter />
    </div>
  );
}