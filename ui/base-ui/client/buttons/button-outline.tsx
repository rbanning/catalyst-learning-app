"use client";

import {
  bgColorCss,
  borderColorCss,
  combineCss,
  textColorCss,
  ThemeColorBasic,
  ThemeColorBGWithTransparent,
  ThemeColorBlackWhite,
  ThemeColorIntensity,
  ThemeColorOpacity,
} from "@/common";
import { ButtonBaseProps } from "./button-props.type";
import { ButtonBase } from "./button-base";

export type ButtonOutlineProps = ButtonBaseProps & {
  color: ThemeColorBasic | ThemeColorBlackWhite;
  intensity?: ThemeColorIntensity;
  opacity?: ThemeColorOpacity;
  bg?: ThemeColorBGWithTransparent;
};

export function ButtonOutline({
  color,
  intensity,
  opacity,
  bg,

  children,
  ...props
}: ButtonOutlineProps) {
  //build background, border and text colors
  const bgCss = bgColorCss(bg ?? 'transparent');
  const borderCss = borderColorCss(color, intensity, opacity);
  const textCss = textColorCss(color, intensity, opacity);

  return (
    <ButtonBase
      {...props}
      className={combineCss(
        "button-base",
        "button-outline",
        bgCss,
        borderCss,
        textCss
      )}
    >
      {children}
    </ButtonBase>
  );
}
