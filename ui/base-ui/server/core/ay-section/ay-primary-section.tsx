import { PropsWithClassNameAndChildren } from "@/common";
import { AySection } from "./ay-section";

export function AyPrimarySection({
  className,
  children,
}: PropsWithClassNameAndChildren) {
  return (
    <AySection
      color="surface"
      intensity="light"
      className={`py-12 ${className}`}
    >
      {children}
    </AySection>
  );
}
