import { SiteLayoutWrapper } from '@/ui/site-layout-ui/server';
import { PropsWithChildren } from "react";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <SiteLayoutWrapper>
      {children}
    </SiteLayoutWrapper>
  )
}