"use client";

import {
  bgColorCss,
  combineCss,
  textColorCss,
  ThemeColorBasic,
  ThemeColorBGWithTransparent,
  ThemeColorBlackWhite,
  ThemeColorIntensity,
} from "@/common";
import { ButtonBaseProps } from "./button-props.type";
import { ButtonBase } from "./button-base";

export const hoverTypes = ['none', 'bottom', 'bg', 'grow'] as const;
export type HoverType = (typeof hoverTypes)[number];


export type ButtonProps = ButtonBaseProps & {
  bg?: ThemeColorBGWithTransparent;
  color?: ThemeColorBasic | ThemeColorBlackWhite;
  intensity?: ThemeColorIntensity;
  hover?: HoverType;
};

export function Button({
  bg,
  color,
  intensity,
  hover,

  children,
  ...props
}: ButtonProps) {
  //build background and text colors
  const bgCss = bgColorCss(bg ?? "background");
  const textCss = textColorCss(color ?? "black", intensity);

  return (
    <ButtonBase
      {...props}
      className={combineCss(
        "button-base", 
        "button", 
        bgCss, 
        textCss,
        `_hover-${hover ?? 'none'}`,
      )}
    >
      {children}
    </ButtonBase>
  );
}
