import { inlineSwitch, Nullable, bgColorCss, ThemeColorFull, ThemeColorIntensity, ThemeColorOpacity, themeSizeList } from "@/common";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logicalSizeList = ['thin', ...themeSizeList] as const;
type LogicalSize = (typeof logicalSizeList )[number];

type DividerSize = LogicalSize | number;

export function AyDivider({ size, color, intensity, opacity, className }: {
  size?: Nullable<DividerSize>;
  color?: Nullable<ThemeColorFull>;
  intensity?: Nullable<ThemeColorIntensity>;
  opacity?: Nullable<ThemeColorOpacity>;
  className?: string;
}) {

  size ??= 'sm'; // default size
  const sizeValue: string = typeof size === 'number' 
    ? `${size}px` 
    : (inlineSwitch(size, 
      {match: 'thin', result: `1px` },
      {match: 'sm', result: `0.25rem` },
      {match: 'md', result: `0.5rem` },
      {match: 'lg', result: `1rem` },
    ) ?? '1px'); // default to 1px if not matched

  const colorCss = bgColorCss(color ?? 'neutral', intensity ?? 'DEFAULT', opacity ?? 'full');

  return (
    <div className={`w-full rounded ${colorCss} ${className || ''}`} style={{ height: sizeValue }} />
  );

}