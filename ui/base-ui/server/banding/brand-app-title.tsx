import { combineCss, PropsWithClassName } from "@/common";

export function BrandAppTitle({ invert, className } : PropsWithClassName & { invert?: boolean}) {
  const name = process.env.APP_NAME ?? 'Catalyst Learning';
  return invert ? (
    <span className={combineCss(
      "font-brand",
      "block",
      className
    )}>
      {name.split(' ').map((m, index) => (
        <span key={m+index} className="block">{m}</span>
      ))}
    </span>
  ) : (
    <span className={combineCss(
      "font-brand",
      className
    )}>{name}</span>
  )
}