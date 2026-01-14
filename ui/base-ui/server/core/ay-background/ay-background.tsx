import {
  ThemeColorFullWithTransparent,
  ThemeColorBlackWhite,
  bgColorCss,
  combineCss,
  ColorProps,
  PropsWithClassNameAndChildren,
} from "@/common";

export type AyBackgroundColorProps = ColorProps<
  ThemeColorFullWithTransparent | ThemeColorBlackWhite
>;

export type AyBackgroundProps = PropsWithClassNameAndChildren &
  AyBackgroundColorProps;

export function AyBackground(props: AyBackgroundProps) {
  const bgColor = bgColorCss(
    props.color ?? "background",
    props.intensity,
    props.opacity
  );

  return (
    <div className={combineCss(bgColor, props.className)}>{props.children}</div>
  );
}
